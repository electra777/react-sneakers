import { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import CartDrawer from './components/CartDrawer/CartDrawer';
import Header from './components/Header/Header';

function App() {
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [cartOpened, setCartOpened] = useState(false);

	useEffect(() => {
		fetch('https://654cf1d077200d6ba859c0a0.mockapi.io/data')
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setItems(data);
			});
	}, []);

	const handleClickPlus = (obj) => {
		if (!cartItems.includes(obj)) {
			setCartItems((prev) => [...prev, obj]);
		} else {
			// If obj IS in cartItems, remove it
			setCartItems((prev) => prev.filter((item) => item !== obj));
		}
	};

	const onChangeSearchInput = (e) => {
		setSearchValue(e.target.value);
	};

	return (
		<div className="wrapper">
			{cartOpened && (
				<CartDrawer
					cartItems={cartItems}
					onClose={() => {
						setCartOpened(false);
					}}
				/>
			)}

			<div className="container">
				<Header onClickCart={() => setCartOpened(true)} />

				<div className="top">
					<h1 className="title">
						{searchValue ? `Поиск по запросу "${searchValue}"` : `Все кроссовки`}
					</h1>
					<div className="searchBlock">
						<input
							type="text"
							placeholder="Поиск..."
							className="searchInput"
							onChange={onChangeSearchInput}
							value={searchValue}
						/>
						{searchValue && (
							<button
								className="clearSearch"
								onClick={() => {
									setSearchValue('');
								}}></button>
						)}
					</div>
				</div>

				<div className="content">
					{items
						.filter((item) => item.title.toLowerCase().includes(searchValue))
						.map((item) => {
							return (
								<Card
									key={item.id}
									id={item.id}
									title={item.title}
									price={item.price}
									imageUrl={item.imageUrl}
									onAddToCart={() => handleClickPlus(item)}
								/>
							);
						})}
				</div>
			</div>
		</div>
	);
}

export default App;

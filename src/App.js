import { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import CartDrawer from './components/CartDrawer/CartDrawer';
import Header from './components/Header/Header';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';

function App() {
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [favoriteItems, setFavoriteItems] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [cartOpened, setCartOpened] = useState(false);

	useEffect(() => {
		axios.get('https://654cf1d077200d6ba859c0a0.mockapi.io/data').then((res) => {
			setItems(res.data);
		});
		axios.get('https://654cf1d077200d6ba859c0a0.mockapi.io/cart').then((res) => {
			setCartItems(res.data);
		});
	}, []);

	const handleClickPlus = (obj) => {
		if (!cartItems.includes(obj)) {
			setCartItems((prev) => [...prev, obj]);
			// поправить, чтобы не дублировалось на сервере при мульти кликах
			axios.post('https://654cf1d077200d6ba859c0a0.mockapi.io/cart', obj);
		} else {
			// If obj IS in cartItems, remove it
			setCartItems((prev) => prev.filter((item) => item !== obj));
			axios.delete('https://654cf1d077200d6ba859c0a0.mockapi.io/cart', obj);
		}
	};

	const onRemoveItem = (id) => {
		setCartItems((prev) => prev.filter((item) => item.id !== id));

		// axios.delete(`https://654cf1d077200d6ba859c0a0.mockapi.io/cart${id}`);
	};

	const handleClickFavorite = (obj) => {
		if (!favoriteItems.includes(obj)) {
			setFavoriteItems((prev) => [...prev, obj]);
			// поправить, чтобы не дублировалось на сервере при мульти кликах
			axios.post('https://654cf1d077200d6ba859c0a0.mockapi.io/favorites', obj);
		} else {
			setFavoriteItems((prev) => prev.filter((item) => item !== obj));
			axios.delete('https://654cf1d077200d6ba859c0a0.mockapi.io/favorites', obj);
		}
	};

	return (
		<div className="wrapper">
			{cartOpened && (
				<CartDrawer
					cartItems={cartItems}
					onClose={() => {
						setCartOpened(false);
					}}
					onRemoveItem={onRemoveItem}
				/>
			)}

			<Link to={'/test'}>test</Link>

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
							onChange={(e) => {
								setSearchValue(e.target.value);
							}}
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
									onAddToFavorite={() => handleClickFavorite}
								/>
							);
						})}
				</div>
			</div>
		</div>
	);
}

export default App;

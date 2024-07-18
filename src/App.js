import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import CartDrawer from './components/CartDrawer/CartDrawer';
import Header from './components/Header/Header';
import axios from 'axios';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [favoriteItems, setFavoriteItems] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [cartOpened, setCartOpened] = useState(false);

	useEffect(() => {
		try {
			axios.get('https://654cf1d077200d6ba859c0a0.mockapi.io/data').then((res) => {
				setItems(res.data);
			});
		} catch (err) {
			// throw new Error(err);
			setItems([]);
		}

		axios.get('https://654cf1d077200d6ba859c0a0.mockapi.io/cart').then((res) => {
			setCartItems(res.data);
		});
	}, []);

	const handleClickPlus = (obj) => {
		if (!cartItems.includes(obj)) {
			setCartItems((prev) => [...prev, obj]);
			// TODO: чтобы не дублировалось на сервере при мульти кликах
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
			// axios.post('https://654cf1d077200d6ba859c0a0.mockapi.io/favorites', obj);
		} else {
			setFavoriteItems((prev) => prev.filter((item) => item !== obj));
			// axios.delete('https://654cf1d077200d6ba859c0a0.mockapi.io/favorites', obj);
		}
	};

	return (
		<div className="wrapper">
			<div className="container">
				{cartOpened && (
					<CartDrawer
						cartItems={cartItems}
						onClose={() => {
							setCartOpened(false);
						}}
						onRemoveItem={onRemoveItem}
					/>
				)}

				<Header onClickCart={() => setCartOpened(true)} />

				<Routes>
					<Route
						path="/"
						element={
							<Home
								items={items}
								searchValue={searchValue}
								setSearchValue={setSearchValue}
								handleClickPlus={handleClickPlus}
								handleClickFavorite={handleClickFavorite}
							/>
						}
					/>
					<Route
						path="/favorites"
						element={
							<Favorites
								handleClickFavorite={handleClickFavorite}
								favoriteItems={favoriteItems}
								setFavoriteItems={setFavoriteItems}
							/>
						}
					/>
				</Routes>
			</div>
		</div>
	);
}

export default App;

import { useState } from 'react';
import Card from './components/Card/Card';
import CartDrawer from './components/CartDrawer/CartDrawer';
import Header from './components/Header/Header';

function App() {
	const [cartOpened, setCartOpened] = useState(false);

	return (
		<div className="wrapper">
			{cartOpened && (
				<CartDrawer
					onClose={() => {
						setCartOpened(false);
					}}
				/>
			)}

			<div className="container">
				<Header onClickCart={() => setCartOpened(true)} />

				<div className="top">
					<h1 className="title">Все кроссовки</h1>
					<input type="text" placeholder="Поиск..." className="searchInput" />
				</div>

				<div className="content">
					<Card />
				</div>
			</div>
		</div>
	);
}

export default App;

import Card from './components/Card/Card';
import CartDrawer from './components/CartDrawer/CartDrawer';
import Header from './components/Header/Header';

function App() {
	return (
		<div className="wrapper">
			<CartDrawer />

			<div className="container">
				<Header />

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

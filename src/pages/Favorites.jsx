import { Link } from 'react-router-dom';
import BtnBack from '../components/BtnBack/BtnBack';
import Card from '../components/Card/Card';

function Favorites({ favoriteItems = [], handleClickPlus, handleClickFavorite }) {
	return (
		<div>
			<div className="top">
				<Link to="/">
					<BtnBack />
				</Link>
				<h1 className="title">Мои закладки</h1>
			</div>

			<div className="content">
				{favoriteItems.map((item) => {
					return (
						<Card
							key={item.id}
							id={item.id}
							title={item.title}
							price={item.price}
							imageUrl={item.imageUrl}
							onAddToCart={() => handleClickPlus(item)}
							onAddToFavorite={() => handleClickFavorite(item)}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Favorites;

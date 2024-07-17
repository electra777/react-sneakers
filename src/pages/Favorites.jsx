import { Link } from 'react-router-dom';
import BtnBack from '../components/BtnBack/BtnBack';
import Card from '../components/Card/Card';

function Favorites({ handleClickFavorite, favoriteItems }) {
	return (
		<div>
			<div className="top">
				<Link to="/">
					<BtnBack />
				</Link>

				<h1 className="title">Мои закладки</h1>
			</div>
			{favoriteItems.map((item) => {
				return (
					<Card
						key={item.id}
						id={item.id}
						title={item.title}
						price={item.price}
						imageUrl={item.imageUrl}
						// onAddToCart={() => handleClickPlus(item)}
						// onAddToFavorite={() => handleClickFavorite}
					/>
				);
			})}
			<div className="content"></div>
		</div>
	);
}

export default Favorites;

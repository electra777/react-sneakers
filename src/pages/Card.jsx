import { Link } from 'react-router-dom';
import BtnBack from '../components/BtnBack/BtnBack';
import Card from '../components/Card/Card';

function Card({ cartItems = [], handleClickPlus, handleClickFavorite }) {
	return (
		<div>
			{favoriteItems.length !== 0 ? (
				<>
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
				</>
			) : (
				<div className="contentEmpty">
					<div className="sadSmile"></div>
					<h2 className="sadTitle">Закладок нет :(</h2>
					<div className="sadText">Вы ничего не добавляли в закладки</div>
					<Link to="/">
						<BtnBack />
					</Link>
				</div>
			)}
		</div>
	);
}

export default Card;

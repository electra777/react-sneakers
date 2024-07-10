import cn from 'classnames';
import styles from './Card.module.scss';
import { useState } from 'react';

function Card({ title, price, imageUrl, onAddToCart }) {
	const [isInCart, setIsInCart] = useState(false);

	const handleClickPlus = (e) => {
		onAddToCart();
		setIsInCart(!isInCart);
	};

	return (
		<div className={styles.card}>
			<button className={cn(styles.favorite, styles.liked)}></button>

			<img width={133} height={112} src={imageUrl} alt="sneakers" className={styles.sneakersImg} />
			<p className={styles.description}>{title}</p>
			<div className={styles.bottomWrapper}>
				<div className={styles.priceWrapper}>
					<div className={styles.price}>Цена:</div>
					<div className={styles.priceSum}>
						{price}
						<span> руб.</span>
					</div>
				</div>
				<button
					className={cn(styles.btnCart, {
						[styles.inCart]: isInCart,
					})}
					onClick={handleClickPlus}></button>
			</div>
		</div>
	);
}

export default Card;

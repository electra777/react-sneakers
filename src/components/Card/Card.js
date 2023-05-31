import cn from 'classnames';
import styles from './Card.module.scss';

function Card() {
	return (
		<div className={styles.card}>
			<button className={cn(styles.favorite, styles.liked)}></button>

			<img
				width={133}
				height={112}
				src="/img/sneakers/1.jpg"
				alt="sneakers"
				className={styles.sneakersImg}
			/>
			<p className={styles.description}>Мужские Кроссовки Nike Blazer Mid Suede</p>
			<div className={styles.bottomWrapper}>
				<div className={styles.priceWrapper}>
					<div className={styles.price}>Цена:</div>
					<div className={styles.priceSum}>
						12 999<span> руб.</span>
					</div>
				</div>
				<button className={cn(styles.btnCart, styles.inCart)}></button>
			</div>
		</div>
	);
}

export default Card;

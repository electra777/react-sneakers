import styles from './CartDrawer.module.scss';

function CartDrawer() {
	const a = 0;
	return (
		<div style={{ display: 'block' }} className={styles.overlay}>
			<div className={styles.drawer}>
				<div className={styles.cartTop}>
					<h2 className={styles.cartTitle}>Корзина</h2>
					<button className={styles.remove}></button>
				</div>
				<div className={styles.items}>
					<div className={styles.cartItem}>
						<img src="/img/sneakers/1.jpg" alt="sneakers" width={70} height={70} />
						<div className={styles.cartDiscriptionWrapper}>
							<p className={styles.cartDiscription}>Мужские Кроссовки Nike Air Max 270</p>
							<div className={styles.priceSum}>
								12 999<span> руб.</span>
							</div>
						</div>
						<button className={styles.remove}></button>
					</div>
					<div className={styles.cartItem}>
						<img src="/img/sneakers/1.jpg" alt="sneakers" width={70} height={70} />
						<div className={styles.cartDiscriptionWrapper}>
							<p className={styles.cartDiscription}>Мужские Кроссовки Nike Air Max 270</p>
							<div className={styles.priceSum}>
								12 999<span> руб.</span>
							</div>
						</div>
						<button className={styles.remove}></button>
					</div>
				</div>

				<div className={styles.cartTotalBlock}>
					<div className={styles.infoSum}>
						<p>Итого:</p>
						<div className={styles.dashed}></div>
						<div className={styles.totalSum}>
							21 498<span> руб.</span>
						</div>
					</div>
					<div className={styles.infoSum}>
						<p>Налог 5%: </p>
						<div className={styles.dashed}></div>
						<div className={styles.totalSum}>
							1 074<span> руб.</span>
						</div>
					</div>
					<button className={styles.greenBtn}>
						Оформить заказ
						<img src="/img/arrow.svg" alt="arrow"></img>
					</button>
				</div>
			</div>
		</div>
	);
}

export default CartDrawer;

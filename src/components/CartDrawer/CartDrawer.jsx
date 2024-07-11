import styles from './CartDrawer.module.scss';

function CartDrawer({ onClose, cartItems = [], onRemoveItem }) {
	return (
		<div className={styles.overlay}>
			<div className={styles.drawer}>
				<div className={styles.cartTop}>
					<h2 className={styles.cartTitle}>Корзина</h2>
					<button className={styles.remove} onClick={onClose}></button>
				</div>

				<div className={styles.items}>
					{cartItems.map((item) => {
						return (
							<div className={styles.cartItem} key={item.id}>
								<img src={item.imageUrl} alt="sneakers" width={70} height={70} />
								<div className={styles.cartDiscriptionWrapper}>
									<p className={styles.cartDiscription}>{item.title}</p>
									<div className={styles.priceSum}>
										{item.price}
										<span> руб.</span>
									</div>
								</div>
								<button
									className={styles.remove}
									onClick={() => {
										onRemoveItem(item.id);
									}}></button>
							</div>
						);
					})}
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

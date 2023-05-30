function CartDrawer() {
	const a = 0;
	return (
		<div style={{ display: 'none' }} className="overlay">
			<div className="drawer">
				<div className="cartTop">
					<h2 className="cartTitle">Корзина</h2>
					<button className="remove"></button>
				</div>
				<div className="items">
					<div className={a}>
						<img src="/img/sneakers/1.jpg" alt="sneakers" width={70} height={70} />
						<div className="cartDiscriptionWrapper">
							<p className="cartDiscription">Мужские Кроссовки Nike Air Max 270</p>
							<div className="priceSum">
								12 999<span> руб.</span>
							</div>
						</div>
						<button className="remove"></button>
					</div>
					<div className="cartItem">
						<img src="/img/sneakers/1.jpg" alt="sneakers" width={70} height={70} />
						<div className="cartDiscriptionWrapper">
							<p className="cartDiscription">Мужские Кроссовки Nike Air Max 270</p>
							<div className="priceSum">
								12 999<span> руб.</span>
							</div>
						</div>
						<button className="remove"></button>
					</div>
				</div>

				<div className="cartTotalBlock">
					<div className="infoSum">
						<p>Итого:</p>
						<div className="dashed"></div>
						<div className="totalSum">
							21 498<span> руб.</span>
						</div>
					</div>
					<div className="infoSum">
						<p>Налог 5%: </p>
						<div className="dashed"></div>
						<div className="totalSum">
							1 074<span> руб.</span>
						</div>
					</div>
					<button className="greenBtn">
						Оформить заказ
						<img src="/img/arrow.svg" alt="arrow"></img>
					</button>
				</div>
			</div>
		</div>
	);
}

export default CartDrawer;

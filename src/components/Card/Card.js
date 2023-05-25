function Card() {
	return (
		<div className="card">
			<button className="favorite liked"></button>

			<img
				width={133}
				height={112}
				src="/img/sneakers/1.jpg"
				alt="sneakers"
				className="sneakersImg"
			/>
			<p className="description">Мужские Кроссовки Nike Blazer Mid Suede</p>
			<div className="bottomWrapper">
				<div className="priceWrapper">
					<div className="price">Цена:</div>
					<div className="priceSum">
						12 999<span> руб.</span>
					</div>
				</div>
				<button className="btnCart inCart"></button>
			</div>
		</div>
	);
}

export default Card;

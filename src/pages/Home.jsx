import Card from '../components/Card/Card';

function Home({ items, searchValue, setSearchValue, handleClickPlus, handleClickFavorite }) {
	return (
		<div>
			<div className="top">
				<h1 className="title">
					{searchValue ? `Поиск по запросу "${searchValue}"` : `Все кроссовки`}
				</h1>
				<div className="searchBlock">
					<input
						type="text"
						placeholder="Поиск..."
						className="searchInput"
						onChange={(e) => {
							setSearchValue(e.target.value);
						}}
						value={searchValue}
					/>
					{searchValue && (
						<button
							className="clearSearch"
							onClick={() => {
								setSearchValue('');
							}}></button>
					)}
				</div>
			</div>

			<div className="content">
				{items
					.filter((item) => item.title.toLowerCase().includes(searchValue))
					.map((item) => {
						return (
							<Card
								key={item.id}
								id={item.id}
								title={item.title}
								price={item.price}
								imageUrl={item.imageUrl}
								onAddToCart={() => handleClickPlus(item)}
								onAddToFavorite={() => handleClickFavorite}
							/>
						);
					})}
			</div>
		</div>
	);
}

export default Home;

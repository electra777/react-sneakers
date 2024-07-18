import styles from './BtnBack.module.scss';

function BtnBack() {
	return (
		<button className={styles.btn}>
			<svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M6 11L1 6L6 1"
					stroke="#C8C8C8"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</button>
	);
}

export default BtnBack;

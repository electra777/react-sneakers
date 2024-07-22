import styles from './BtnGreen.module.scss';
import cn from 'classnames';

//TODO доработать адекватную работу и заменить в CartDrawer

function BtnGreen({ onClose }) {
	return (
		<button className={cn(styles.greenBtn, styles.greenBtnBack)} onClick={onClose}>
			<img src="/img/arrow-left.svg" alt="arrow"></img>
			Вернуться назад
		</button>
	);
}

export default BtnGreen;

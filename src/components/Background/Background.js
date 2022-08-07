import style from "./Background.module.css";
import defaultBg from '../../assets/images/background.png';

const Background = () => {
	return (
		<div className={style.background}>
			<img src={defaultBg} alt="bg"/>
		</div>
	)
}

export default Background;
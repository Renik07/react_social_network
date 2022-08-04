import style from "./Background.module.css";
import background from '../../assets/images/background.png';

const Background = () => {
	return (
		<div className={style.background}>
			<img src={background} alt="bg"/>
		</div>
	)
}

export default Background;
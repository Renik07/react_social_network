import style from "./Background.module.css";
import defaultBg from '../../assets/images/background.png';

const Background = () => {
	return (
		<div className={style.background}>
			<img width="1170" height="246" src={defaultBg} alt="bg"/>
		</div>
	)
}

export default Background;
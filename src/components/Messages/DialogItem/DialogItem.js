import { NavLink } from "react-router-dom";
import userAvatar from '../../../assets/images/avatar.png';
import style from "./../Messages.module.css";

const DialogItem = (props) => {
	const id = `/messages/${props.id}`;
	return (
		<div className={style.dialog}>
			<img className={style.avatar} src={userAvatar} alt="" />
			<NavLink to={id} className={style.link}>{props.name}</NavLink>
		</div>
	)
}

export default DialogItem;
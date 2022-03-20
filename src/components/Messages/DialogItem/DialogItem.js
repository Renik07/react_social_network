import { NavLink } from "react-router-dom";
import style from "./../Messages.module.css";

const DialogItem = (props) => {
	const id = `/messages/${props.id}`;
	return (
		<div className={style.dialog}>
			<div className={style.avatar}></div>
			<NavLink to={id} className={style.link}>{props.name}</NavLink>
		</div>
	)
}

export default DialogItem;
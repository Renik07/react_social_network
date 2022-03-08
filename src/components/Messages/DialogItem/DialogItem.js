import { NavLink } from "react-router-dom";
import style from "./../Messages.module.css";

const DialogItem = (props) => {
	const id = `/messages/${props.id}`;
	return (
		<div className={style.dialog}>
			<NavLink to={id} className={style.dialog}>{props.name}</NavLink>
		</div>
	)
}

export default DialogItem;
import { NavLink } from "react-router-dom";
import style from "./Link.module.css";

const Link = (props) => {

	const classActive = ({isActive}) => isActive ? style.active : style.link;

	return(
		<NavLink className = { classActive } to={`/${props.url}`}>
			<img src={`./images/icon-${props.img}.png`} alt={props.title} />
			<div>{props.title}</div>
		</NavLink>
	)
}

export default Link;
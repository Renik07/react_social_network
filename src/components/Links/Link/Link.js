import { NavLink } from "react-router-dom";
import style from "./Link.module.css";

const Link = (props) => {
	return(
		<NavLink className={style.link} to={`/${props.url}`} activeClassName={style.active}>
			<img src="./images/icon-home.png" alt={props.title} />
			<div>{props.title}</div>
		</NavLink>
	)
}

export default Link;
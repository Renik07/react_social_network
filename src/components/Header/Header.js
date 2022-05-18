import Links from "./Links/Links";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
	return(
		<header className={style.header}>
			<div className={style.container}>
				<img className={style.img} src='./logo.png' alt='logo'/>
				<input className={style.input} type='text' />
				<Links />
				<div className={style.wrapper}>
					<img className={style.avatar} src='' alt=''/>
					{ props.isAuth ? <div className={style.name}>{props.login}</div> : <NavLink to='/login' className={style.name}>Login</NavLink> }
				</div>
			</div>
		</header>
	)
}

export default Header;
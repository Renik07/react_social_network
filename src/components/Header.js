import Links from "./Links";
import style from "./Header.module.css";

const Header = () => {
	return(
		<header className={style.header}>
			<img src='./logo.png' alt="logo"/>
			<input className={style.input} type="text" />
			<Links />
		</header>
	)
}

export default Header;
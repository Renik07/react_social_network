import Links from "./Links/Links";
import style from "./Header.module.css";

const Header = () => {
	return(
		<header className={style.header}>
			<div className={style.container}>
				<img className={style.img} src='./logo.png' alt="logo"/>
				<input className={style.input} type="text" />
				<Links />
			</div>
		</header>
	)
}

export default Header;
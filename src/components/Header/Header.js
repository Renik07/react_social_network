import Links from "./Links/Links";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import userPhoto from '../../assets/images/avatar.png';
import ModalButton from "../common/Modal/ModalButton";
import AccSettings from "../modalComponents/AccSettings/AccSettings";
import Privacy from "../modalComponents/Privacy/Privacy";
import Faqs from "../modalComponents/Faqs/Faqs";
import Deactivate from "../modalComponents/Deactivate/Deactivate";
import Statistics from "../modalComponents/Statistics/Statistics";

const Header = (props) => {
	/* console.log(props.profile.photos.small); */
	return(
		<header className={style.header}>
			<div className={style.container}>
				<img className={style.img} src={logo} alt='logo'/>
				<div className={style.inputWrapper}> 
					<input className={style.input} type='text' placeholder='Search...' />
					<button className={style.button}></button>
				</div>
				<Links />
				<div className={style.wrapper}>
					{ props.isAuth 
						? <div className={style.wrapper}>
								<img className={style.avatar} src={userPhoto} alt=""/>
								<div className={style.name}>{props.login}&#9662;</div>
								<div className={style.popup}>
									<ModalButton component={<Statistics />} nameButton="Statistics" clsName="btnPopup"/>
									<div className={style.popupInner}>
									<ModalButton component={<AccSettings />} nameButton="Account Settings" clsName="btnPopup"/>
									<ModalButton component={<Privacy />} nameButton="Privacy" clsName="btnPopup"/>
									<ModalButton component={<Faqs />} nameButton="Faqs" clsName="btnPopup"/>
									<ModalButton component={<Deactivate />} nameButton="Deactivate Account" clsName="btnPopup"/>
									</div>
									<button className={style.btnLogout} onClick={() => props.logoutTC()}>Logout</button>
								</div>
							</div>
						: <NavLink to='/login' className={style.name}>Log in</NavLink> }
				</div>
			</div>
		</header>
	)
}

export default Header;
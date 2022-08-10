import Links from "./Links/Links";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import userPhoto from '../../assets/images/avatar.png';
import ModalButton from "../common/Modal/ModalButton";
import AccSettings from "../modalComponents/AccSettings/AccSettings";
import Privacy from "../modalComponents/Privacy/Privacy";
import Password from "../modalComponents/Password/Password";
import Deactivate from "../modalComponents/Deactivate/Deactivate";
import Statistics from "../modalComponents/Statistics/Statistics";
import statistics from '../../assets/images/Modal/statistics.png';
import accSettings from '../../assets/images/Modal/acc-settings.png';
import privacy from '../../assets/images/Modal/privacy.png';
import password from '../../assets/images/Modal/password.png';
import deactivate from '../../assets/images/Modal/deactivate.png';

const Header = (props) => {
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
								<div className={style.name}>{props.login}&#9662;</div>
								<div className={style.popup}>
									<div>
										<ModalButton component={<Statistics />} nameButton="Statistics" clsName="btnPopup" img={statistics} />
									</div>
									<div className={style.popupInner}>
										<ModalButton component={<AccSettings />} nameButton="Account Settings" clsName="btnPopup" img={accSettings} />
										<ModalButton component={<Privacy />} nameButton="Privacy" clsName="btnPopup" img={privacy}/>
										<ModalButton component={<Password />} nameButton="Change Password" clsName="btnPopup" img={password}/>
										<ModalButton component={<Deactivate />} nameButton="Deactivate Account" clsName="btnPopup" img={deactivate}/>
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
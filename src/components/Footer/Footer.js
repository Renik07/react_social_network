import { NavLink } from 'react-router-dom';
import style from './Footer.module.css';
import logo from '../../assets/images/Footer/footer-logo.png';

const Footer = () => {
	return(
		<footer className={style.footer}>
			<div className={style.container}>
				<ul className={style.listLinks}>
					<li className={style.itemLink}>
						<NavLink className={style.link} to=''>Help Center</NavLink>
					</li>
					<li className={style.itemLink}>
						<NavLink className={style.link} to=''>About</NavLink>
					</li>
					<li className={style.itemLink}>
						<NavLink className={style.link} to=''>Privacy Policy</NavLink>
					</li>
					<li className={style.itemLink}>
						<NavLink className={style.link} to=''>Community Guidelines</NavLink>
					</li>
					<li className={style.itemLink}>
						<NavLink className={style.link} to=''>Cookies Policy</NavLink>
					</li>
					<li className={style.itemLink}>
						<NavLink className={style.link} to=''>Career</NavLink>
					</li>
					<li className={style.itemLink}>
						<NavLink className={style.link} to=''>Forum</NavLink>
					</li>
					<li className={style.itemLink}>
						<NavLink className={style.link} to=''>Language</NavLink>
					</li>
					<li className={style.itemLink}>
						<NavLink className={style.link} to=''>Copyright Policy</NavLink>
					</li>
				</ul>
				<div className={style.logoCopyright}>
					<img className={style.logo} src={logo} alt='logo'/>
					<div className={style.copyright}>Copyright 2022</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;
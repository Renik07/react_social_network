import style from "./Contacts.module.css";
import website from '../../../assets/images/Contacts/website.png';

const Contacts = (props) => {
/* 	let contacts = props.contacts.map(s => <SocialLink link={s.link} />) */
	return(
		<div className={style.contacts}>
			<div className={style.contact}>
				<img className={style.icon} src={website} alt="" />
				<a className={style.link} href="wer">www_example_comwww_example_comwww_example_com</a>
			</div>
			<div className={style.contact}>
				<img className={style.icon} src={website} alt="" />
				<a className={style.link} href="wer">www_example_comwww_example_comwww_example_com</a>
			</div>
			<div className={style.contact}>
				<img className={style.icon} src={website} alt="" />
				<a className={style.link} href="wer">www_example_comwww_example_comwww_example_com</a>
			</div>
			<div className={style.contact}>
				<img className={style.icon} src={website} alt="" />
				<a className={style.link} href="wer">www_example_comwww_example_comwww_example_com</a>
			</div>
			<div className={style.contact}>
				<img className={style.icon} src={website} alt="" />
				<a className={style.link} href="wer">www_example_comwww_example_comwww_example_com</a>
			</div>
		</div>
	)
}

export default Contacts;
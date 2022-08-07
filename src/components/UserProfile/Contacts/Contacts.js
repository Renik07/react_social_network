import style from "./Contacts.module.css";
import website from '../../../assets/images/Contacts/website.png';
import linkedin from '../../../assets/images/Contacts/linkedin.png';
import codewars from '../../../assets/images/Contacts/codewars.png';
import github from '../../../assets/images/Contacts/github.png';
import telegram from '../../../assets/images/Contacts/telegram.png';

export const MyContacts = (props) => {
	return(
		<div>
			<div className={style.contact}>
				<img className={style.icon} src={linkedin} alt="" />
				<a className={style.link} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/renat-gayazutdinov-07344a65/">www.linkedin.com</a>
			</div>
			<div className={style.contact}>
				<img className={style.icon} src={codewars} alt="" />
				<a className={style.link} target="_blank" rel="noreferrer" href="https://www.codewars.com/users/Renik07">www.codewars.com</a>
			</div>
			<div className={style.contact}>
				<img className={style.icon} src={github} alt="" />
				<a className={style.link} target="_blank" rel="noreferrer" href="https://github.com/Renik07">github.com</a>
			</div>
			<div className={style.contact}>
				<img className={style.icon} src={website} alt="" />
				<a className={style.link} target="_blank" rel="noreferrer" href="https://www.freecodecamp.org/Renik">www.freecodecamp.org</a>
			</div>
			<div className={style.contact}>
				<img className={style.icon} src={telegram} alt="" />
				<a className={style.link} target="_blank" rel="noreferrer" href="https://t.me/restspread">t.me/restspread</a>
			</div>
		</div>
	)
}

export const ContactsData = (props) => {
	return(
		<div className={style.contactsData}>
			{ Object.keys(props.profile.contacts).map(item => props.profile.contacts[item] && <Contact key={item} item={item} value={props.profile.contacts[item]} />)}
		</div>
	)
}

export const Contact = ({item, value}) => {
	return(
		<div className={style.contact}>
			<img className={style.icon} src={require(`../../../assets/images/Contacts/${item}.png`)} alt="" />
			<a className={style.link} target="_blank" rel="noreferrer" href={ value }>{ value }</a>
		</div>
	)
}

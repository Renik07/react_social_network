import style from '../Companies.module.css';
import company from '../../../assets/images/Companies/company.png';
import message from '../../../assets/images/Companies/message.png';
import { NavLink } from 'react-router-dom';

const Company = (props) => {
	return (
		<div className={style.card} key={props.id}>
			<div className={style.info}>
				<img className={style.image} src={ company } alt="" />
				<h3 className={style.name}>Facebook Inc.</h3>
				<div className={style.buttons}>
					<button className={style.follow} >Follow</button> 
					<input className={style.message} type="image" src={ message } alt="" />
				</div>
			</div>
			<NavLink className={style.link} to={`/company`}>View Profile</NavLink>
		</div>
	)
}

export default Company;
import style from "./MostViewedPeople.module.css";
import userAvatar from '../../../assets/images/avatar.png';
import plus from '../../../assets/images/MostViewedPeople/plus.png';
import check from '../../../assets/images/MostViewedPeople/check.png';
import { NavLink } from "react-router-dom";
import { useState } from "react";

const MostViewedPeople = () => {
	const users = [
		{id: "1", name: "Jessica William", profession: "Graphic Designer"},
		{id: "2", name: "John Doe", profession: "PHP Developer"},
		{id: "3", name: "Poonam", profession: "Wordpress Developer"},
		{id: "4", name: "Bill Gates", profession: "C & C++ Developer"},
		{id: "5", name: "Jessica William", profession: "Graphic Designer"},
		{id: "6", name: "Jessica William", profession: "Graphic Designer"},
		{id: "7", name: "Jessica William", profession: "Graphic Designer"}
	]

	return (
		<section className={style.mostViewedPeople}>
			<div className={style.header}>
				<h3>Most Viewed People</h3>
			</div>
			<ul className={style.list}>
				{ users.map(user => <MostViewedUser key={user.id} id={user.id} name={user.name} profession={user.profession}  />) }
			</ul>
		</section>
	)
}

const MostViewedUser = (props) => {
	let [checkEdit, setCheckEdit] = useState(false);

	const toggleCheckEdit = () => {
		setCheckEdit(checkEdit = !checkEdit);
	}

	return(
		<li className={style.item}>
			<div className={style.userData}>
				<img className={style.avatar} src={userAvatar} alt="" />
				<div className={style.block}>
					<NavLink className={style.link} to={`/profile/${props.id}`}>
						<div className={style.name}> {props.name} </div>
					</NavLink>
					<div className={style.profession}> {props.profession} </div>
				</div>
			</div>
			{ checkEdit ?
				<div onClick={toggleCheckEdit} className={style.iconCheckWrapper}>
					<img className={style.checkIcon} src={check} alt="" />
				</div>
				:
				<div onClick={toggleCheckEdit} className={style.iconPlusWrapper}>
					<img className={style.checkIcon} src={plus} alt="" />
				</div>
			}
		</li>
	)
}


export default MostViewedPeople;
import style from "./MostViewedPeople.module.css";
import userAvatar from '../../../assets/images/avatar.png';
import plus from '../../../assets/images/MostViewedPeople/plus.png';
import check from '../../../assets/images/MostViewedPeople/check.png';
import { NavLink } from "react-router-dom";

const MostViewedPeople = () => {
	return (
		<section className={style.mostViewedPeople}>
			<div className={style.header}>
				<h3>Most Viewed People</h3>
			</div>
			<ul className={style.list}>
				<li className={style.item}>
					<div className={style.userData}>
						<img className={style.avatar} src={userAvatar} alt="" />
						<div className={style.block}>
							<NavLink className={style.link} to={`/profile/:userId`}>
								<div className={style.name}>Jessica William</div>
							</NavLink>
							<div className={style.profession}>Graphic Designer</div>
						</div>
					</div>
					<div className={style.iconWrapper}>
						<img className={style.checkIcon} src={plus} alt="" />
					</div>
				</li>
				<li className={style.item}>
					<div className={style.userData}>
						<img className={style.avatar} src={userAvatar} alt="" />
						<div className={style.block}>
							<NavLink className={style.link} to={`/profile/:userId`}>
								<div className={style.name}>John Doe</div>
							</NavLink>
							<div className={style.profession}>PHP Developer</div>
						</div>
					</div>
					<div className={style.iconWrapper}>
						<img className={style.checkIcon} src={plus} alt="" />
					</div>
				</li>
				<li className={style.item}>
					<div className={style.userData}>
						<img className={style.avatar} src={userAvatar} alt="" />
						<div className={style.block}>
							<NavLink className={style.link} to={`/profile/:userId`}>
								<div className={style.name}>Poonam</div>
							</NavLink>
							<div className={style.profession}>Wordpress Developer</div>
						</div>
					</div>
					<div className={style.iconWrapper}>
						<img className={style.checkIcon} src={plus} alt="" />
					</div>
				</li>
				<li className={style.item}>
					<div className={style.userData}>
						<img className={style.avatar} src={userAvatar} alt="" />
						<div className={style.block}>
							<NavLink className={style.link} to={`/profile/:userId`}>
								<div className={style.name}>Bill Gates</div>
							</NavLink>
							<div className={style.profession}>C & C++ Developer</div>
						</div>
					</div>
					<div className={style.iconWrapper}>
						<img className={style.checkIcon} src={plus} alt="" />
					</div>
				</li>
				<li className={style.item}>
					<div className={style.userData}>
						<img className={style.avatar} src={userAvatar} alt="" />
						<div className={style.block}>
							<NavLink className={style.link} to={`/profile/:userId`}>
								<div className={style.name}>Jessica William</div>
							</NavLink>
							<div className={style.profession}>Graphic Designer</div>
						</div>
					</div>
					<div className={style.iconWrapper}>
						<img className={style.checkIcon} src={plus} alt="" />
					</div>
				</li>
				<li className={style.item}>
					<div className={style.userData}>
						<img className={style.avatar} src={userAvatar} alt="" />
						<div className={style.block}>
							<NavLink className={style.link} to={`/profile/:userId`}>
								<div className={style.name}>Jessica William</div>
							</NavLink>
							<div className={style.profession}>Graphic Designer</div>
						</div>
					</div>
					<div className={style.iconWrapper}>
						<img className={style.checkIcon} src={plus} alt="" />
					</div>
				</li>
				<li className={style.item}>
					<div className={style.userData}>
						<img className={style.avatar} src={userAvatar} alt="" />
						<div className={style.block}>
							<NavLink className={style.link} to={`/profile/:userId`}>
								<div className={style.name}>Jessica William</div>
							</NavLink>
							<div className={style.profession}>Graphic Designer</div>
						</div>
					</div>
					<div className={style.iconWrapper}>
						<img className={style.checkIcon} src={plus} alt="" />
					</div>
				</li>

			</ul>
		</section>
	)
}

export default MostViewedPeople;
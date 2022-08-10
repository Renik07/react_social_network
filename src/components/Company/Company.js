import { NavLink } from "react-router-dom";
import MostViewedPeople from "../Notification/MostViewedPeople/MostViewedPeople";
import Posts from "../Posts/Posts";
import AboutUser from "../UserProfile/AboutUser/AboutUser";
import Follow from "../UserProfile/Follow/Follow";
import Friends from "../UserProfile/Friends/Friends";
import style from "./Company.module.css";
import facebook from '../../assets/images/company-avatar.jpg';
import facebookBg from '../../assets/images/company-banner.jpg';

const Company = (props) => {
	return(
		<div className={style.container}>
			<div className={style.background}>
				<img width="1170" height="246" src={facebookBg} alt="bg"/>
			</div>
			<div className={style.wrapper}>
				<div className={style.column1}>
					<div className={style.column1Wrapper}>
						<div className={style.column1Inner}>
							<div className={style.mainPhoto}>
								
								<img src={facebook} alt=""/>
							</div>
							<div className={style.buttonsWrapper}>
								<button className={style.buttonFollow}>Follow</button>
								<NavLink to='/messages'>
									<button className={style.buttonMessage}>Message</button>
								</NavLink>
							</div>
							<Follow />
						</div>
						<AboutUser />
					</div>
				</div>
				<div className={style.column2}>
					<div className={style.user}>
						<h3 className={style.profession}>Facebook Inc.</h3>
						<div className={style.since}>Established Since 2009</div>
						<Posts />
					</div>
				</div>
				<div className={style.column3}>
					<Friends />
					<MostViewedPeople />
				</div>
			</div>
		</div>
	)
}

export default Company;
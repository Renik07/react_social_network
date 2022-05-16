import Follow from "./Follow/Follow";
import Friends from "./Friends/Friends";
import style from "./UserProfile.module.css";
import SocialLinks from "./SocialLinks/SocialLinks";

const UserProfile = (props) => {

	return(
		<div className={style.container}>
			<div className={style.column1}>
				<div className={style.column1Wrapper}>
					<div className={style.userImg}>
						<img src="" alt=""/>
					</div>
					<div className={style.buttonsWrapper}>
						<button className={style.buttonFollow}>Follow</button>
						<button className={style.buttonMessage}>Message</button>
					</div>
					<Follow />
					<SocialLinks social = {props.userProfilePage.userProfile} />
				</div>
			</div>
			<div className={style.column2}>
				<div className={style.user}>
					<h2 className={style.name}>Renat G.</h2>
					<h3 className={style.profession}>Frontend developer (React developer)</h3>
				</div>
			</div>
			<div className={style.column3}>
				<Friends />
			</div>
		</div>
	)
}

export default UserProfile;
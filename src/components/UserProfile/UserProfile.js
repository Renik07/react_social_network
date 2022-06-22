import Preloader from "../common/Preloader/Preloader";
import Follow from "./Follow/Follow";
import Friends from "./Friends/Friends";
import style from "./UserProfile.module.css";
import userAvatar from '../../assets/images/avatar.png';
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import Background from "../Background/Background";
import Posts from "../Posts/Posts";

const UserProfile = (props) => {

	if (!props.profile) {
		return <Preloader />
	}

	return(
		<div className={style.container}>
			<Background />
			<div className={style.wrapper}>
				<div className={style.column1}>
					<div className={style.column1Wrapper}>
						<div className={style.userImg}>
							<img src={ props.profile.photos.large != null ? props.profile.photos.large : userAvatar } alt=""/>
						</div>
						<div className={style.buttonsWrapper}>
							<button className={style.buttonFollow}>Follow</button>
							<button className={style.buttonMessage}>Message</button>
						</div>
						<Follow />
						{/* <SocialLinks contacts={props.profile.contacts} /> */}
					</div>
				</div>
				<div className={style.column2}>
					<div className={style.user}>
						<h2 className={style.name}>{ props.profile.fullName }</h2>
						<h3 className={style.profession}>Frontend developer (React developer)</h3>
						<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
						<Posts />
					</div>
				</div>
				<div className={style.column3}>
					<Friends />
				</div>
			</div>
		</div>
	)
}

export default UserProfile;
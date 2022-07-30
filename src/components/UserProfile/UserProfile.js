import Preloader from "../common/Preloader/Preloader";
import Follow from "./Follow/Follow";
import Friends from "./Friends/Friends";
import Contacts from "./Contacts/Contacts";
import style from "./UserProfile.module.css";
import defaultUserPhoto from '../../assets/images/avatar.png';
import chooseMainPhoto from '../../assets/images/choose-main-photo.png';
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import Background from "../Background/Background";
import Posts from "../Posts/Posts";
import MostViewedPeople from "../Notification/MostViewedPeople/MostViewedPeople";
import AboutUser from "./AboutUser/AboutUser";
import { NavLink } from "react-router-dom";

const UserProfile = (props) => {

	const onSavePhoto = (e) => {
		let file = e.target.files[0];
		props.savePhoto(file);
	}

	if (!props.profile) {
		return <Preloader />
	}

	return(
		<div className={style.container}>
			<Background />
			<div className={style.wrapper}>
				<div className={style.column1}>
					<div className={style.column1Wrapper}>
						<div className={style.column1Inner}>
							<div className={style.mainPhoto}>
								{props.isOwner && 
									<div className={style.btnPhotoWrapper}>
										<label htmlFor="file-input" className={style.labelMainPhoto}>
											<img src={chooseMainPhoto} alt=""/>
										</label>
										<input 
											id="file-input"
											type="file" 
											onChange={onSavePhoto} 
											accept=".jpg, .jpeg, .png"
											className={style.btnMainPhoto} />
									</div>
								}
								<img src={ props.profile.photos.large != null ? props.profile.photos.large : defaultUserPhoto } alt=""/>
							</div>
							<div className={style.buttonsWrapper}>
								<button className={style.buttonFollow}>Follow</button>
								<NavLink to='/messages'>
									<button className={style.buttonMessage}>Message</button>
								</NavLink>
							{/* 	<button className={style.buttonMessage}>Message</button> */}
							</div>
							<Follow />
							<Contacts contacts={props.profile.contacts} />
						</div>
						<AboutUser />
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
					<MostViewedPeople />
				</div>
			</div>
		</div>
	)
}

export default UserProfile;
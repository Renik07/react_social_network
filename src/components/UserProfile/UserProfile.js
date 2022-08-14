import Preloader from "../common/Preloader/Preloader";
import Follow from "./Follow/Follow";
import Friends from "./Friends/Friends";
import { ContactsData, MyContacts } from "./Contacts/Contacts";
import style from "./UserProfile.module.css";
import defaultUserPhoto from '../../assets/images/avatar.png';
import chooseMainPhoto from '../../assets/images/choose-main-photo.png';
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import Background from "../Background/Background";
import Posts from "../Posts/Posts";
import MostViewedPeople from "../Notification/MostViewedPeople/MostViewedPeople";
import AboutUser from "./AboutUser/AboutUser";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import pencil from "../../assets/images/Info/pencil.png"
import { useFormik } from "formik";
import * as Yup from "yup";

const UserProfile = (props) => {
	const [isEditName, setIsEditName] = useState(false);
	const [editName, setEditName] = useState(props.profile.fullName || "");
	const [aboutMe, setAboutMe] = useState(props.profile.aboutMe || "");

	const onSavePhoto = (e) => {
		let file = e.target.files[0];
		props.savePhoto(file);
	}

	const formik = useFormik({
		initialValues: {
			fullName: editName,
			aboutMe: aboutMe,
			lookingForAJobDescription: "description"
		},

		onSubmit: (values, {})=> {
			props.saveProfileData(values);
			setIsEditName(false);
			/* alert(JSON.stringify(values, null, 2)); */
		},

		validationSchema: Yup.object({
			fullName: Yup.string()
				.min(5, 'Must be 5 characters or more')
				.max(20, 'Must be 20 characters or less')
		})
	});

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
							</div>
							<Follow />
							{props.isOwner || props.params.userId === '23927'
								? <MyContacts />
								: <ContactsData profile={props.profile} />
							}
						</div>
						<AboutUser />
					</div>
				</div>
				<div className={style.column2}>
					<div className={style.user}>
						<div className={style.nameWrapper}>
							{ isEditName
								? <form className={style.nameForm} onSubmit={formik.handleSubmit}>
										<input className={style.inputName} 
														autoFocus={true} 
														name="fullName" 
														onChange={formik.handleChange} 
														type="text"
														value={formik.values.fullName} 
														placeholder={props.profile.fullName}
														validationSchema={formik.validationSchema}
										/>
										<input className={style.inputAboutMe} 
														name="aboutMe" 
														onChange={formik.handleChange} 
														type="text"
														value={formik.values.aboutMe} 
														placeholder={props.profile.aboutMe}
										/>
										<button className={style.submitNameButton} type="submit">&#10003;</button>
									</form>
								: <div>
										<div className={style.name}>{ props.profile.fullName }</div>
										<img onClick={() => setIsEditName(true)} className={props.isOwner ? style.editNameIcon : style.editNameIconNone} src={pencil} alt="" />
										<div className={props.profile.aboutMe ? style.aboutMeWrapper : style.aboutMeWrapperNone}>
											<h3 className={style.aboutMe}>{ props.profile.aboutMe }</h3>
										</div>
									</div>
							}
							{formik.errors.fullName ? <p className={style.errorName}>{formik.errors.fullName}</p> : null}
						</div>
						<ProfileStatus status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner}/>
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
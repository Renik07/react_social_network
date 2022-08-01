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
import website from '../../assets/images/Contacts/website.png';
import { useState } from "react";
import pencil from "../../assets/images/Info/pencil.png"
import { useFormik } from "formik";
import * as Yup from "yup";

const UserProfile = (props) => {

	const [isEditMode, setIsEditMode] = useState(false);
	const [isEditName, setIsEditName] = useState(false);

	const onSavePhoto = (e) => {
		let file = e.target.files[0];
		props.savePhoto(file);
	}

	const formik = useFormik({
		initialValues: {
			fullName: "",
		},

		onSubmit: (values, {})=> {
			props.saveFullname(values);
			setIsEditName(false);
			alert(JSON.stringify(values, null, 2));
		},

		validationSchema: Yup.object({
			fullName: Yup.string()
				.min(5, 'Must be 5 characters or more')
				.max(20, 'Must be 20 characters or less')
				.required('Required')
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
							{ isEditMode 
								? <ContactsEditDataForm profile={props.profile} editMode={() => setIsEditMode(false)} isOwner={props.isOwner} /> 
								: <ContactsData profile={props.profile} editMode={() => setIsEditMode(true)} isOwner={props.isOwner} /> }
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
														value={formik.values.fullname} 
														placeholder="What is your name?"
														validationSchema={formik.validationSchema}
										/>
										<button className={style.submitNameButton} type="submit">+</button>
									</form>
								: <div>
										<div className={style.name}>{ props.profile.fullName }</div>
										<img onClick={() => setIsEditName(true)} className={props.isOwner ? style.editNameIcon : style.editNameIconNone} src={pencil} alt="" />
									</div>
							}
							{formik.errors.fullName ? <p className={style.errorName}>{formik.errors.fullName}</p> : null}
						</div>
						<h3 className={style.profession}>Frontend developer (React developer)</h3>
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

const ContactsData = (props) => {
	const [showButton, setShowButton] = useState(false)
	return(
		<div className={style.contactsData}>
			{ Object.keys(props.profile.contacts).map(key => props.profile.contacts[key] ? <Contact key={key} value={props.profile.contacts[key]} /> : null)}
			<div onClick={() => setShowButton(!showButton)} className={style.iconButton}>
				<span></span>
				<span></span>
				<span></span>
				{props.isOwner && <button onClick={props.editMode} className={showButton ? style.showButtonEdit : style.hideButtonEdit}>Edit</button>}
				{/* <button className={showButton ? style.showButtonEdit : style.hideButtonEdit}>Edit</button> */}
			</div>
		</div>
	)
}

const ContactsEditDataForm = (props) => {
	const [showButton, setShowButton] = useState(false)
	return(
		<div className={style.contactsData}>
			{ Object.keys(props.profile.contacts).map(key => props.profile.contacts[key] ? <Contact key={key} value={props.profile.contacts[key]} /> : null)}
			<div onClick={() => setShowButton(!showButton)} className={style.iconButton}>
				<span></span>
				<span></span>
				<span></span>
				{props.isOwner && <button onClick={() => {}} className={showButton ? style.showButtonEdit : style.hideButtonEdit}>Save</button>}
				{/* <button className={showButton ? style.showButtonEdit : style.hideButtonEdit}>Edit</button> */}
			</div>
		</div>
	)
}

const Contact = ({value}) => {
	return(
		<div className={style.contact}>
			<img className={style.icon} src={website} alt="" />
			<a className={style.link} target="_blank" rel="noreferrer" href={ value }>{ value }</a>
		</div>
	)
}

export default UserProfile;
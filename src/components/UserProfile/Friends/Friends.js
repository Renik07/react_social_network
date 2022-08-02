import style from "./Friends.module.css";
import userPhoto from '../../../assets/images/avatar.png';

const Friends = () => {
	return(
		<div className={style.friends}>
			<div className={style.friendsHeader}>
				<h3 className={style.friendsTitle}>Friends</h3>
			</div>
			<div className={style.friendsBody}>
				<img className={style.friend} src={userPhoto} alt="" />
				<img className={style.friend} src={userPhoto} alt="" />
				<img className={style.friend} src={userPhoto} alt="" />
				<img className={style.friend} src={userPhoto} alt="" />
				<img className={style.friend} src={userPhoto} alt="" />
				<img className={style.friend} src={userPhoto} alt="" />
				<img className={style.friend} src={userPhoto} alt="" />
				<img className={style.friend} src={userPhoto} alt="" />
				<img className={style.friend} src={userPhoto} alt="" />
				<img className={style.friend} src={userPhoto} alt="" />
				<img className={style.friend} src={userPhoto} alt="" />
				<img className={style.friend} src={userPhoto} alt="" />
			</div>
		</div>
	)
}

export default Friends;
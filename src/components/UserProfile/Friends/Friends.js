import style from "./Friends.module.css";

const Friends = () => {
	return(
		<div className={style.friends}>
			<div className={style.friendsHeader}>
				<h3 className={style.friendsTitle}>Friends</h3>
			</div>
			<div className={style.friendsBody}>
				<div className={style.friend}></div>
				<div className={style.friend}></div>
				<div className={style.friend}></div>
				<div className={style.friend}></div>
				<div className={style.friend}></div>
				<div className={style.friend}></div>
				<div className={style.friend}></div>
				<div className={style.friend}></div>
				<div className={style.friend}></div>
				<div className={style.friend}></div>
				<div className={style.friend}></div>
				<div className={style.friend}></div>
			</div>
		</div>
	)
}

export default Friends;
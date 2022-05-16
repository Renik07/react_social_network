import style from "./Follow.module.css";

const Follow = () => {
	return(
		<div className={style.follow}>
			<div className={style.followCount}>
				<div className={style.followingBlock}>
					<div className={style.followingTitle}>
						Following
					</div>
					<div className={style.followingNum}>
						34
					</div>
				</div>
				<div className={style.followersBlock}>
					<div className={style.followersTitle}>
						Followers
					</div>
					<div className={style.followersNum}>
						155
					</div>
				</div>
			</div>
		</div>
	)
}

export default Follow;
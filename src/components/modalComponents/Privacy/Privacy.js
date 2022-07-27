import style from "./Privacy.module.css";

const Privacy = () => {

	return (
		<div className={style.privacy}>
			<h2 className={style.title}>Privacy</h2>
			<div className={style.body}>
				<div className={style.block}>
					<h3 className={style.subtitle}>Who can see your email address</h3>
					<p className={style.desc}>
						Choose who can see your email address on your profile
					</p>
					<div className={style.inputs}>
						<label className={style.customRadio}><input type="radio" name="email" value="email-everyone" id="email-everyone" />
							<span>Everyone</span>
						</label>
						<label className={style.customRadio}><input type="radio" name="email" value="email-friends" id="email-friends" />
							<span>Friends</span>
						</label>
						<label className={style.customRadio}><input type="radio" name="email" value="email-onlyMe" id="email-onlyMe" />
							<span>Only me</span>
						</label>
					</div>
				</div>
				<div className={style.block}>
					<h3 className={style.subtitle}>Who can see your Friends</h3>
					<p className={style.desc}>
						Choose who can see your list of connections
					</p>
					<div className={style.inputs}>
						<label className={style.customRadio}><input type="radio" name="friends" value="friends-everyone" id="friends-everyone" />
							<span>Everyone</span>
						</label>
						<label className={style.customRadio}><input type="radio" name="friends" value="friends-friends" id="friends-friends" />
							<span>Friends</span>
						</label>
						<label className={style.customRadio}><input type="radio" name="friends" value="friends-onlyMe" id="friends-onlyMe" />
							<span>Only me</span>
						</label>
					</div>
				</div>
				<div className={style.block}>
					<h3 className={style.subtitle}>Manage who can discover your profile from your email address</h3>
					<p className={style.desc}>
						Choose who can discover your profile if they are not connected to you but have your email address
					</p>
					<div className={style.inputs}>
						<label className={style.customRadio}><input type="radio" name="discover" value="discover-everyone" id="discover-everyone" />
							<span>Everyone</span>
						</label>
						<label className={style.customRadio}><input type="radio" name="discover" value="discover-friends" id="discover-friends" />
							<span>Friends</span>
						</label>
						<label className={style.customRadio}><input type="radio" name="discover" value="discover-onlyMe" id="discover-onlyMe" />
							<span>Only me</span>
						</label>
					</div>
				</div>
				<div className={style.buttons}>
					<button className={style.saveBtn}>Save</button>
					<button className={style.cancelBtn}>Cancel</button>
				</div>
			</div>
		</div>
	)
}

export default Privacy;
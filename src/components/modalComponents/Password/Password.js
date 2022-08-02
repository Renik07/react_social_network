import style from "./Password.module.css";

const Password = () => {

	return (
		<div className={style.password}>
			<h2 className={style.title}>Change Password</h2>
			<div className={style.form}>
				<h3 className={style.formTitle}>Old Password</h3>
				<div className={`${style.inputWrapper} ${style.password}`}>
					<input className={style.input} type="password" placeholder="Old Password" />
				</div>
				<h3 className={style.formTitle}>New Password</h3>
				<div className={`${style.inputWrapper} ${style.password}`}>
					<input className={style.input} type="password" placeholder="New Password" />
				</div>
				<h3 className={style.formTitle}>Repeat Password</h3>
				<div className={`${style.inputWrapper} ${style.password}`}>
					<input className={style.input} type="password" placeholder="Repeat Password" />
				</div>
				<a className={style.forgotPassLink} href="/">Forgot Password?</a>
				<div className={style.buttons}>
					<button className={style.saveBtn}>Save Setting</button>
					<button className={style.cancelBtn}>Restore Setting</button>
				</div>
			</div>
		</div>
	)
}

export default Password;
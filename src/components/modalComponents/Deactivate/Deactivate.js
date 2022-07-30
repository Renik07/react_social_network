import style from "./Deactivate.module.css";

const Deactivate = () => {

	return (
		<div className={style.deactivate}>
			<h2 className={style.title}>Deactivate Account</h2>
			<div className={style.form}>
				<h3 className={style.formTitle}>Email</h3>
				<div className={`${style.inputWrapper} ${style.message}`}>
					<input className={style.input} type="email" placeholder="Email Address" />
				</div>
				<h3 className={style.formTitle}>Password</h3>
				<div className={`${style.inputWrapper} ${style.password}`}>
					<input className={style.input} type="password" placeholder="Password" />
				</div>
				<h3 className={style.formTitle}>Please Explain Further</h3>
				<textarea className={style.textarea}>

				</textarea>
				<label className={style.checkbox}>
					<input type="checkbox" value="true" />
					<span>Email option out</span>
				</label>
				<p className={style.desc}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium nulla quis erat dapibus, varius hendrerit neque suscipit. Integer in ex euismod, posuere lectus id,
				</p>
				<div className={style.buttons}>
					<button className={style.saveBtn}>Save</button>
					<button className={style.cancelBtn}>Cancel</button>
				</div>
			</div>
		</div>
	)
}

export default Deactivate;
import { useState } from "react";
import style from "./AccSettings.module.css";

const AccSettings = () => {
	const [notificationSound, setNotificationSound] = useState(false);
	const [notificationEmail, setNotificationEmail] = useState(false);
	const [chatSound, setChatSound] = useState(false);
	
	return (
		<div className={style.accSettings}>
			<h2 className={style.title}>Account settings</h2>
			<div className={style.body}>
				<div className={style.block}>
					<h3 className={style.subtitle}>Notification Sound</h3>
					<div className={style.blockWrapper}>
						<p className={style.desc}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium nulla quis erat dapibus,
						varius hendrerit neque suscipit. Integer in ex euismod, posuere lectus id
						</p>
						<div className={style.button}>
							<div className={style.buttonOn}>On</div>
							<div className={style.buttonOff}>Off</div>
							<div className={notificationSound ? style.toggleOn : style.toggleOff} onClick={() => setNotificationSound(!notificationSound)}>
								<span className={style.dash}>&#8212;</span>
								<span className={style.dash}>&#8212;</span>
								<span className={style.dash}>&#8212;</span>
							</div>
						</div>
					</div>
				</div>
				<div className={style.block}>
					<h3 className={style.subtitle}>Notification Email</h3>
					<div className={style.blockWrapper}>
						<p className={style.desc}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium nulla quis erat dapibus,
						varius hendrerit neque suscipit. Integer in ex euismod, posuere lectus id
						</p>
						<div className={style.button}>
							<div className={style.buttonOn}>On</div>
							<div className={style.buttonOff}>Off</div>
							<div className={notificationEmail ? style.toggleOn : style.toggleOff} onClick={() => setNotificationEmail(!notificationEmail)}>
								<span className={style.dash}>&#8212;</span>
								<span className={style.dash}>&#8212;</span>
								<span className={style.dash}>&#8212;</span>
							</div>
						</div>
					</div>
				</div>
				<div className={style.block}>
					<h3 className={style.subtitle}>Chat Message Sound</h3>
					<div className={style.blockWrapper}>
						<p className={style.desc}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium nulla quis erat dapibus,
						varius hendrerit neque suscipit. Integer in ex euismod, posuere lectus id
						</p>
						<div className={style.button}>
							<div className={style.buttonOn}>On</div>
							<div className={style.buttonOff}>Off</div>
							<div className={chatSound ? style.toggleOn : style.toggleOff} onClick={() => setChatSound(!chatSound)}>
								<span className={style.dash}>&#8212;</span>
								<span className={style.dash}>&#8212;</span>
								<span className={style.dash}>&#8212;</span>
							</div>
						</div>
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

export default AccSettings;
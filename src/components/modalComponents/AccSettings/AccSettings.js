import { useState } from "react";
import style from "./AccSettings.module.css";

const AccSettings = () => {
	const [isNotificationSound, setNotificationSound] = useState(false);
	const [isNotificationEmail, setNotificationEmail] = useState(false);
	const [isChatSound, setChatSound] = useState(false);
	
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
							<div className={isNotificationSound ? style.toggleOn : style.toggleOff} onClick={() => setNotificationSound(!isNotificationSound)}>
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
							<div className={isNotificationEmail ? style.toggleOn : style.toggleOff} onClick={() => setNotificationEmail(!isNotificationEmail)}>
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
							<div className={isChatSound ? style.toggleOn : style.toggleOff} onClick={() => setChatSound(!isChatSound)}>
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
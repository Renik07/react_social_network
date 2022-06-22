import React, { useEffect, useState } from "react";
import style from "./ProfileStatus.module.css";

const ProfileStatus = (props) => {

	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	const activateEditMode = () => {
		setEditMode(true);
	}
	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	}

	const onStatusChange = (event) => {
		setStatus(event.currentTarget.value)
	}

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])

	return (
		<div className={style.wrapperStatus}>
			Status:
			{editMode
				? 
					<input className={style.inputStatus} onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status} />
				: 
				<div className={style.status} onClick={activateEditMode} >{props.status || "no status"}</div>
			}
		</div>
	)
}

export default ProfileStatus;
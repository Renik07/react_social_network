import React from "react";
import style from "../MyProfile.module.css";

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status
	}

	activateEditMode = () => {
		this.setState({
			editMode: true
		})
	}

	deactivateEditMode = () => {
		this.setState({
			editMode: false
		})
		this.props.updateStatus(this.state.status);
	}


	onStatusChange = (event) => {
		this.setState({
			status: event.currentTarget.value
		})
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			})
		}
	}

	render() {
		return (
			<div className={style.wrapperStatus}>
				Status:
				{this.state.editMode
					? 
						<input className={style.inputStatus} onChange={this.onStatusChange} onBlur={this.deactivateEditMode} value={this.state.status} />
					: 
					<div className={style.status} onClick={this.activateEditMode}>{this.props.status || "no status"}</div>
				}
			</div>
		)
	}
	
}

export default ProfileStatus;
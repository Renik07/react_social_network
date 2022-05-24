import React from "react";

class ProfileStatus extends React.Component {
	state = {
		editMode: false
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
	}
	render() {
		return (
			<div>
				{this.state.editMode
					? 
					<div>
						<input onBlur={this.deactivateEditMode} value={this.props.status} />
					</div>
					: 
					<div onDoubleClick={this.activateEditMode}>{this.props.status}</div>
				}
			</div>
		)
	}
	
}

export default ProfileStatus;
import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './UserProfile';
import { getUserProfileThunkCreator, getUserStatusThunkCreator, updateUserStatusThunkCreator } from '../../redux/userProfileReducer';
import { useParams } from 'react-router-dom';

class UserProfileContainer extends React.Component {
	componentDidMount() {
		const params = this.props.params;
		
		this.props.getUserProfileTC(params.userId);
		this.props.getUserStatusTC(params.userId);

	}
	render() {
		return <UserProfile 
			{...this.props} 
			profile={this.props.profile}
			status={this.props.status} 
			updateStatus={this.props.updateUserStatusTC}
		/>
	}
}

let mapStateToProps = (state) => ({
	profile: state.userProfilePage.profile,
	status: state.userProfilePage.status,
	id: state.auth.id
})

const TakeParams = (props) => {
	return <UserProfileContainer {...props} params={useParams()} />
}

export default connect(mapStateToProps, {
	getUserProfileTC: getUserProfileThunkCreator, 
	updateUserStatusTC: updateUserStatusThunkCreator,
	getUserStatusTC: getUserStatusThunkCreator
})(TakeParams);
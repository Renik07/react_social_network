import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './UserProfile';
import { getUserProfileThunkCreator, getUserStatusThunkCreator, saveFullnameThunkCreator, savePhotoThunkCreator, updateUserStatusThunkCreator } from '../../redux/userProfileReducer';
import { useParams } from 'react-router-dom';

class UserProfileContainer extends React.Component {

	updateProfile = () => {
		const params = this.props.params;
		if(!params.userId) {
			params.userId = this.props.authorizedId
		}

		this.props.getUserProfileTC(params.userId);
		this.props.getUserStatusTC(params.userId);
	}

	componentDidMount() {
		this.updateProfile();
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.props.params.userId !== prevProps.params.userId) {
			this.updateProfile();
		}
	}
	render() {
		return <UserProfile 
			{...this.props} 
			profile={this.props.profile}
			status={this.props.status} 
			updateStatus={this.props.updateUserStatusTC}
			savePhoto={this.props.savePhotoTC}
			saveFullname={this.props.saveFullnameTC}
			isOwner={this.props.params.userId === this.props.authorizedId}
		/>
	}
}

let mapStateToProps = (state) => ({
	profile: state.userProfilePage.profile,
	status: state.userProfilePage.status,
	authorizedId: state.auth.id,
	isAuth: state.auth.isAuth
})

const TakeParams = (props) => {
	return <UserProfileContainer {...props} params={useParams()} />
}

export default connect(mapStateToProps, {
	getUserProfileTC: getUserProfileThunkCreator, 
	updateUserStatusTC: updateUserStatusThunkCreator,
	getUserStatusTC: getUserStatusThunkCreator,
	savePhotoTC: savePhotoThunkCreator,
	saveFullnameTC: saveFullnameThunkCreator
})(TakeParams);
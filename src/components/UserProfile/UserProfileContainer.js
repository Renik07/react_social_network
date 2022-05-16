import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './UserProfile';
import { setUserProfile } from '../State/userProfileReducer';

class UserProfileContainer extends React.Component {
	componentDidMount() {
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
				.then(response => {
					this.props.setUserProfile(response.data);
				})
	}
	render() {
		return <UserProfile {...this.props} profile={this.props.profile}/>
	}
}

let mapStateToProps = (state) => ({
	profile: state.userProfilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(UserProfileContainer);
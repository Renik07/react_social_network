import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './UserProfile';
import { setUserProfile } from '../State/userProfileReducer';
import { useParams } from 'react-router-dom';

class UserProfileContainer extends React.Component {
	componentDidMount() {
		const params = this.props.params;
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/profile/${params.userId}`)
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

const TakeParams = (props) => {
	return <UserProfileContainer {...props} params={useParams()} />
}

export default connect(mapStateToProps, {setUserProfile})(TakeParams);
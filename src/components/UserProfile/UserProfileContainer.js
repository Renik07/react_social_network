import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './UserProfile';
import { getUserProfileThunkCreator } from '../redux/userProfileReducer';
import { useParams } from 'react-router-dom';

class UserProfileContainer extends React.Component {
	componentDidMount() {
		const params = this.props.params;

		this.props.getUserProfileTC(params.userId);
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

export default connect(mapStateToProps, {getUserProfileTC: getUserProfileThunkCreator})(TakeParams);
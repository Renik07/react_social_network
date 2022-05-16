import { connect } from 'react-redux';
import UserProfile from './UserProfile';

let mapStateToProps = (state) => {
	return {
		userProfilePage: state.userProfilePage
	}
}

let UserProfileContainer = connect(mapStateToProps, {})(UserProfile);

export default UserProfileContainer;
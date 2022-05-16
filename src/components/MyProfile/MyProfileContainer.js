import { connect } from 'react-redux';
import MyProfile from './MyProfile';

let mapStateToProps = (state) => {
	return {
		myProfilePage: state.myProfilePage
	}
}

let MyProfileContainer = connect(mapStateToProps, {})(MyProfile);

export default MyProfileContainer;
import { connect } from 'react-redux';
import MyProfile from './MyProfile';

let mapStateToProps = (state) => {
	return {
		MyProfilePage: state.MyProfilePage
	}
}

let MyProfileContainer = connect(mapStateToProps, {})(MyProfile);

export default MyProfileContainer;
import { connect } from "react-redux"
import { followAC, setUsersAC, unfollowAC } from "../State/usersReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => dispatch(followAC(userId)),
		unfollow: (userId) => dispatch(unfollowAC(userId)),
		setUsers: (users) => dispatch(setUsersAC(users))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);




/* import { connect } from "react-redux";
import { followAC, setProfilesAC, unfollowAC } from "../State/profilesReducer";
import Profiles from "./Profiles";

let mapStateToProps = (state) => {
	return {
		profiles: state.profilesPage.profiles
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (profileID) => dispatch(followAC(profileID)),
		unfollow: (profileID) => dispatch(unfollowAC(profileID)),
		setProfiles: (profiles) => dispatch(setProfilesAC(profiles))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profiles); */
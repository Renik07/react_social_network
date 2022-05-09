import { connect } from "react-redux";
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

export default connect(mapStateToProps, mapDispatchToProps)(Profiles);
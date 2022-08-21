import { connect } from "react-redux";
import ProfileTabs from "./ProfileTabs";

const ProfileTabsContainer = (props) => {
	return (
		<ProfileTabs {...props} />
	)
}

let mapStateToProps = (state) => {
	return {
		jobs: state.jobsPage.jobs
	}
};

export default connect(mapStateToProps, {})(ProfileTabsContainer);
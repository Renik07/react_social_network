import { connect } from "react-redux";
import Jobs from "./Jobs"

const JobsContainer = (props) => {
	return (
		<Jobs {...props} />
	)
}

let mapStateToProps = (state) => {
	return {
		jobs: state.jobsPage.jobs
	}
};
/* let mapDispatchToProps; */

export default connect(mapStateToProps, {})(JobsContainer);
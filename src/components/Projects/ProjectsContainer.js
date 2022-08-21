import { connect } from "react-redux"
import Projects from "./Projects"

const ProjectsContainer = (props) => {
	return(
		<Projects {...props} />
	)
}

let mapStatetoProps = (state) => {
	return {
		projects: state.projectsPage.projects
	}
}

export default connect(mapStatetoProps, {})(ProjectsContainer);
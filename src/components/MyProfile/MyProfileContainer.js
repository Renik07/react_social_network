import { connect } from 'react-redux';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import MyProfile from './MyProfile';

/* HOC */
let AuthNavigateComponent = withAuthNavigate(MyProfile);

let mapStateToProps = (state) => {
	return {
		myProfilePage: state.myProfilePage,
	}
}

export default connect(mapStateToProps, {})(AuthNavigateComponent);
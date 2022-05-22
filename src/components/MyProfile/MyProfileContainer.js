import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import MyProfile from './MyProfile';

let mapStateToProps = (state) => {
	return {
		myProfilePage: state.myProfilePage,
	}
}

/* HOC, Compose */
export default compose(
	connect(mapStateToProps, {}),
	withAuthNavigate
)(MyProfile);

/* let AuthNavigateComponent = withAuthNavigate(MyProfile);
export default connect(mapStateToProps, {})(AuthNavigateComponent); */
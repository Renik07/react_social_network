import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { getUserStatusThunkCreator, updateUserStatusThunkCreator } from '../../redux/myProfileReducer';
import MyProfile from './MyProfile';

class MyProfileContainer extends React.Component {
	componentDidMount() {
		this.props.getUserStatusTC(this.props.id);
	}
	
	render() {
		return(
			<MyProfile {...this.props} status={this.props.status} updateStatus={this.props.updateUserStatusTC} />
		)
	}
}

let mapStateToProps = (state) => {
	return {
		myProfilePage: state.myProfilePage,

		status: state.myProfilePage.status,
		id: state.auth.id
	}
}

/* HOC, Compose */
export default compose(
	connect(mapStateToProps, {getUserStatusTC: getUserStatusThunkCreator, updateUserStatusTC: updateUserStatusThunkCreator}),
	withAuthNavigate
)(MyProfileContainer);

/* let AuthNavigateComponent = withAuthNavigate(MyProfile);
export default connect(mapStateToProps, {})(AuthNavigateComponent); */
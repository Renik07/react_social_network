/* import * as axios from 'axios'; */
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData } from '../redux/authReducer';
import { usersAPI } from '../../api/api';

class HeaderContainer extends React.Component {
	componentDidMount() {
		usersAPI.setAuthUserData(this.props.setAuthUserData)
	}
	render() {
		return <Header {...this.props} />
	}
}

let mapStateToProps = (state) => {
	return {
		login: state.auth.login,
		isAuth: state.auth.isAuth
	}
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
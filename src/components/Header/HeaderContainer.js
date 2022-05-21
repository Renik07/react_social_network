/* import * as axios from 'axios'; */
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData, setAuthUserDataThunkCreator } from '../redux/authReducer';

class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.setAuthUserDataTC()
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

export default connect(mapStateToProps, {setAuthUserData, setAuthUserDataTC: setAuthUserDataThunkCreator})(HeaderContainer);
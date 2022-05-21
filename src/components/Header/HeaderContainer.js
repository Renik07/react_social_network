import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getAuthUserDataThunkCreator } from '../redux/authReducer';

class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.getAuthUserDataTC()
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

export default connect(mapStateToProps, {getAuthUserDataTC: getAuthUserDataThunkCreator})(HeaderContainer);
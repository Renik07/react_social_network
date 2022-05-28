import { Route, Routes } from 'react-router-dom';
import style from './App.module.css';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';
import MyProfileContainer from './components/MyProfile/MyProfileContainer';
import UserProfileContainer from './components/UserProfile/UserProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import React from 'react';
import { connect } from 'react-redux';
import { getAuthUserDataThunkCreator } from './redux/authReducer';

class App extends React.Component {
	componentDidMount() {
		this.props.getAuthUserDataTC()
	}

	render() {
		return (
			<div className={style.app}>
				<HeaderContainer />
				<div className={style.container}>
					<Routes>
						<Route path='/' element={<MyProfileContainer />} />
						<Route path='/myprofile' element={<MyProfileContainer />} />
						<Route path='/userprofile/:userId' element={<UserProfileContainer />} />
						<Route path='/messages/*' element={ <MessagesContainer />} />
						<Route path='/profiles' element={ <UsersContainer />} />
						<Route path='/login' element={ <Login />} />
					</Routes>
				</div>
			</div>
  	);
	}
}

export default connect(null, {getAuthUserDataTC: getAuthUserDataThunkCreator})(App);

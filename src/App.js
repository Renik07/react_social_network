import { Route, Routes } from 'react-router-dom';
import style from './App.module.css';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';
import UserProfileContainer from './components/UserProfile/UserProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import React from 'react';
import { connect } from 'react-redux';
import { initializeAppThunkCreator } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import Footer from './components/Footer/Footer';
import Companies from './components/Companies/Companies';
import Projects from './components/Projects/Projects';
import Jobs from './components/Jobs/Jobs';
import Notification from './components/Notification/Notification';

class App extends React.Component {
	componentDidMount() {
		this.props.initializeAppTC()
	}

	render() {

		if (!this.props.initialized) return <Preloader />

		return (
			<div className={style.app}>
				<HeaderContainer />
				<div className={style.container}>
					<Routes>
						<Route path='/profile' element={<UserProfileContainer />} />
						<Route path='/profile/:userId' element={<UserProfileContainer />} />
						<Route path='/projects' element={<Projects />} />
						<Route path='/companies' element={<Companies />} />
						<Route path='/jobs' element={<Jobs />} />
						<Route path='/messages/*' element={ <MessagesContainer />} />
						<Route path='/notification' element={ <Notification />} />
						<Route path='/users' element={ <UsersContainer />} />
						<Route path='/login' element={ <Login />} />
					</Routes>
				</div>
				<Footer />
			</div>
  	);
	}
}

let mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeAppTC: initializeAppThunkCreator})(App);

import { Navigate, Route, Routes } from 'react-router-dom';
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
import Notification from './components/Notification/Notification';
import Company from './components/Company/Company';
import CookieConsent from "react-cookie-consent";
import PageNotFound from './components/common/PageNotFound/PageNotFound';
import JobsContainer from './components/Jobs/JobsContainer';

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
						<Route path='/' element={<Navigate to="/profile" />} />
						<Route path='/profile' element={<UserProfileContainer />} />
						<Route path='/profile/:userId' element={<UserProfileContainer />} />
						<Route path='/projects' element={<Projects />} />
						<Route path='/companies' element={<Companies />} />
						<Route path='/company' element={<Company />} />
						<Route path='/jobs' element={<JobsContainer />} />
						<Route path='/messages/*' element={ <MessagesContainer />} />
						<Route path='/notification' element={ <Notification />} />
						<Route path='/users' element={ <UsersContainer />} />
						<Route path='/login' element={ <Login />} />
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</div>
				<Footer />
				<CookieConsent 
					buttonText="Agree & Close"
					style={{ background: "#2b373bd7" }}
					expires={90}>
					🍪 By continuing to browse this site, you agree to the use of cookies to identify your session and to remember your login after you close the browser (authentication cookies). <b className={style.cookieText}>P.S. For login: email: free@samuraijs.com, password: free</b>
				</CookieConsent>
			</div>
  	);
	}
}

let mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeAppTC: initializeAppThunkCreator})(App);

import { Route, Routes } from 'react-router-dom';
import style from './App.module.css';
import Background from './components/Background/Background';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';
import MyProfileContainer from './components/MyProfile/MyProfileContainer';
import UserProfileContainer from './components/UserProfile/UserProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
  return (
			<div className={style.app}>
				<HeaderContainer />
				<Background />
				<div className={style.container}>
					<Routes>
						<Route path='/myprofile' element={<MyProfileContainer />} />
						<Route path='/userprofile/:userId' element={<UserProfileContainer />} />
						<Route path='/messages/*' element={ <MessagesContainer />} />
						<Route path='/profiles' element={ <UsersContainer />} />
					</Routes>
				</div>
			</div>
  );
}

export default App;

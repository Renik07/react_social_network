import { Route, Routes } from 'react-router-dom';
import style from './App.module.css';
import Background from './components/Background/Background';
import Header from './components/Header/Header';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';
import MyProfileContainer from './components/MyProfile/MyProfileContainer';

const App = (props) => {
  return (
			<div className={style.app}>
				<Header />
				<Background />
				<div className={style.container}>
					<Routes>
						<Route path='/myprofile' element={<MyProfileContainer />} />
						<Route path='/messages/*' element={ <MessagesContainer />} />
						<Route path='/profiles' element={ <UsersContainer />} />
					</Routes>
				</div>
			</div>
  );
}

export default App;

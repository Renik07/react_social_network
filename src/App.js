import { Route, Routes } from 'react-router-dom';
import style from './App.module.css';
import Background from './components/Background/Background';
import Header from './components/Header/Header';
import HomeContainer from './components/Home/HomeContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
			<div className={style.app}>
				<Header />
				<Background />
				<div className={style.container}>
					<Routes>
						<Route path='/home' element={<HomeContainer />} />
						<Route path='/messages/*' element={ <MessagesContainer />} />
						<Route path='/profiles' element={ <UsersContainer />} />
					</Routes>
				</div>
			</div>
  );
}

export default App;

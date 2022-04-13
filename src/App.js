import { Route, Routes } from 'react-router-dom';
import style from './App.module.css';
import Background from './components/Background/Background';
import Header from './components/Header/Header';
/* import Home from './components/Home/Home'; */
import HomeContainer from './components/Home/HomeContainer';
import MessagesContainer from './components/Messages/MessagesContainer';

const App = (props) => {
  return (
			<div className={style.app}>
				<Header />
				<Background />
				<div className={style.container}>
					<Routes>
						<Route path='/home' element={<HomeContainer />} />
						<Route path='/messages/*' element={ <MessagesContainer />} />
					</Routes>
				</div>
			</div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import style from './App.module.css';
import Background from './components/Background/Background';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MessagesContainer from './components/Messages/MessagesContainer';

const App = (props) => {
  return (
		<BrowserRouter>
			<div className={style.app}>
				<Header />
				<Background />
				<div className={style.container}>
					<Routes>
						<Route path='/home' element={<Home homePage = {props.state.homePage}/>} />
						<Route path='/messages/*' element={ <MessagesContainer store = {props.store} />} />
					</Routes>

				</div>
			</div>
		</BrowserRouter>

  );
}

export default App;

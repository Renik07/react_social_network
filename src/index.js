import store from './components/State/redux-store';
/* import reportWebVitals from './reportWebVitals'; */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

ReactDOM.render(
<React.StrictMode>
	<BrowserRouter>
		<Provider store={store}>
			<App /* state={state} dispatch={store.dispatch.bind(store)} store={store} *//>
		</Provider>
			
	</BrowserRouter>
</React.StrictMode>, document.getElementById('root')
);

/* rerenderTree(store.getState());

store.subscribe(() => {
	let state = store.getState();
	rerenderTree(state);
}); */
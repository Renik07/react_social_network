import store from './components/State/State';
/* import reportWebVitals from './reportWebVitals'; */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

let rerenderTree = (state) => {
	ReactDOM.render(
  <React.StrictMode>
    <App state={state} addMsg={store.addMsg.bind(store)} updateTextMsg={store.updateTextMsg.bind(store)} />
  </React.StrictMode>, document.getElementById('root')
	);
}

rerenderTree(store.getState());

store.subscribe(rerenderTree);
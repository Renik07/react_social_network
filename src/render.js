import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state from './components/State/State';
import { addMsg } from './components/State/State';

export let rerenderTree = () => {
	ReactDOM.render(
  <React.StrictMode>
    <App state={state} addMsg={addMsg} />
  </React.StrictMode>, document.getElementById('root')
	);
}
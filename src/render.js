import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addMsg, updateTextMsg } from './components/State/State';
import './index.css';

export let rerenderTree = (state) => {
	ReactDOM.render(
  <React.StrictMode>
    <App state={state} addMsg={addMsg} updateTextMsg={updateTextMsg} />
  </React.StrictMode>, document.getElementById('root')
	);
}
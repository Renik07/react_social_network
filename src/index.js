import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './components/State/State';

/* let dialogsData = [
	{id: "user1", name: "Name 1"},
	{id: "user2", name: "Name 2"},
	{id: "user3", name: "Name 3"},
	{id: "user4", name: "Name 4"}
];

let messagesData = [
	{id: 1, message: "message 1"},
	{id: 2, message: "message 2"},
	{id: 3, message: "message 3"},
	{id: 4, message: "message 4"}
] */

ReactDOM.render(
  <React.StrictMode>
    <App state={state} /* dataM={messagesData} *//>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

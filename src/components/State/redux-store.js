import { combineReducers, createStore } from "redux";
import messagesReducer from "./messagesReducer";

let reducers = combineReducers({
	messagesPage: messagesReducer
});

let store = createStore(reducers);



export default store;
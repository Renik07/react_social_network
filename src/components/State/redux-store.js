import { combineReducers, createStore } from "redux";
import myProfileReducer from "./myProfileReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";
import userProfileReducer from "./userProfileReducer";

let reducers = combineReducers({
	messagesPage: messagesReducer,
	myProfilePage: myProfileReducer,
	userProfilePage: userProfileReducer,
	usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
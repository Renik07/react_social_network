import { combineReducers, createStore } from "redux";
import MyProfileReducer from "./MyProfileReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
	messagesPage: messagesReducer,
	MyProfilePage: MyProfileReducer,
	usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
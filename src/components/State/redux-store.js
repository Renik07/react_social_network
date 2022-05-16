import { combineReducers, createStore } from "redux";
import MyProfileReducer from "./MyProfileReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";
import UserProfileReducer from "./UserProfileReducer";

let reducers = combineReducers({
	messagesPage: messagesReducer,
	myProfilePage: MyProfileReducer,
	userProfilePage: UserProfileReducer,
	usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
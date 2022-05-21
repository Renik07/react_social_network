import { applyMiddleware, combineReducers, createStore } from "redux";
import myProfileReducer from "./myProfileReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";
import userProfileReducer from "./userProfileReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
	messagesPage: messagesReducer,
	myProfilePage: myProfileReducer,
	userProfilePage: userProfileReducer,
	usersPage: usersReducer,
	auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
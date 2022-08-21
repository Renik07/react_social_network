import { applyMiddleware, combineReducers, createStore } from "redux";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";
import userProfileReducer from "./userProfileReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./appReducer";
import jobsReducer from "./jobsReducer";

let reducers = combineReducers({
	messagesPage: messagesReducer,
	userProfilePage: userProfileReducer,
	usersPage: usersReducer,
	jobsPage: jobsReducer,
	auth: authReducer,
	app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
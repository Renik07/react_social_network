import { applyMiddleware, combineReducers, createStore } from "redux";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";
import userProfileReducer from "./userProfileReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./appReducer";
import jobsReducer from "./jobsReducer";
import projectsReducer from "./projectsReducer";

let reducers = combineReducers({
	messagesPage: messagesReducer,
	userProfilePage: userProfileReducer,
	usersPage: usersReducer,
	jobsPage: jobsReducer,
	projectsPage: projectsReducer,
	auth: authReducer,
	app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
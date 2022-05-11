import { combineReducers, createStore } from "redux";
import homeReducer from "./homeReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
	messagesPage: messagesReducer,
	homePage: homeReducer,
	usersPage: usersReducer
});

let store = createStore(reducers);

export default store;
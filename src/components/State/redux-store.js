import { combineReducers, createStore } from "redux";
import homeReducer from "./homeReducer";
import messagesReducer from "./messagesReducer";

let reducers = combineReducers({
	messagesPage: messagesReducer,
	homePage: homeReducer
});

let store = createStore(reducers);

export default store;
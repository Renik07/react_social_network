import { combineReducers, createStore } from "redux";
import homeReducer from "./homeReducer";
import messagesReducer from "./messagesReducer";
import profilesReducer from "./profilesReducer";

let reducers = combineReducers({
	messagesPage: messagesReducer,
	homePage: homeReducer,
	profilesPage: profilesReducer
});

let store = createStore(reducers);

export default store;
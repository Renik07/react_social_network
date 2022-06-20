import { getAuthUserDataThunkCreator } from "./authReducer";

const INITIALIZED_SUCCESSFULLY = 'INITIALIZED_SUCCESSFULLY';

let initialState = {
	initialized: false,
}

const appReducer = (state = initialState, action) => {
	switch(action.type) {
		case INITIALIZED_SUCCESSFULLY:
			return {
				...state,
				initialized: true
			}
		default:
			return state;
	}
}

const initializedSuccessfully = () => ({type: INITIALIZED_SUCCESSFULLY})

export const initializeAppThunkCreator = () => (dispatch) => {
	let promise = dispatch(getAuthUserDataThunkCreator());
	promise.then(() => {
		dispatch(initializedSuccessfully())
	})
	
}

export default appReducer;
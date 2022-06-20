import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false
}

const authReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_AUTH_USER_DATA:
			return {
				...state,
				...action.payload
			}
		default:
			return state;
	}
}

const setAuthUserData = (id, login, email, isAuth = false) => ({type: SET_AUTH_USER_DATA, payload: {id, login, email, isAuth}})

export const getAuthUserDataThunkCreator = () => (dispatch) => {
	return authAPI.me()
		.then(response => {
			if (response.data.resultCode === 0) {
				let {id, login, email} = response.data.data;
				dispatch(setAuthUserData(id, login, email, true));
				/* второй запрос для получения профиля, картинки и т.д. */
			}
		})
}

export const loginThunkCreator = (email, password, rememberMe, setStatus) => (dispatch) => {
	return (
		authAPI.login(email, password, rememberMe)
			.then(response => {
				if (response.data.resultCode === 0) {
					dispatch(getAuthUserDataThunkCreator());
				} else {
					setStatus({error: response.data.messages})
				}
			})
	)
}

export const logoutThunkCreator = () => (dispatch) => {
	return (
		authAPI.logout()
			.then(response => {
				if (response.data.resultCode === 0) {
					dispatch(setAuthUserData(null, null, null, false));
				}
			})
	)
}

export default authReducer;
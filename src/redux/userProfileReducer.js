import { profileAPI } from "../api/api";

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
	status: "",
	profile: null
}

const userProfileReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			}
		case SET_STATUS:
			return {
				...state,
				status: action.status
			}
			default:
				return state;
	}
}

export const setStatusAC = (status) => ({type: SET_STATUS, status})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const getUserProfileThunkCreator = (userId) => {
	return (dispatch) => {
		profileAPI.getUserProfile(userId)
			.then(response => {
				dispatch(setUserProfile(response.data));
			})
	}
}

export const updateUserStatusThunkCreator = (status) => (dispatch) => {
	profileAPI.updateStatus(status)
		.then(response => {
			if (response.data.resultCode === 0) {
				dispatch(setStatusAC(status));
			}
		})
}

export const getUserStatusThunkCreator = (userId) => (dispatch) => {
	profileAPI.getUserStatus(userId)
		.then(response => {
			dispatch(setStatusAC(response.data));
		})
}

export default userProfileReducer;
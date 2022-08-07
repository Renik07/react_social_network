import { profileAPI } from "../api/api";

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_MAIN_PHOTO = 'SET_MAIN_PHOTO';

let initialState = {
	status: "",
	profile: ""
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
		case SET_MAIN_PHOTO:
			return {
				...state,
				profile: {...state.profile, photos: action.photos}
			}
			default:
				return state;
	}
}

export const setStatusAC = (status) => ({type: SET_STATUS, status})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setMainPhotoAC = (photos) => ({type: SET_MAIN_PHOTO, photos});

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

export const savePhotoThunkCreator = (file) => (dispatch) => {
	profileAPI.savePhoto(file)
		.then(response => {
			dispatch(setMainPhotoAC(response.data.data.photos));
		})
}

export const saveProfileDataThunkCreator = (profile) => async (dispatch, getState) => {
	let response = await profileAPI.saveProfileData(profile)
	const userId = getState().auth.id;

	if (response.data.resultCode === 0) {
		dispatch(getUserProfileThunkCreator(userId));
	}
}

export const saveContactsDataThunkCreator = (contacts) => async (dispatch, getState) => {
	let response = await profileAPI.saveContactsData(contacts)
	const userId = getState().auth.id;

	if (response.data.resultCode === 0) {
		dispatch(getUserProfileThunkCreator(userId));
	}
}

export default userProfileReducer;
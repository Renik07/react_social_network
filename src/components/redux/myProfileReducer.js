import { profileAPI } from "../../api/api";

const SET_STATUS = "SET_STATUS";

let initialState = {
	status: "",
	myProfile: {
		socialData: [
			{id: "link1", link: "codewars.com/users/Renik07"},
			{id: "link2", link: "github.com/Renik07"},
			{id: "link3", link: "linkedin.com/in/renat-gayazutdinov-07344a65/"}
		]
	}
}

const myProfileReducer = (state = initialState, action) => {
	switch(action.type) {
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

export const getUserStatusThunkCreator = (userId) => (dispatch) => {
	profileAPI.getUserStatus(userId)
		.then(response => {
			dispatch(setStatusAC(response.data));
		})
}

export const updateUserStatusThunkCreator = (status) => (dispatch) => {
	profileAPI.updateStatus(status)
		.then(response => {
			if (response.data.resultCode === 0) {
				dispatch(setStatusAC(status));
			}
		})
}


export default myProfileReducer;
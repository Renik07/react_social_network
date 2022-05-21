import { usersAPI } from "../../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

let initialState = {
	users: [ ],
	totalUsersCount: 0,
	pageSize: 20,
	currentPage: 1,
	isFetchingPreloader: false,
	isFollowingProgress: false,
	followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
	switch(action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return {...user, followed: true}
					}
					return user;
				})
			};
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return {...user, followed: false}
					}
					return user;
				})
			};
		case SET_USERS:
			return {
				...state,
				users: action.users
			};
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			};
		case SET_USERS_TOTAL_COUNT:
			return {
				...state,
				totalUsersCount: action.totalCount
			};
		case TOGGLE_PRELOADER:
			return {
				...state,
				isFetchingPreloader: action.isFetchingPreloader
			};
		case TOGGLE_FOLLOWING_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFollowingProgress 
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id !== action.userId)
			};
		default:
			return state;
	}
}

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, totalCount});
export const togglePreloader = (isFetchingPreloader) => ({type: TOGGLE_PRELOADER, isFetchingPreloader});
export const toggleFollowingProgress = (isFollowingProgress, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFollowingProgress, userId});

export const getUsersThunkCreator = (currentPage, pageSize) => {
	return (dispatch) => {
		dispatch(togglePreloader(true));
		usersAPI.getUsers(currentPage, pageSize)
			.then(data => {
				dispatch(togglePreloader(false));
				dispatch(setUsers(data.items));
				dispatch(setTotalUsersCount(data.totalCount));
			})
	}
}

export const getUsersPageNumberThunkCreator = (pageNumber, pageSize) => {
	return (dispatch) => {
		dispatch(setCurrentPage(pageNumber));
		dispatch(togglePreloader(true));
		usersAPI.getUsers(pageNumber, pageSize)
			.then(data => {
				dispatch(togglePreloader(false));
				dispatch(setUsers(data.items));
			})
	}
}

export const followThunkCreator = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, userId));
		usersAPI.follow(userId)
			.then(response => {
				if (response.data.resultCode === 0) {
					dispatch(follow(userId))
				}
				dispatch(toggleFollowingProgress(false, userId));
			})
	}
}

export const unfollowThunkCreator = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, userId));
		usersAPI.unfollow(userId)
			.then(response => {
				if (response.data.resultCode === 0) {
					dispatch(unfollow(userId))
				}
				dispatch(toggleFollowingProgress(false, userId));
			})
	}
}

export default usersReducer;
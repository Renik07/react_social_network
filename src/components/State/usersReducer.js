const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER';

let initialState = {
	users: [ ],
	totalUsersCount: 0,
	pageSize: 20,
	currentPage: 1,
	isFetchingPreloader: false
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
		default:
			return state;
	}
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountAC = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, totalCount});
export const togglePreloaderAC = (isFetchingPreloader) => ({type: TOGGLE_PRELOADER, isFetchingPreloader});


export default usersReducer;
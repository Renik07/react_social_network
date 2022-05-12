const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
	users: [
/* 		{id: 1, imageUrl: 'https://i.ibb.co/PMf58J6/user1.jpg', fullName: 'John Doe', profession: 'Graphic Designer', followed: true},
		{id: 2, imageUrl: 'https://i.ibb.co/DKZnZwc/user2.jpg', fullName: 'John Doe', profession: 'Graphic Designer', followed: false},
		{id: 3, imageUrl: 'https://i.ibb.co/4KBJrJz/user3.jpg', fullName: 'John Doe', profession: 'Graphic Designer', followed: true},
		{id: 4, imageUrl: 'https://i.ibb.co/1qgjWC0/user4.jpg', fullName: 'John Doe', profession: 'Graphic Designer', followed: false} */
	]
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
				users: [...state.users, ...action.users]
			}
		default:
			return state;
	}
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});


export default usersReducer;
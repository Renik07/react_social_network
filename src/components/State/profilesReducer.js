const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_PROFILES = 'SET_PROFILES';

let initialState = {
	profiles: [
		/* {id: 1, imageUrl: 'https://i.ibb.co/PMf58J6/user1.jpg', fullName: 'John Doe', profession: 'Graphic Designer', followed: true},
		{id: 2, imageUrl: 'https://i.ibb.co/DKZnZwc/user2.jpg', fullName: 'John Doe', profession: 'Graphic Designer', followed: false},
		{id: 3, imageUrl: 'https://i.ibb.co/4KBJrJz/user3.jpg', fullName: 'John Doe', profession: 'Graphic Designer', followed: true},
		{id: 4, imageUrl: 'https://i.ibb.co/1qgjWC0/user4.jpg', fullName: 'John Doe', profession: 'Graphic Designer', followed: false} */
	]
};

const profilesReducer = (state = initialState, action) => {
	switch(action.type) {
		case FOLLOW:
			return {
				...state,
				profiles: state.profiles.map(profile => {
					if (profile.id === action.profileID) {
						return {...profile, followed: true}
					}
					return profile;
				})
			}
		case UNFOLLOW:
			return {
				...state,
				profiles: state.profiles.map(profile => {
					if (profile.id === action.profileID) {
						return {...profile, followed: false}
					}
					return profile;
				})
			}
		case SET_PROFILES:
			return {
				...state,
				profiles: [...state.profiles, ...action.profiles]
			}
		default:
			return state
	}
}

export const followAC = (profileID) => ({type: FOLLOW, profileID});
export const unfollowAC = (profileID) => ({type: UNFOLLOW, profileID});
export const setProfilesAC = (profiles) => ({type: SET_PROFILES, profiles});

export default profilesReducer;
import * as axios from "axios"

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "41cab573-bf45-48d5-a1f6-6585823397f2"
	}
})

export const usersAPI = {
	/* UsersContainer */
	getUsers(currentPage, pageSize) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => {
				return response.data;
			})
	},
}
export const profileAPI = {
	/* UserProfileContainer */
	getUserProfile(userId) {
		return instance.get(`profile/${userId}`)
	},
	getUserStatus(userId) {
		return instance.get(`profile/status/${userId}`)
	},
	updateStatus(status) {
		return instance.put(`profile/status`, {status: status})
	},
}

export const followAPI = {
	/* Users */
	follow(userId) {
		return instance.post(`follow/${userId}`, {})
	},
	/* Users */
	unfollow(userId) {
		return instance.delete(`follow/${userId}`)
	}
}

export const authAPI = {
	/* HeaderContainer */
	me() {
		return (
			instance.get(`auth/me`)
		)
	}
}
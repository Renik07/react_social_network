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
	/* Users */
	follow(user, propsFollow) {
		return (
			instance.post(`follow/${user.id}`, {})
			.then(response => {
					if (response.data.resultCode === 0) {
						propsFollow(user.id)
					}
				})
		)
	},
	/* Users */
	unfollow(user, propsUnfollow) {
		return (
			instance.delete(`follow/${user.id}`)
				.then(response => {
					if (response.data.resultCode === 0) {
						propsUnfollow(user.id)
					}
				})
		)
	}
}
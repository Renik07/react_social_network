let initialState = {
	myProfile: {
		socialData: [
			{id: "link1", link: "codewars.com/users/Renik07"},
			{id: "link2", link: "github.com/Renik07"},
			{id: "link3", link: "linkedin.com/in/renat-gayazutdinov-07344a65/"}
		]
	}
}

const myProfileReducer = (state = initialState, action) => {

	return state;
}

export default myProfileReducer;
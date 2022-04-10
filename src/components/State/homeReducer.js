/* const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_TEXT_MESSAGE = "UPDATE-TEXT-MESSAGE"; */

let initialState = {
	homePage: {
		socialData: [
			{id: "link1", link: "codewars.com/users/Renik07"},
			{id: "link2", link: "github.com/Renik07"},
			{id: "link3", link: "linkedin.com/in/renat-gayazutdinov-07344a65/"}
		]
	}
}

const homeReducer = (state = initialState, action) => {
/* 	if (action.type === ADD_MESSAGE) {
		let newMsg = {
			id: 5, message: state.newTextMessage
		}
		state.messagesData.push(newMsg);
		state.newTextMessage = "";
	} else if (action.type === UPDATE_TEXT_MESSAGE) {
		state.newTextMessage = action.text;
	} */

	return state;
}

/* export const addMessageActionCreator = () => {
	return {
		type: ADD_MESSAGE
	}
}

export const onNewMessageActionCreator = (text) => {
	return {
		type: UPDATE_TEXT_MESSAGE, text: text
	}
} */

export default homeReducer;
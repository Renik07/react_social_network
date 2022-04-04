const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_TEXT_MESSAGE = "UPDATE-TEXT-MESSAGE";

const messagesReducer = (state, action) => {
	if (action.type === ADD_MESSAGE) {
		let newMsg = {
			id: 5, message: state.newTextMessage
		}
		state.messagesData.push(newMsg);
		state.newTextMessage = "";
	} else if (action.type === UPDATE_TEXT_MESSAGE) {
		state.newTextMessage = action.text;
	}

	return state;
}

export const addMessageActionCreator = () => {
	return {
		type: ADD_MESSAGE
	}
}

export const onNewMessageActionCreator = (text) => {
	return {
		type: UPDATE_TEXT_MESSAGE, text: text
	}
}

export default messagesReducer;
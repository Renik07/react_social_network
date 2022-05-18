const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_TEXT_MESSAGE = "UPDATE-TEXT-MESSAGE";

let initialState = {
	
	dialogsData: [
		{id: "user1", name: "Name 1"},
		{id: "user2", name: "Name 2"},
		{id: "user3", name: "Name 3"},
		{id: "user4", name: "Name 4"},
		{id: "user5", name: "Name 5"},
		{id: "user6", name: "Name 6"},
		{id: "user7", name: "Name 7"}
	],
		messagesData: [
		{id: 1, message: "message 1"},
		{id: 2, message: "message 2"},
		{id: 3, message: "message 3"},
		{id: 4, message: "message 4"}
	],
	newTextMessage: ""
}

const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			let newMsg = {
				id: 5, message: state.newTextMessage
			}
			return {
				...state,
				messagesData: [...state.messagesData, newMsg],
				newTextMessage: ""
			}
		case UPDATE_TEXT_MESSAGE:
			return {
				...state,
				newTextMessage: action.text
			}
	
		default:
			return state;
	}
}

// создаем action для дальнейшего dispatch'a в MessagesContainer'е
export const addMessage = () => ({type: ADD_MESSAGE});

export const updateNewMessage = (text) => ({type: UPDATE_TEXT_MESSAGE, text});

export default messagesReducer;
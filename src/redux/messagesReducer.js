const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
	
	dialogsData: [
		{id: "user1", name: "Name 1"},
		{id: "user2", name: "Name 2"},
		{id: "user3", name: "Name 3"},
		{id: "user4", name: "Name 4"},
		{id: "user5", name: "Name 5"},
		{id: "user6", name: "Name 6"},
		{id: "user7", name: "Name 7"},
		{id: "user8", name: "Name 8"},
		{id: "user9", name: "Name 9"},
		{id: "user10", name: "Name 10"},
	],
		messagesData: [
		{id: 1, message: "Hi"},
		{id: 2, message: "Yes, I am looking for a job right now"}
	]
}

const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			let newMsg = {
				id: 3, message: action.newTextMessage
			}
			return {
				...state,
				messagesData: [...state.messagesData, newMsg]
			}
		default:
			return state;
	}
}

// создаем action для дальнейшего dispatch'a в MessagesContainer'е
export const addMessage = (newTextMessage) => ({type: ADD_MESSAGE, newTextMessage});

export default messagesReducer;
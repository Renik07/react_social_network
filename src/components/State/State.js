let state = {
	messagesPage: {
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
		]
	}
}

export let addMsg = (msg) => {
	let newMsg = {
		id: 5, message: msg
	}
	state.messagesPage.messagesData.push(newMsg);
}

export default state;
import { addMessageActionCreator, onNewMessageActionCreator } from '../State/messagesReducer';
import Messages from './Messages';


const MessagesContainer = (props) => {
	let state = props.store.getState();

	let addMessage = () => {
		props.store.dispatch(addMessageActionCreator());
	}

	let onNewMessage = (text) => {
		props.store.dispatch(onNewMessageActionCreator(text));
	}

	return (<Messages 
		updateNewMessage={onNewMessage} 
		addMessage={addMessage}
		dialogs={state.messagesPage.dialogsData}
		messages={state.messagesPage.messagesData}
		newTextMessage={state.messagesPage.newTextMessage}
		/>)
}

export default MessagesContainer;
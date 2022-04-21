import { connect } from 'react-redux';
import { addMessageActionCreator, onNewMessageActionCreator } from '../State/messagesReducer';
import Messages from './Messages';

let mapStateToProps = (state) => {
	return {
		dialogs: state.messagesPage.dialogsData,
		messages: state.messagesPage.messagesData,
		newTextMessage: state.messagesPage.newTextMessage
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessage: (text) => {dispatch(onNewMessageActionCreator(text));},
		addMessage: () => {dispatch(addMessageActionCreator());}
	}
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
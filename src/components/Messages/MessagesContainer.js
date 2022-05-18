import { connect } from 'react-redux';
import { updateNewMessage, addMessage } from '../redux/messagesReducer';
import Messages from './Messages';

let mapStateToProps = (state) => {
	return {
		dialogs: state.messagesPage.dialogsData,
		messages: state.messagesPage.messagesData,
		newTextMessage: state.messagesPage.newTextMessage
	}
}

const MessagesContainer = connect(mapStateToProps, {updateNewMessage, addMessage})(Messages);

export default MessagesContainer;
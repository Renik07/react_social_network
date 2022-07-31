import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { addMessage } from '../../redux/messagesReducer';
import Messages from './Messages';

let mapStateToProps = (state) => {
	return {
		dialogs: state.messagesPage.dialogsData,
		messages: state.messagesPage.messagesData,
		newTextMessage: state.messagesPage.newTextMessage,
		isAuth: state.auth.isAuth
	}
}

export default compose(
	connect(mapStateToProps, {addMessage}),
	withAuthNavigate
)(Messages);

/* const MessagesContainer = connect(mapStateToProps, {addMessage})(Messages);
export default withAuthNavigate(MessagesContainer); */
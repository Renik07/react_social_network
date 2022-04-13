import StoreContext from '../../StoreContext';
import { addMessageActionCreator, onNewMessageActionCreator } from '../State/messagesReducer';
import Messages from './Messages';


const MessagesContainer = () => {
	return (
		<StoreContext.Consumer> 
			{ 
				(store) => {
					let state = store.getState();

					let addMessage = () => {
						store.dispatch(addMessageActionCreator());
					}
				
					let onNewMessage = (text) => {
						store.dispatch(onNewMessageActionCreator(text));
					}
					return <Messages 
						updateNewMessage={onNewMessage} 
						addMessage={addMessage}
						dialogs={state.messagesPage.dialogsData}
						messages={state.messagesPage.messagesData}
						newTextMessage={state.messagesPage.newTextMessage}
					/>
				}
			}
		</StoreContext.Consumer>
	)
}

export default MessagesContainer;
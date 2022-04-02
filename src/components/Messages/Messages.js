import React from 'react';
import { addMessageActionCreator, onNewMessageActionCreator } from '../State/State';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import style from "./Messages.module.css";


const Messages = (props) => {

	let dialog = props.state.dialogsData.map(d => <DialogItem key={d.id} id={d.id} name={d.name} />);

	let message = props.state.messagesData.map(m => <MessageItem key={m.id} message={m.message} />);

	let newMessage = React.createRef();

	let addMessage = () => {
		props.dispatch(addMessageActionCreator());
	}

	let onNewMessage = () => {
		let text = newMessage.current.value;
		props.dispatch(onNewMessageActionCreator(text));
	}

	return (
		<div className={style.container}>
			<div className={style.messagesTop}>Messages</div>
			<div className={style.dialogsTop}>
				<img className={style.img} src="./images/icon-user1.jpg" alt="avatar user 1" />
				<div>
					<div className={style.titleName}>
						John Doe
					</div>
					<div className={style.onlineStatus}>
					Online
					</div>
				</div>
			</div>
			<div className={style.dialogs}>
				 { dialog }
			</div>
			<div className={style.messages}>
				{ message }
			</div>
			<div className={style.send}>
					<input onChange={onNewMessage} ref={ newMessage } className={style.input} type="text" value={props.state.newTextMessage} placeholder="Type a message here" />
					<button className={style.button} onClick={ addMessage }>Send</button>	
			</div>
		</div>
	)
}

export default Messages;
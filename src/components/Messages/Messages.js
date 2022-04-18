import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import style from "./Messages.module.css";


const Messages = (props) => {

	let dialog = props.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} />);

	let message = props.messages.map(m => <MessageItem key={m.id} message={m.message} />);

	let newMessage = React.createRef();

	let onAddMessage = () => {
		console.log(props.newTextMessage);
		props.addMessage();
	}

	let onNewMessage = () => {
		let text = newMessage.current.value;
		props.updateNewMessage(text);
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
					<input onChange={onNewMessage} ref={ newMessage } className={style.input} type="text" value={props.newTextMessage} placeholder="Type a message here" />
					<button className={style.button} onClick={ onAddMessage }>Send</button>	
			</div>
		</div>
	)
}

export default Messages;
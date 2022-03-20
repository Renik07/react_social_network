import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import style from "./Messages.module.css";


const Messages = (props) => {

	let dialog = props.state.messagesPage.dialogsData.map(d => <DialogItem key={d.id} id={d.id} name={d.name} />);

	let message = props.state.messagesPage.messagesData.map(m => <MessageItem key={m.id} message={m.message} />);

	let newMessage = React.createRef();

	let addMessage = () => {
		props.addMsg(newMessage.current.value);
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
					<input ref={ newMessage } className={style.input} type="text" placeholder="Type a message here" />
					<button className={style.button} onClick={ addMessage }>Send</button>	
			</div>
		</div>
	)
}

export default Messages;
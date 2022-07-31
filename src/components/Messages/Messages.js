import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import style from "./Messages.module.css";
import MessagesForm from '../forms/MessagesForm/MessagesForm';
import userAvatar from '../../assets/images/avatar.png';


const Messages = (props) => {

	let dialogs = props.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} />);

	let messages = props.messages.map(m => <MessageItem key={m.id} message={m.message} isAuth={props.isAuth} />);

	return (
		<div className={style.container}>
			<div className={style.messagesTop}>Messages</div>
			<div className={style.dialogsTop}>
				<img className={style.img} src={userAvatar} alt="" />
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
				 { dialogs }
			</div>
			<div className={style.messages}>
				<div className={style.messageUser}>Hello friend!</div>
				<div className={style.messageUser}>How a u?</div>
				<div className={style.messageUser}>I have a job for u</div>
				<div className={style.messageUser}>You're interested?</div>
				{ messages }
			</div>
			<MessagesForm {...props}/>
		</div>
	)
}

export default Messages;
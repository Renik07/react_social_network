import { NavLink } from "react-router-dom";
import style from "./Messages.module.css";

const DialogItem = (props) => {
	const id = `/messages/${props.id}`;
	return (
		<div className={style.dialog}>
			<NavLink to={id} className={style.dialog}>{props.name}</NavLink>
		</div>
	)
}

const MessageItem = (props) => {
	return (
		<div className={style.message}>{props.message}</div>
	)
}



const Messages = () => {
	return (
		<div className={style.container}>
			<div className={style.messagesTop}>Messages</div>
			<div className={style.dialogsTop}>John Doe</div>
			<div className={style.dialogs}>
				<DialogItem name="Name 1" id="user1" />
				<DialogItem name="Name 2" id="user2" />
				<DialogItem name="Name 3" id="user3" />
				<DialogItem name="Name 4" id="user4" />
			</div>
			<div className={style.messages}>
				<MessageItem message="message 1" />
				<MessageItem message="message 2" />
				<MessageItem message="message 3" />
				<MessageItem message="message 4" />
			</div>
			<div className={style.dialogsBottom}>Type a message here</div>
		</div>
	)
}

export default Messages;
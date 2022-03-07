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

	let dialogsData = [
		{id: "user1", name: "Name 1"},
		{id: "user2", name: "Name 2"},
		{id: "user3", name: "Name 3"},
		{id: "user4", name: "Name 4"}
	];

	let dialog = dialogsData.map(d => <DialogItem id={d.id} name={d.name} />);

	let messagesData = [
		{id: 1, message: "message 1"},
		{id: 2, message: "message 2"},
		{id: 3, message: "message 3"},
		{id: 4, message: "message 4"}
	]

	let message = messagesData.map(m => <MessageItem message={m.message} />);

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
					<input className={style.input} type="text" placeholder="Type a message here" />
					<button className={style.button}>Send</button>	
			</div>
		</div>
	)
}

export default Messages;
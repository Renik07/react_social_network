import { NavLink } from "react-router-dom";
import style from "./Messages.module.css";

const Messages = () => {
	return (
		<div className={style.container}>
			<div className={style.messagesTop}>Messages</div>
			<div className={style.dialogsTop}>John Doe</div>
			<div className={style.dialogs}>
				<div className={style.dialog}>
					<NavLink to="/messages/user1" className={style.dialog}>Name 1</NavLink>
				</div>
				<div className={style.dialog}>
					<NavLink to="/messages/user2" className={style.dialog}>Name 2</NavLink>
				</div>
				<div className={style.dialog}>
					<NavLink to="/messages/user3" className={style.dialog}>Name 3</NavLink>
				</div>
				<div className={style.dialog}>
					<NavLink to="/messages/user4" className={style.dialog}>Name 4</NavLink>
				</div>
			</div>
			<div className={style.messages}>
				<div className={style.message}>message 1</div>
				<div className={style.message}>message 2</div>
				<div className={style.message}>message 3</div>
				<div className={style.message}>message 4</div>
			</div>
			<div className={style.dialogsBottom}>Type a message here</div>
		</div>
	)
}

export default Messages;
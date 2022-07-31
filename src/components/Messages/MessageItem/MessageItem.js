import style from "./../Messages.module.css";

const MessageItem = (props) => {
	return (
		<div className={style.messageItem}>
			<div className={props.isAuth ? style.messageMe : style.messageUser}>{props.message}</div>
		</div>
	)
}

export default MessageItem;
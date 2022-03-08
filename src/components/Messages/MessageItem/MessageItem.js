import style from "./../Messages.module.css";

const MessageItem = (props) => {
	return (
		<div className={style.message}>{props.message}</div>
	)
}

export default MessageItem;
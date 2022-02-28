import style from "./Messages.module.css";

const Messages = () => {
	return (
		<div className={style.container}>
			<div className={style.dialogs}>
				<div className={style.dialog}>Name 1</div>
				<div className={style.dialog}>Name 2</div>
				<div className={style.dialog}>Name 3</div>
				<div className={style.dialog}>Name 4</div>
			</div>
			<div className={style.messages}>
				<div className={style.message}>message 1</div>
				<div className={style.message}>message 2</div>
				<div className={style.message}>message 3</div>
				<div className={style.message}>message 4</div>
			</div>
		</div>
	)
}

export default Messages;
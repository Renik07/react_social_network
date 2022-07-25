import style from "./Modal.module.css";

const Modal = ({active, setActive, children}) => {
	return (
		<section className={active ? style.modalActive : style.modal} onClick={() => setActive(false)}>
			<div className={style.modalContent} onClick={e => e.stopPropagation()}>
				{ children }
			</div>
		</section>
	)
}

export default Modal;
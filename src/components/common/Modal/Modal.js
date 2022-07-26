import style from "./Modal.module.css";

const Modal = ({active, setActive, children}) => {
	return (
		<section className={active ? style.modalActive : style.modal} onClick={() => setActive(false)}>
			<div className={style.modalWrapper} onClick={e => e.stopPropagation()}>
				<div className={style.modalContent}>
					{ children }
				</div>
				<div className={style.close} onClick={() => setActive(false)}>&#x2715;</div>
			</div>
		</section>
	)
}

export default Modal;
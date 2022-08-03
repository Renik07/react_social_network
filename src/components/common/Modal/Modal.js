import style from "./Modal.module.css";

const Modal = ({active, setActive, children}) => {
	return (
		<section className={style.modalWindow}>
			<div className={active ? style.outerBlock : style.outer} onClick={e => e.stopPropagation()}>
				<div className={style.box}>
					<div className={style.inner}>
						<div className={style.content}>
							{ children }
							<div className={style.close} onClick={() => setActive(false)}>&#x2715;</div>
						</div>
					</div>
					<div className={style.overlay} onClick={() => setActive(false)}></div>
				</div>
			</div>
		</section>
	)
}

export default Modal;
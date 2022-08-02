import Modal from "./Modal";
import style from "./Modal.module.css";
import { useState } from "react";
import statistics from '../../../assets/images/Modal/statistics.png';

const ModalButton = ({component, nameButton, clsName}) => {
	const [modalActive, setModalActive] = useState(false);
	return (
		<div>
			<button className={`${style[clsName]}`} onClick={() => setModalActive(true)}>
				<img src={statistics} alt="" />
				{ nameButton }
			</button>
			<Modal active={modalActive} setActive={setModalActive}>
				{ component }
			</Modal>
		</div>
	)
}

export default ModalButton;
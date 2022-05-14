import style from './preloader.module.css';
import preloader from '../../../assets/images/preloader.svg';

const Preloader = () => {
	return(
		<div className={style.preloaderWrapper}>
			<img src={ preloader } alt="" />
	</div> 
	)
}

export default Preloader;
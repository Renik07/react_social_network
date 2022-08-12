import style from "./PageNotFound.module.css";
import image from '../../../assets/images/PageNotFound/icons.png';

const PageNotFound = () => {
	return(
		<section className={style.pageNotFound}>
			<div className={style.block}>
				<div className={style.containerBlock}>
					<div className={style.desc}>
						<h2 className={style.title}>Page not found</h2>
						<p className={style.text}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean felis massa, commodo sed fringilla id, dignissim ut eros. Aliquam at lacinia diam, eget scelerisque massa. Nunc ut porta ante. Praesent blandit, neque nec hendrerit luctus, sem urna imperdiet ligula, eu egestas purus massa dictum arcu. Integer cursus enim nec magna dapibus laoreet. Donec egestas fringilla risus quis volutpat. Aliquam semper massa ut sollicitudin consectetur. Suspendisse ac iaculis ligula. Duis ut velit id nisi vulputate dapibus.
						</p>
					</div>
					<img src={image} alt="" />
				</div>
			</div>
			<div className={style.map}>
				<div className={style.containerMap}>
					<h3 className={style.mapTitle}>404</h3>
				</div>
			</div>
		</section>
	)
}

export default PageNotFound;
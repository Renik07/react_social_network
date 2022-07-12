import style from "./MostViewed.module.css";
import { NavLink } from "react-router-dom";

const MostViewed = () => {
	return(
		<section className={style.mostViewed}>
			<div className={style.header}>
				<h3>Most Viewed This Week</h3>
			</div>
			<ul className={style.list}>
				<li className={style.item}>
					<div className={style.blockText}>
						<NavLink className={style.link} to={`/topjob`}>
							<h4>Junior Seo Designer</h4>
						</NavLink>
						<div className={style.desc}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit..
						</div>
					</div>
					<div className={style.price}>$20 / hr</div>
				</li>
				<li className={style.item}>
					<div className={style.blockText}>
						<NavLink className={style.link} to={`/topjob`}>
							<h4>Senior PHP Designer</h4>
						</NavLink>
						<div className={style.desc}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit..
						</div>
					</div>
					<div className={style.price}>$45 / hr</div>
				</li>
				<li className={style.item}>
					<div className={style.blockText}>
						<NavLink className={style.link} to={`/topjob`}>
							<h4>Senior Developer Designer</h4>
						</NavLink>
						<div className={style.desc}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit..
						</div>
					</div>
					<div className={style.price}>$35 / hr</div>
				</li>
			</ul>
		</section>
	)
}

export default MostViewed;
import style from "./TopJobs.module.css";
import { NavLink } from "react-router-dom";

const TopJobs = () => {
	return(
		<section className={style.topJobs}>
			<div className={style.header}>
				<h3>Top Jobs</h3>
			</div>
			<ul className={style.list}>
				<li className={style.item}>
					<div className={style.blockText}>
						<NavLink className={style.link} to={`/topjob`}>
							<h4>Senior Product Designer</h4>
						</NavLink>
						<div className={style.desc}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit..
						</div>
					</div>
					<div className={style.price}>$55 / hr</div>
				</li>
				<li className={style.item}>
					<div className={style.blockText}>
						<NavLink className={style.link} to={`/topjob`}>
							<h4>Senior UI / UX Designer</h4>
						</NavLink>
						<div className={style.desc}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit..
						</div>
					</div>
					<div className={style.price}>$40 / hr</div>
				</li>
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

export default TopJobs;
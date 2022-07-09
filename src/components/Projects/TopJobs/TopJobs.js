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
					<NavLink className={style.link} to={`/topjob`}>
						<h4>Senior Product Designer</h4>
						<div className={style.price}>$25 / hr</div>
					</NavLink>
					<div className={style.desc}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit..
					</div>
				</li>
				<li className={style.item}>
					<NavLink className={style.link} to={`/topjob`}>
						<h4>Senior Product Designer</h4>
						<div className={style.price}>$25 / hr</div>
					</NavLink>
					<div className={style.desc}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit..
					</div>
				</li>
				<li className={style.item}>
					<NavLink className={style.link} to={`/topjob`}>
						<h4>Senior Product Designer</h4>
						<div className={style.price}>$25 / hr</div>
					</NavLink>
					<div className={style.desc}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit..
					</div>
				</li>
				<li className={style.item}>
					<NavLink className={style.link} to={`/topjob`}>
						<h4>Senior Product Designer</h4>
						<div className={style.price}>$25 / hr</div>
					</NavLink>
					<div className={style.desc}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit..
					</div>
				</li>
			</ul>
		</section>
	)
}

export default TopJobs;
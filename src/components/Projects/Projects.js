import Feed from "../Posts/Feed/Feed";
import Banner from "./Banner/Banner";
import Filters from "./Filters/Filters";
import style from "./Projects.module.css";
import TopJobs from "./TopJobs/TopJobs";

const Projects = () => {
	return(
		<section className={style.projects}>
			<div className={style.container}>
				<div className={style.inputWrapper}>
					<input className={style.inputSearch} placeholder="Search keywords"/>
					<button className={style.button}>Search</button>
				</div>
				<div className={style.wrapper}>
					<div className={style.column1}>
						<Filters />
					</div>
					<div className={style.column2}>
						<Feed />
					</div>
					<div className={style.column3}>
						<Banner />
						<TopJobs />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Projects;
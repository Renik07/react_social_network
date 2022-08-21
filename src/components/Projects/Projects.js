import Banner from "./Banner/Banner";
import Filters from "./Filters/Filters";
import MostViewed from "./MostViewed/MostViewed";
import Project from "./Project/Project";
import style from "./Projects.module.css";
import TopJobs from "./TopJobs/TopJobs";

const Projects = (props) => {
	const projects = props.projects.map((project, i) => {
		return <Project key={i} project={project} />
	})
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
						{ projects }
					</div>
					<div className={style.column3}>
						<Banner />
						<TopJobs />
						<MostViewed />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Projects;
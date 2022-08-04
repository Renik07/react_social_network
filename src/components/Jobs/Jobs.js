import { compose } from "redux";
import { withAuthNavigate } from "../../hoc/withAuthNavigate";
import Feed from "../Posts/Feed/Feed";
import Banner from "../Projects/Banner/Banner";
import Filters from "../Projects/Filters/Filters";
import MostViewed from "../Projects/MostViewed/MostViewed";
import TopJobs from "../Projects/TopJobs/TopJobs";
import style from "./Jobs.module.css";

const Jobs = () => {
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
						<MostViewed />
					</div>
				</div>
			</div>
		</section>
	)
}

export default compose(withAuthNavigate)(Jobs);

/* export default Jobs; */


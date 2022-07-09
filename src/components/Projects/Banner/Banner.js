import style from "./Banner.module.css";
import banner from "../../../assets/images/Banner/banner.png";
import { NavLink } from "react-router-dom";

const Banner = () => {
	return(
		<section className={style.banner}>
			<div className={style.body}>
				<img src={banner} alt="" />
				<h3>Track Time on Workwise</h3>
				<p>Pay only for the Hours worked</p>
			</div>
			<NavLink className={style.link} to={`/banner`}>Learn More</NavLink>
		</section>
	)
}

export default Banner;
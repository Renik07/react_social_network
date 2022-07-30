import Rating from "../../common/Rating/Rating";
import style from "./AboutUser.module.css";

const AboutUser = () => {

	return (
		<section className={style.aboutUser}>
			<h3 className={style.title}>About the Client</h3>
			<div className={style.block}>
				<h4 className={style.ratingTitle}>Payment Method</h4>
				<div className={style.ratingSubtitle}>Verified</div>
				<Rating />
			</div>
			<div className={style.block}>
				<h4 className={style.subtitle}>Saint-Petersburg</h4>
				<div className={style.text}>SKS Nagar, Ludhiana 1 AM</div>
			</div>
			<div className={style.block}>
				<h4 className={style.subtitle}>20 Projects Posted  |  15 Jobs Posted</h4>
				<div className={style.text}>85% Hire Rate,  15% Open Jobs</div>
			</div>
			<div className={style.block}>
				<h4 className={style.subtitle}>Member Since</h4>
				<div className={style.text}>August 24, 2017</div>
			</div>
		</section>
	)
}

export default AboutUser;
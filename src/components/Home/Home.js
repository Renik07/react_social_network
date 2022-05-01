import Follow from "./Follow/Follow";
import Friends from "./Friends/Friends";
import style from "./Home.module.css";
import SocialLinks from "./SocialLinks/SocialLinks";

const Home = (props) => {
	return(
		<div className={style.container}>
			<div className={style.column1}>
				<Follow />
				<SocialLinks social = {props.homePage.homePage} />
			</div>
			<div className={style.column2}>
				<div className={style.user}>
					<h2 className={style.name}>Renat G.</h2>
					<h3 className={style.profession}>Frontend developer (React developer)</h3>
				</div>
			</div>
			<div className={style.column3}>
				<Friends />
			</div>
		</div>
	)
}

export default Home;
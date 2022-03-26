import Follow from "./Follow/Follow";
import Friends from "./Friends/Friends";
import style from "./Home.module.css";
import SocialLinks from "./SocialLinks/SocialLinks";

const Home = (props) => {
	
	return(
		<div className={style.container}>
			<div className={style.column1}>
				<Follow />
				{<SocialLinks state = {props.state} />}
			</div>
			<div className={style.column2}></div>
			<div className={style.column3}>
				<Friends />
			</div>
		</div>
	)
}

export default Home;
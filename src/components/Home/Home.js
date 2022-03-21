import Follow from "./Follow/Follow";
import Friends from "./Friends/Friends";
import style from "./Home.module.css";

const Home = () => {
	return(
		<div className={style.container}>
			<div className={style.column1}>
				<Follow />
			</div>
			<div className={style.column2}></div>
			<div className={style.column3}>
				<Friends />
			</div>
		</div>
	)
}

export default Home;
import Follow from "./Follow/Follow";
import style from "./Home.module.css";

const Home = () => {
	return(
		<div className={style.container}>
			{/* <Follow /> */}
			<div className={style.column1}></div>
			<div className={style.column2}></div>
			<div className={style.column3}></div>
		</div>
	)
}

export default Home;
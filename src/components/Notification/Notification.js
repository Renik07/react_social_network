import style from "./Notification.module.css";
import userAvatar from '../../assets/images/avatar.png';
import Banner from "../Projects/Banner/Banner";
import MostViewedPeople from "./MostViewedPeople/MostViewedPeople";
import { compose } from "redux";
import { withAuthNavigate } from "../../hoc/withAuthNavigate";

const Notification = () => {
	return(
		<section className={style.notification}>
			<div className={style.wrapper}>
				<div className={style.column1}>
					<div className={style.list}>
						<div className={style.item}>
							<img className={style.avatar} src={userAvatar} alt="" />
							<div className={style.body}> 
								<h3 className={style.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
								<div className={style.details}>
									<div className={style.likes}>Vote 150</div>
									<div className={style.comments}>Comments 15</div>
									<div className={style.views}>Views 50</div>
								</div>
								<div className={style.footer}>
									<div className={style.tags}>
										<div className={style.tag}>Work</div>
										<div className={style.tag}>JS</div>
										<div className={style.tag}>Design</div>
									</div>
									<div className={style.date}>3 min ago</div>
								</div>
							</div>
						</div>
						<div className={style.item}>
							<img className={style.avatar} src={userAvatar} alt="" />
							<div className={style.body}> 
								<h3 className={style.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
								<div className={style.details}>
									<div className={style.likes}>Vote 150</div>
									<div className={style.comments}>Comments 15</div>
									<div className={style.views}>Views 50</div>
								</div>
								<div className={style.footer}>
									<div className={style.tags}>
										<div className={style.tag}>Work</div>
										<div className={style.tag}>JS</div>
										<div className={style.tag}>Design</div>
									</div>
									<div className={style.date}>3 min ago</div>
								</div>
							</div>
						</div>
						<div className={style.item}>
							<img className={style.avatar} src={userAvatar} alt="" />
							<div className={style.body}> 
								<h3 className={style.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
								<div className={style.details}>
									<div className={style.likes}>Vote 150</div>
									<div className={style.comments}>Comments 15</div>
									<div className={style.views}>Views 50</div>
								</div>
								<div className={style.footer}>
									<div className={style.tags}>
										<div className={style.tag}>Work</div>
										<div className={style.tag}>JS</div>
										<div className={style.tag}>Design</div>
									</div>
									<div className={style.date}>3 min ago</div>
								</div>
							</div>
						</div>
						<div className={style.item}>
							<img className={style.avatar} src={userAvatar} alt="" />
							<div className={style.body}> 
								<h3 className={style.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
								<div className={style.details}>
									<div className={style.likes}>Vote 150</div>
									<div className={style.comments}>Comments 15</div>
									<div className={style.views}>Views 50</div>
								</div>
								<div className={style.footer}>
									<div className={style.tags}>
										<div className={style.tag}>Work</div>
										<div className={style.tag}>JS</div>
										<div className={style.tag}>Design</div>
									</div>
									<div className={style.date}>3 min ago</div>
								</div>
							</div>
						</div>
						<div className={style.item}>
							<img className={style.avatar} src={userAvatar} alt="" />
							<div className={style.body}> 
								<h3 className={style.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
								<div className={style.details}>
									<div className={style.likes}>Vote 150</div>
									<div className={style.comments}>Comments 15</div>
									<div className={style.views}>Views 50</div>
								</div>
								<div className={style.footer}>
									<div className={style.tags}>
										<div className={style.tag}>Work</div>
										<div className={style.tag}>JS</div>
										<div className={style.tag}>Design</div>
									</div>
									<div className={style.date}>3 min ago</div>
								</div>
							</div>
						</div>
						<div className={style.item}>
							<img className={style.avatar} src={userAvatar} alt="" />
							<div className={style.body}> 
								<h3 className={style.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
								<div className={style.details}>
									<div className={style.likes}>Vote 150</div>
									<div className={style.comments}>Comments 15</div>
									<div className={style.views}>Views 50</div>
								</div>
								<div className={style.footer}>
									<div className={style.tags}>
										<div className={style.tag}>Work</div>
										<div className={style.tag}>JS</div>
										<div className={style.tag}>Design</div>
									</div>
									<div className={style.date}>3 min ago</div>
								</div>
							</div>
						</div>
						<div className={style.item}>
							<img className={style.avatar} src={userAvatar} alt="" />
							<div className={style.body}> 
								<h3 className={style.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
								<div className={style.details}>
									<div className={style.likes}>Vote 150</div>
									<div className={style.comments}>Comments 15</div>
									<div className={style.views}>Views 50</div>
								</div>
								<div className={style.footer}>
									<div className={style.tags}>
										<div className={style.tag}>Work</div>
										<div className={style.tag}>JS</div>
										<div className={style.tag}>Design</div>
									</div>
									<div className={style.date}>3 min ago</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={style.column2}>
					<Banner />
					<MostViewedPeople />
				</div>
			</div>
		</section>
	)
}

export default compose(withAuthNavigate)(Notification);

/* export default Notification; */
import style from "./Reviews.module.css";
import star from "../../../assets/images/Reviews/star.png";
import userPhoto from '../../../assets/images/avatar.png';

const Reviews = () => {
  return (
    <div className={style.reviews}>
			<div className={style.card}>
				<h3 className={style.title}>Reviews</h3>
			</div>
      <div className={style.card}>
				<div className={style.header}>
					<img className={style.avatar} src={userPhoto} alt="" />
						<div className={style.user}>
							<h4 className={style.name}>Rock William</h4>
							<div className={style.categoryLocation}>
								<div className={style.category}>Epic Coder</div>
								<div className={style.location}>USA</div>
							</div>
						</div>
				</div>
				<div className={style.body}>
					<div className={style.review}>
						<div className={style.stars}>
							<img src={star} alt=''/>
							<img src={star} alt=''/>
							<img src={star} alt=''/>
							<img src={star} alt=''/>
							<img src={star} alt=''/>
						</div>
						<div className={style.rating}>5.0 of 5</div>
					</div>
					<p className={style.desc}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus mi et porttitor ultrices
					</p>
				</div>
      </div>
      <div className={style.card}>
				<div className={style.header}>
					<img className={style.avatar} src={userPhoto} alt="" />
						<div className={style.user}>
							<h4 className={style.name}>Jassica William</h4>
							<div className={style.categoryLocation}>
								<div className={style.category}>Epic Coder</div>
								<div className={style.location}>France</div>
							</div>
						</div>
				</div>
				<div className={style.body}>
					<div className={style.review}>
						<div className={style.stars}>
							<img src={star} alt=''/>
							<img src={star} alt=''/>
							<img src={star} alt=''/>
							<img src={star} alt=''/>
							<img src={star} alt=''/>
						</div>
						<div className={style.rating}>5.0 of 5</div>
					</div>
					<p className={style.desc}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus mi et porttitor ultrices
					</p>
				</div>
      </div>
      <div className={style.card}>
				<div className={style.header}>
					<img className={style.avatar} src={userPhoto} alt="" />
						<div className={style.user}>
							<h4 className={style.name}>Will William</h4>
							<div className={style.categoryLocation}>
								<div className={style.category}>Epic Coder</div>
								<div className={style.location}>Australia</div>
							</div>
						</div>
				</div>
				<div className={style.body}>
					<div className={style.review}>
						<div className={style.stars}>
							<img src={star} alt=''/>
							<img src={star} alt=''/>
							<img src={star} alt=''/>
							<img src={star} alt=''/>
						</div>
						<div className={style.rating}>4.0 of 5</div>
					</div>
					<p className={style.desc}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus mi et porttitor ultrices
					</p>
				</div>
      </div>
    </div>
  );
};

export default Reviews;

import style from "./Statistics.module.css";
import sent from '../../../assets/images/Statistics/sent.png';
import totalIncome from '../../../assets/images/Statistics/total-income.png';
import totalProjects from '../../../assets/images/Statistics/total-projects.png';
import widthraw from '../../../assets/images/Statistics/widthraw.png';
import progressStatus from '../../../assets/images/Statistics/progress-status.png';

const Statistics = () => {

	return (
		<div className={style.Statistics}>
			<h2 className={style.title}>Statistics</h2>
			<div className={style.body}>
				<div className={style.status}>
					<div className={style.block}>
						<div className={style.header}>
							<img className={style.icon} src={totalIncome} alt="" />
							<div className={style.titles}>
								<h5 className={style.total}>$5,145</h5>
								<h4 className={style.blockTitle}>Total Income</h4>
							</div>
						</div>
						<p className={style.desc}>
							Lorem ipsum dolor sit amet, consectetur adipiscing.
						</p>
					</div>
					<div className={style.block}>
						<div className={style.header}>
							<img className={style.icon} src={widthraw} alt="" />
							<div className={style.titles}>
								<h5 className={style.total}>$4,745</h5>
								<h4 className={style.blockTitle}>Widthraw</h4>
							</div>
						</div>
						<p className={style.desc}>
							Lorem ipsum dolor sit amet, consectetur adipiscing.
						</p>
					</div>
					<div className={style.block}>
						<div className={style.header}>
							<img className={style.icon} src={sent} alt="" />
							<div className={style.titles}>
								<h5 className={style.total}>$1,145</h5>
								<h4 className={style.blockTitle}>Sent</h4>
							</div>
						</div>
						<p className={style.desc}>
							Lorem ipsum dolor sit amet, consectetur adipiscing.
						</p>
					</div>
					<div className={style.block}>
						<div className={style.header}>
							<img className={style.icon} src={totalProjects} alt="" />
							<div className={style.titles}>
								<h5 className={style.total}>130</h5>
								<h4 className={style.blockTitle}>Total Projects</h4>
							</div>
						</div>
						<p className={style.desc}>
							Lorem ipsum dolor sit amet, consectetur adipiscing.
						</p>
					</div>
				</div>
				<h3 className={style.subtitle}>Work Status - Last Months Working Status</h3>
				<picture className={style.progressImage}>
					<img src={progressStatus} alt="" />
				</picture>
			</div>
		</div>
	)
}

export default Statistics;
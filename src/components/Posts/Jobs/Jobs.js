import style from './Jobs.module.css';

const Jobs = () => {
	return(
		<div className={style.jobs}>
			<div className={style.card}>
				<h3 className={style.title}>Senior Wordpress Developer</h3>
				<div className={style.date}>Posted on 30 August 2018</div>
				<div className={style.buttons}>
					<div className={style.candidates}>
						<div className={style.num}>3</div>
						<div className={style.text}>Candidates</div>
					</div>
					<div className={style.edit}></div>
					<div className={style.delete}></div>
				</div>
			</div>
			<div className={style.card}>
				<h3 className={style.title}>Senior Php Developer</h3>
				<div className={style.date}>Posted on 29 August 2018</div>
				<div className={style.buttons}>
					<div className={style.candidates}>
						<div className={style.num}>2</div>
						<div className={style.text}>Candidates</div>
					</div>
					<div className={style.edit}></div>
					<div className={style.delete}></div>
				</div>
			</div>
			<div className={style.card}>
				<h3 className={style.title}>Senior UI UX Designer</h3>
				<div className={style.date}>Posted on 5 June 2018</div>
				<div className={style.buttons}>
					<div className={style.candidates}>
						<div className={style.num}>3</div>
						<div className={style.text}>Candidates</div>
					</div>
					<div className={style.edit}></div>
					<div className={style.delete}></div>
				</div>
			</div>
		</div>
	)
}

export default Jobs;
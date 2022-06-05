import style from './Portfolio.module.css';

const Portfolio = () => {
	return(
		<div className={style.portfolio}>
			<div className={style.card}>
				<div className={style.header}>
					<h3 className={style.title}>Portfolio</h3>
					<button className={style.button}>Create Portfolio</button>
				</div>
				<div className={style.body}>
					<a className={style.item} href=''>
						<img src='' alt='' />
					</a>
					<a className={style.item} href=''>
						<img src='' alt='' />
					</a>
					<a className={style.item} href=''>
						<img src='' alt='' />
					</a>
					<a className={style.item} href=''>
						<img src='' alt='' />
					</a>
					<a className={style.item} href=''>
						<img src='' alt='' />
					</a>
					<a className={style.item} href=''>
						<img src='' alt='' />
					</a>
					<a className={style.item} href=''>
						<img src='' alt='' />
					</a>
					<a className={style.item} href=''>
						<img src='' alt='' />
					</a>
					<a className={style.item} href=''>
						<img src='' alt='' />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Portfolio;
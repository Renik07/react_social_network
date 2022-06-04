import style from './Info.module.css';

const Info = () => {
	return(
		<div className={style.info}>
			<div className={style.card}>
				<h3 className={style.title}>Overview</h3>
				<p className={style.text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. Nunc eu augue nec arcu efficitur faucibus. Aliquam accumsan ac magna convallis bibendum. Quisque laoreet augue eget augue fermentum scelerisque. Vivamus dignissim mollis est dictum blandit. Nam porta auctor neque sed congue. Nullam rutrum eget ex at maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vestibulum lorem.
				</p>
			</div>
			<div className={style.card}>
			<h3 className={style.title}>Experience</h3>
			<div className={style.professions}>
				<div className={style.profession}>
					<h4 className={style.subtitle}>Web designer</h4>
					<p className={style.text}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. 
					</p>
				</div>
				<div className={style.profession}>
					<h4 className={style.subtitle}>UI / UX Designer</h4>
					<p className={style.text}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id.
					</p>
				</div>
				<div className={style.profession}>
					<h4 className={style.subtitle}>PHP developer</h4>
					<p className={style.text}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. 
					</p>
				</div>
			</div>
			</div>
			<div className={style.card}>
				<h3 className={style.title}>Education</h3>
				<div className={style.educations}>
					<div className={style.education}>
						<h4 className={style.subtitle}>Master of Computer Science</h4>
						<h5 className={style.years}>2015-2017</h5>
						<p className={style.text}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. 
						</p>
					</div>
					<div className={style.education}>
						<h4 className={style.subtitle}>Frontend-developer</h4>
						<h5 className={style.years}>2017-2019</h5>
						<p className={style.text}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. 
						</p>
					</div>
				</div>
			</div>
			<div className={style.card}>
				<h3 className={style.title}>Location</h3>
				<h4 className={style.subtitle}>India</h4>
				<p className={style.text}>
					151/4 BT Chownk, Delhi
				</p>
			</div>
			<div className={style.card}>
				<h3 className={style.title}>Skills</h3>
				<div className={style.skills}>
					<div className={style.skill}>HTML</div>
					<div className={style.skill}>PHP</div>
					<div className={style.skill}>CSS</div>
					<div className={style.skill}>Javascript</div>
					<div className={style.skill}>Wordpress</div>
					<div className={style.skill}>Figma</div>
					<div className={style.skill}>React</div>
					<div className={style.skill}>Illustrator</div>
				</div>
			</div>
		</div>
	)
}

export default Info;
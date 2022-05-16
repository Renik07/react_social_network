import style from "./SocialLink.module.css";

const SocialLink = (props) => {
	return(
		<div className={style.socialLink}>
			<div className={style.img}>
				<img src="asdasd.png" alt=""/>
			</div>
			<a href="#d" className={style.name}>
				{props.link}
			</a>
		</div>
	)
}

export default SocialLink;
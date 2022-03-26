import SocialLink from "./SocialLink/SocialLink";
import style from "./SocialLinks.module.css";

const SocialLinks = (props) => {
	
	let social = props.state.homePage.socialData.map(s => <SocialLink link={s.link} />)
	return(
		<div className={style.socialLinks}>
			{ social }
		</div>
	)
}

export default SocialLinks;
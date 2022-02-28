import Link from "./Link/Link";
import style from "./Links.module.css";

const Links = () => {
	return(
		<nav className={style.nav}>
			<Link title="Home" url="home" img="home"/>
			<Link title="Companies" url="companies" img="companies"/>
			<Link title="Projects" url="projects" img="projects"/>
			<Link title="Profiles" url="profiles" img="profiles"/>
			<Link title="Jobs" url="jobs" img="jobs"/>
			<Link title="Messages" url="messages" img="messages"/>
			<Link title="Notification" url="notification" img="notification"/>
			{/* <a className={style.link} href='#dfdf'>
				<img src="./images/icon-home.png" alt="home" />
				<div>Home</div>
			</a>
			<a className={style.link} href='#dfdf'>
				<img src="./images/icon-companies.png" alt="home" />
				<div>Companies</div>
			</a>
			<a className={style.link} href='#dfdf'>
				<img src="./images/icon-projects.png" alt="home" />
				<div>Projects</div>
			</a>
			<a className={style.link} href='#dfdf'>
				<img src="./images/icon-profiles.png" alt="home" />
				<div>Profiles</div>
			</a>
			<a className={style.link} href='#dfdf'>
				<img src="./images/icon-jobs.png" alt="home" />
				<div>Jobs</div>
			</a>
			<a className={style.link} href='#dfdf'>
				<img src="./images/icon-messages.png" alt="home" />
				<div>Messages</div>
			</a>
			<a className={style.link} href='#dfdf'>
				<img src="./images/icon-notification.png" alt="home" />
				<div>Notification</div>
			</a> */}
		</nav>
	)
}

export default Links;
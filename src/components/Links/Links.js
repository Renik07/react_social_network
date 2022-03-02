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
		</nav>
	)
}

export default Links;
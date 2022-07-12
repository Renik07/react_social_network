import { NavLink } from "react-router-dom";
import style from "./Links.module.css";
import iconCompanies from '../../../assets/images/iconCompanies.png';
import iconProfile from '../../../assets/images/iconProfile.png';
import iconJobs from '../../../assets/images/iconJobs.png';
import iconMessages from '../../../assets/images/iconMessages.png';
import iconNotification from '../../../assets/images/iconNotification.png';
import iconProfiles from '../../../assets/images/iconProfiles.png';
import iconProjects from '../../../assets/images/iconProjects.png';

const Links = (props) => {

	const classActive = ({isActive}) => isActive ? style.active : style.link;

	return(
		<nav className={style.nav}>
			<NavLink className = { classActive } to='/profile'>
				<img src={ iconProfile } alt='My profile' />
				<div>My profile</div>
			</NavLink>
			<NavLink className = { classActive } to='/users'>
				<img src={ iconProfiles } alt='Profiles' />
				<div>Profiles</div>
			</NavLink>
			<NavLink className = { classActive } to='/projects'>
				<img src={ iconProjects } alt='Projects' />
				<div>Projects</div>
			</NavLink>
			<NavLink className = { classActive } to='/companies'>
				<img src={ iconCompanies } alt='Companies' />
				<div>Companies</div>
			</NavLink>
			<NavLink className = { classActive } to='/jobs'>
				<img src={ iconJobs } alt='Jobs' />
				<div>Jobs</div>
			</NavLink>
			<NavLink className = { classActive } to='/messages'>
				<img src={ iconMessages } alt='Messages' />
				<div>Messages</div>
			</NavLink>
			<NavLink className = { classActive } to='/notification'>
				<img src={ iconNotification } alt='Notification' />
				<div>Notification</div>
			</NavLink>
		</nav>
	)
}

export default Links;
import style from '../Users.module.css';
import userAvatar from '../../../assets/images/avatar.png';
import { NavLink } from 'react-router-dom';

const User = (props) => {
	const showHideButtons = (userFollowed, userId) => {
		if (props.isAuth) {
			return <> { userFollowed 
					? <button disabled={props.followingInProgress.some(id => id === userId)} className={style.buttonUnfollow} onClick={ () => props.unfollowTC(userId) }>Unfollow</button> 
					: <button disabled={props.followingInProgress.some(id => id === userId)} className={style.buttonFollow} onClick={ () => props.followTC(userId) }>Follow</button> 
				}</>
		} else {
			return null
		}
	}

	return (
		<div className={style.userCard} key={props.id}>
			<div className={style.userInfo}>
				<img className={style.image} src={ props.photos.small != null ? props.photos.small : userAvatar } alt="" />
				<h3 className={style.fullName}>{ props.name }</h3>
				<h4 className={style.profession}>{ props.profession }</h4>
				{ showHideButtons(props.followed, props.id) }
			</div>
			<NavLink className={style.userLink} to={`/profile/${props.id}`}>View Profile</NavLink>
		</div>
	)
}

export default User;
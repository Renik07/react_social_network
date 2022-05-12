import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';
import userAvatar from '../../assets/images/avatar.png';

class Users extends React.Component {
	constructor(props) {
		super(props);

		axios
			.get('https://social-network.samuraijs.com/api/1.0/users')
			.then(response => this.props.setUsers(response.data.items))
	}
	render() {
		return (
			<div className={style.container}>
				<h2 className={style.title}>Profiles</h2>
				<div className={style.wrapper}>
					{ 
						this.props.users.map(user => <div className={style.userWrapper} key={user.id}>				
								<img className={style.image} src={ user.photos.small != null ? user.photos.small : userAvatar } alt="" />
								<h3 className={style.fullName}>{ user.name }</h3>
								<h4 className={style.profession}>{ user.profession }</h4>
								{ user.followed 
									? <button className={style.buttonUnfollow} onClick={ () => {this.props.unfollow(user.id)} }>Unfollow</button> 
									: <button className={style.buttonFollow} onClick={ () => {this.props.follow(user.id)} }>Follow</button> 
								}
						</div>
						) 
					}
				</div>
				{/* <button className={style.buttonGetUsers} onClick={getUsers}>...</button> */}
			</div>
		)
	}
}

export default Users;
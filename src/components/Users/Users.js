import style from './Users.module.css';

const Users = (props) => {
	if (props.users.length === 0) {
		props.setUsers([
			{id: 1, imageUrl: 'https://i.ibb.co/PMf58J6/user1.jpg', fullName: 'John Doe', profession: 'Graphic Designer', followed: true},
			{id: 2, imageUrl: 'https://i.ibb.co/DKZnZwc/user2.jpg', fullName: 'Anna Robb', profession: 'HR/Recruiter', followed: false},
			{id: 3, imageUrl: 'https://i.ibb.co/4KBJrJz/user3.jpg', fullName: 'Clint Eastwood', profession: 'Director', followed: true},
			{id: 4, imageUrl: 'https://i.ibb.co/1qgjWC0/user4.jpg', fullName: 'Alice Cooper', profession: 'Reporter', followed: false}
		])
	}
	return (
		<div className={style.container}>
			<h2 className={style.title}>users</h2>
			<div className={style.wrapper}>
				{ 
					props.users.map(user => <div className={style.userWrapper} key={user.id}>
							<img className={style.image} src={ user.imageUrl } alt="" />
							<h3 className={style.fullName}>{ user.fullName }</h3>
							<h4 className={style.profession}>{ user.profession }</h4>
							{ user.followed 
								? <button className={style.buttonUnfollow} onClick={ () => {props.unfollow(user.id)} }>Unfollow</button> 
								: <button className={style.buttonFollow} onClick={ () => {props.follow(user.id)} }>Follow</button> 
							}
					</div>
					) 
				}
			</div>
		</div>
	)
}

export default Users;

/* import style from "./users.module.css";

let users = (props) => {

	if (props.users.length === 0) {
		props.setusers([
			{id: 1, imageUrl: 'https://i.ibb.co/PMf58J6/user1.jpg', fullName: 'John Doe', profession: 'Graphic Designer', followed: true},
			{id: 2, imageUrl: 'https://i.ibb.co/DKZnZwc/user2.jpg', fullName: 'John Doe', profession: 'Graphic Designer', followed: false},
			{id: 3, imageUrl: 'https://i.ibb.co/4KBJrJz/user3.jpg', fullName: 'John Doe', profession: 'Graphic Designer', followed: true},
			{id: 4, imageUrl: 'https://i.ibb.co/1qgjWC0/user4.jpg', fullName: 'John Doe', profession: 'Graphic Designer', followed: false}
		])
	}

	return (
		<div className={style.container}>
			<h2 className={style.title}>users</h2>
			<div className={style.wrapper}>
				{ 
					props.users.map(user => <div className={style.userWrapper} key={user.id}>
							<img className={style.image} src={ user.imageUrl } alt="" />
							<h3 className={style.fullName}>{ user.fullName }</h3>
							<h4 className={style.profession}>{ user.profession }</h4>
							{ user.followed 
								? <button className={style.buttonUnfollow} onClick={ () => {props.unfollow(user.id)} }>Unfollow</button> 
								: <button className={style.buttonFollow} onClick={ () => {props.follow(user.id)} }>Follow</button> 
							}
					</div>
					) 
				}
			</div>
		</div>
	)
}

export default users; */
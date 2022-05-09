import style from "./Profiles.module.css";

let Profiles = (props) => {

	if (props.profiles.length === 0) {
		props.setProfiles([
			{id: 1, imageUrl: 'https://i.ibb.co/PMf58J6/user1.jpg', fullName: 'John Doe', profession: 'Graphic Designer', followed: true},
			{id: 2, imageUrl: 'https://i.ibb.co/DKZnZwc/user2.jpg', fullName: 'John Doe', profession: 'Graphic Designer', followed: false},
			{id: 3, imageUrl: 'https://i.ibb.co/4KBJrJz/user3.jpg', fullName: 'John Doe', profession: 'Graphic Designer', followed: true},
			{id: 4, imageUrl: 'https://i.ibb.co/1qgjWC0/user4.jpg', fullName: 'John Doe', profession: 'Graphic Designer', followed: false}
		])
	}

	return (
		<div className={style.container}>
			<h2 className={style.title}>Profiles</h2>
			<div className={style.wrapper}>
				{ 
					props.profiles.map(profile => <div className={style.profileWrapper} key={profile.id}>
							<img className={style.image} src={ profile.imageUrl } alt="" />
							<h3 className={style.fullName}>{ profile.fullName }</h3>
							<h4 className={style.profession}>{ profile.profession }</h4>
							{ profile.followed 
								? <button className={style.buttonUnfollow} onClick={ () => {props.unfollow(profile.id)} }>Unfollow</button> 
								: <button className={style.buttonFollow} onClick={ () => {props.follow(profile.id)} }>Follow</button> 
							}
					</div>
					) 
				}
			</div>
		</div>
	)
}

export default Profiles;
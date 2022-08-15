import React from 'react';
import style from './Users.module.css';
import User from './User/User';
import Skeleton from '../common/Skeleton/Skeleton';

const Users = (props) => {

	let pages = Math.ceil(props.totalUsersCount / props.pageSize);
	let arrPages = [];

	for (let i = 1; i <= pages; i++) {
		arrPages.push(i);
	}

	let curP = props.currentPage;
	let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
	let curPL = curP + 4;
	let slicedPages = arrPages.slice( curPF, curPL);

	return (
		<div className={style.container}>
			<h2 className={style.title}>Profiles</h2>
			<div className={style.paginationWrapper}>
				{ slicedPages.map(p => {
					return (
						<span key={p} className={props.currentPage === p ? style.selectedPage : style.buttonPage} onClick={ () => {props.onPageChanged(p)} }>{ p }  </span>
					)
				}) }
			</div>
			
			<div className={style.wrapper}>
				{ props.isFetchingPreloader 
					? [...new Array(20)].map((_, index) => <Skeleton key={index} />) 
					: props.users.map(user => <User key={user.id} {...user} {...props}/>
					)
				}
			</div>
		</div>
	)
}

export default Users;
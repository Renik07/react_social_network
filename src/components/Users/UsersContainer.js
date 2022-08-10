import { connect } from "react-redux"
import { getUsersThunkCreator, getUsersPageNumberThunkCreator, followThunkCreator, unfollowThunkCreator } from "../../redux/usersReducer";
import React, { useEffect } from 'react';
import Users from './Users';
import { getCurrentPage, getFollowingInProgress, getIsFetchingPreloader, getIsFollowingProgress, getPageSize, getTotalUsersCount, getUsers } from "../../redux/usersSelectors";

const UsersContainer = (props) => {
	const onPageChanged = pageNumber => {
		props.getUsersPageNumberTC(pageNumber, props.pageSize)
	}

	useEffect(() => {
		props.getUsersTC(props.currentPage, props.pageSize);
	}, []);

	return <Users 
		totalUsersCount={props.totalUsersCount}
		pageSize={props.pageSize}
		currentPage={props.currentPage}
		onPageChanged={onPageChanged}
		users={props.users}
		isFetchingPreloader={props.isFetchingPreloader}
		isFollowingProgress={props.isFollowingProgress}
		followingInProgress={props.followingInProgress}
		followTC={props.followTC}
		unfollowTC={props.unfollowTC}
		isAuth={props.isAuth}
	/>
}

let mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		totalUsersCount: getTotalUsersCount(state),
		pageSize: getPageSize(state),
		currentPage: getCurrentPage(state),
		isFetchingPreloader: getIsFetchingPreloader(state),
		isFollowingProgress: getIsFollowingProgress(state),
		followingInProgress: getFollowingInProgress(state),
		isAuth: state.auth.isAuth
	}
}

export default connect(mapStateToProps, {
	getUsersTC: getUsersThunkCreator, 
	getUsersPageNumberTC: getUsersPageNumberThunkCreator, 
	followTC: followThunkCreator, 
	unfollowTC: unfollowThunkCreator
})(UsersContainer);

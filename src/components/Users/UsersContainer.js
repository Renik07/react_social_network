import { connect } from "react-redux"
import { getUsersThunkCreator, getUsersPageNumberThunkCreator, followThunkCreator, unfollowThunkCreator } from "../../redux/usersReducer";
import React from 'react';
import Users from './Users';
import { getCurrentPage, getFollowingInProgress, getIsFetchingPreloader, getIsFollowingProgress, getPageSize, getTotalUsersCount, getUsers } from "../../redux/usersSelectors";

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = pageNumber => {
		this.props.getUsersPageNumberTC(pageNumber, this.props.pageSize)
	}

	render() {
		return <Users 
							totalUsersCount={this.props.totalUsersCount}
							pageSize={this.props.pageSize}
							currentPage={this.props.currentPage}
							onPageChanged={this.onPageChanged}
							users={this.props.users}
							isFetchingPreloader={this.props.isFetchingPreloader}
							isFollowingProgress={this.props.isFollowingProgress}
							followingInProgress={this.props.followingInProgress}
							followTC={this.props.followTC}
							unfollowTC={this.props.unfollowTC}
						/>
	}
}

let mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		totalUsersCount: getTotalUsersCount(state),
		pageSize: getPageSize(state),
		currentPage: getCurrentPage(state),
		isFetchingPreloader: getIsFetchingPreloader(state),
		isFollowingProgress: getIsFollowingProgress(state),
		followingInProgress: getFollowingInProgress(state)
	}
}

export default connect(mapStateToProps, {
	getUsersTC: getUsersThunkCreator, 
	getUsersPageNumberTC: getUsersPageNumberThunkCreator, 
	followTC: followThunkCreator, 
	unfollowTC: unfollowThunkCreator
})(UsersContainer);

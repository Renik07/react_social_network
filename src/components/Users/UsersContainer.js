import { connect } from "react-redux"
import { follow, setCurrentPage, setTotalUsersCount, setUsers, togglePreloader, unfollow } from "../State/usersReducer";
import React from 'react';
import * as axios from 'axios';
import Users from './Users';

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.togglePreloader(true);
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.togglePreloader(false);
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			})
	}

	onPageChanged = pageNumber => {
		this.props.setCurrentPage(pageNumber)
		this.props.togglePreloader(true);
		axios
		.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.togglePreloader(false);
				this.props.setUsers(response.data.items)
			})
	}

	render() {
		return <Users 
							totalUsersCount={this.props.totalUsersCount}
							pageSize={this.props.pageSize}
							currentPage={this.props.currentPage}
							onPageChanged={this.onPageChanged}
							follow={this.props.follow}
							unfollow={this.props.unfollow}
							users={this.props.users}
							isFetchingPreloader={this.props.isFetchingPreloader}
							togglePreloader={this.props.togglePreloader}
						/>
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		totalUsersCount: state.usersPage.totalUsersCount,
		pageSize: state.usersPage.pageSize,
		currentPage: state.usersPage.currentPage,
		isFetchingPreloader: state.usersPage.isFetchingPreloader
	}
}

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, togglePreloader})(UsersContainer);
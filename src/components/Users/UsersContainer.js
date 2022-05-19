import { connect } from "react-redux"
import { follow, setCurrentPage, setTotalUsersCount, setUsers, togglePreloader, unfollow } from "../redux/usersReducer";
import React from 'react';
import Users from './Users';
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.togglePreloader(true);
		usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
			.then(data => {
				this.props.togglePreloader(false);
				this.props.setUsers(data.items);
				this.props.setTotalUsersCount(data.totalCount);
			})
	}

	onPageChanged = pageNumber => {
		this.props.setCurrentPage(pageNumber)
		this.props.togglePreloader(true);
		usersAPI.getUsers(pageNumber, this.props.pageSize)
			.then(data => {
				this.props.togglePreloader(false);
				this.props.setUsers(data.items)
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

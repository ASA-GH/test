import React from 'react';
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from './Users';



const UsersContainer = (props) => {
    return (
        <Users />
    )
  };
         
  export default UsersContainer;



/*
class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`http://localhost:3800/items?_limit=${this.props.pageSize}&_page=${this.props.currentPage}`)
        //axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data);
            });
            axios.get(`http://localhost:3800/options`)
            .then(response => {                
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }
        
// https://reqres.in/

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`http://localhost:3800/items?_limit=${this.props.pageSize}&_page=${pageNumber}`)
            .then(response => {
                this.props.setUsers(response.data);
            });
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount));       
        
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer); 

*/





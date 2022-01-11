import React from "react";
import { Link } from "react-router-dom";
import HOST_URL from "../proxy";
import FollowAndFollowing from "./follow-following";
import '../css/explorepeople.css';

class PeopleList extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            username: props.user.username,
            userId: props.user.userId,
            profilePic: props.user.profile,
            fullname: props.user.fullname,
            account_visiblity: props.user.account_visiblity,

        }

    }

    render() {
       
        return <>
            <div className="explore-people-main-container">
                <div className="people-list-item" >
                    <Link to={"/" + this.state.username} className="explore-people-user-info">
                        <div className="people-list-item-img">
                            <img src={HOST_URL + '/' + this.state.profilePic} alt={this.state.username}/>
                        </div>
                        <div className="people-list-item-name">
                            <h3>{this.state.username}</h3>
                        </div>
                    </Link>
                    <FollowAndFollowing isAuth={this.props.isAuth} user={{
                        account_visiblity: this.state.account_visiblity,
                        userId: this.state.userId,
                        incFollower: () => { },
                        decFollower: () => { },
                    }} />

                </div>
            </div>
        </>

    }


}



export default PeopleList;
import axios from "axios";
import Cookies from "js-cookie";
import React from "react";

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from "react-router-dom";
import DashboardPosts from "./component/dashboard-post";
import FollowAndFollowing from "./component/follow-following";
import SuggestsToLogin from "./component/loginsuggestion";
import UserNotLogin from "./notlogin";
import HOST_URL from "./proxy";

class OtherUserProfile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            message: "",
            isLoading: true,
            qusername: this.props.match.params.username,
            followers: 0,
            posts: 0,
            following: 0,
            userId: 0,
            username: "",
            fullname: "",
            user_type: "",
            profile: "",
            description: "",
            website: "",
            date_of_birth: 0,
            account_status: '',
            account_visiblity: '',
            page_not_found: false,

        }
    }

    getFollowerAndFollowingCount = () => {
        axios.get(HOST_URL + '/get_follower_following?userId=' + this.state.userId).then(result => {
            if (result.status === 200) {
                let data = result.data

                this.setState({
                    followers: data.followers,
                    following: data.following,
                    posts: data.post
                })
            } else {
                this.setState({
                    hasErrorOnFetchInfo: true
                })
            }
        })

    }
    incrementFollowers = () => {
        if (this.state.account_visiblity.toLocaleLowerCase() === 'private') {
            return
        }
        this.setState({
            followers: this.state.followers + 1
        })
    }

    decrementFollowers = () => {
        if (this.state.account_visiblity.toLocaleLowerCase() === 'private') {
            return
        }
        if (this.state.followers > 0)
            this.setState({
                followers: this.state.followers - 1
            })
    }



    componentDidMount() {
        document.getElementsByTagName("title")[0].innerHTML = this.state.qusername
        axios.post(HOST_URL + '/other_user_profile', {
            username: this.state.qusername
        }).then(result => {
            let res = result.data
            console.log(res);
            if (result.status === 301) {
                window.location.href = res.redirect
            }
            else if (res.status == 403) {
                this.setState({
                    page_not_found: true
                })
            } else {
                this.setState({
                    userId: res[0].userId,
                    username: res[0].username,
                    fullname: res[0].fullname,
                    user_type: res[0].user_type,
                    profile: res[0].profile,
                    website: res[0].website,
                    description: res[0].description,
                    date_of_birth: res[0].date_of_birth,
                    account_status: res[0].account_status,
                    account_visiblity: res[0].account_visiblity,
                    isLoading: false
                })
                this.getFollowerAndFollowingCount()
                this.getAllFollowingIds()
            }
        }).catch(err => {
            console.log(err);
        })

        setTimeout(() => {

            if (Cookies.get('token') !== undefined) {
                axios.post(HOST_URL + '/visited_by_someone', {
                    userId: this.state.userId,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + Cookies.get('token')

                    }
                }).then(result => {
                    if (result.status === 200) {
                        //
                    }
                }).catch(err => {
                    console.log(err);
                })
            } else {
                axios.post(HOST_URL + '/visited_by_someone_notlogin', {
                    userId: this.state.userId,
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(result => {
                    if (result.status === 200) {
                        //
                    }
                }).catch(err => {
                    console.log(err);
                })
            }
        }, 30000)
    }


    render() {

        let savedUrl = "/" + this.state.username + "/__saved__";
        let taggedUrl = "/" + this.state.username + "/__tagged__";
        let postsUrl = "/" + this.state.username;
        let followingUrl = "/" + this.state.username + "/following";
        let followersUrl = "/" + this.state.username + "/followers";
        if (this.state.page_not_found) {
            return <>
                <h1>Page not found {this.state.qusername}</h1>
            </>
        }
        let style = {
            link: {
                color: '#000',
                textDecoration: 'none'
            }
        }
        return <>
            <UserNotLogin />
            <div className="dashboard">
                {/* User Information Section */}
                <div className="main-container-user-information">

                    <section className="profile-section">
                        <img draggable={false} src={HOST_URL + "/" + this.state.profile} className="current-user-profile" />
                    </section>

                    <section className="user-information-section">
                        {/*  */}
                        <div className="username-edit-setting">
                            <h2>{this.state.username}</h2>
                            {this.state.isLoading ? null :
                                <FollowAndFollowing isAuth={this.props.isAuth} user={
                                    {
                                        account_visiblity: this.state.account_visiblity,
                                        userId: this.state.userId,
                                        incFollower: this.incrementFollowers,
                                        decFollower: this.decrementFollowers
                                    }
                                } />}

                        </div>
                        {/* Post,Followers and Following */}
                        <div className="dashboard-post-follower-following">
                            <div className="dashboard-post-container">
                                <span>{this.state.posts}</span>
                                <span>Posts</span>
                            </div>
                            <div className="dashboard-follower-container">

                                <Link to={followersUrl} style={style.link}>  <span>{this.state.followers}</span>Followers</Link>
                            </div>
                            <div className="dashboard-following-container">

                                <Link to={followingUrl} style={style.link}> <span>{this.state.following}</span> Following</Link>
                            </div>
                        </div>

                        <div className="user-fullname-bio-website-field">
                            <h3>{this.state.fullname}</h3>
                            <div>{this.state.description}</div>
                            <a href={"https://" + this.state.website} target="_blank">{this.state.website}</a>
                        </div>

                    </section>



                </div>
                {/* End Section */}
                {/* Divider */}
                <hr className="dashboard-userinfo-divider" />
                {/* End Divider */}
                {/* Dashboard Menu Section */}

                <Router>
                    <div className="main-container-dashboard-menu">

                        <div className="current-user-post dashboard-sub-menu" >
                            <Link to={postsUrl} className="sub-menu-item"><i className="material-icons" onSelect={this.handleSelected}>person</i><span>POSTS</span></Link>
                        </div>

                        <div className="current-user-tagged dashboard-sub-menu"  >
                            <Link to={taggedUrl} className="sub-menu-item" onSelect={this.handleSelected}><i className="material-icons">portrait</i><span>TAGGED</span></Link>
                        </div>

                    </div>

                    {/* End Dashboard Menu Section */}

                    {/* Another Section */}
                    <div className="main-container-dashboard-data">

                        <Switch>
                            <Route exact path={postsUrl}>
                                <DashboardPosts userId={this.state.userId} />
                            </Route>
                            <Route exact path={taggedUrl}>
                                <h1>Tagged</h1>

                            </Route>
                        </Switch>


                    </div>

                </Router>

                {/*End Section  */}

            </div>
        </>
    }



}


export default OtherUserProfile;
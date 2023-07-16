/* eslint-disable no-template-curly-in-string */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import './css/dashboard.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import PopupMessage from "./component/pop-up-message";
import Follower from "./component/followers";
import Following from "./component/Following";
import HOST_URL from "./proxy";
import Cookies from 'js-cookie'
import baseUrl from './proxy'
import DashboardPosts from "./component/dashboard-post";



class Dashbaord extends React.Component {


    constructor(props) {
        super(props);

        let message = {
            title: "",
            message: "Update profile successfully",
            status: true,
            showPoupView: props.isShowPopupView,
            toggle: () => { }
        }
        let profile = localStorage.getItem('currentuserprofile');
        console.log(profile);


        this.state = {
            selected: 0,
            profileurl: profile !== undefined ? profile : "https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg",
            userId: 0,
            username: "vibe_nep",
            fullname: "vibe-nep",
            bio: "",
            website: "",
            posts: 0,
            followers: 0,
            following: 0,
            visiblity: "public",
            hasErrorOnFetchInfo: false,
            updateProfile: false,
            message: message

        }
    }

    componentDidMount() {

        axios.get(HOST_URL + '/current_user_info',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + Cookies.get('token')
                }
            }

        ).then(result => {

            if (result.status === 200) {
                let data = result.data
                localStorage.setItem('username', data.username);

                this.setState({
                    profileurl: data.profile,
                    username: data.username,
                    fullname: data.fullname,
                    bio: data.description,
                    visiblity: data.account_visibility,
                    userId: data.userId,
                    website: data.website,

                })
                localStorage.setItem('currentuserprofile', this.state.profileurl);

                document.getElementsByTagName("title")[0].innerHTML = this.state.fullname + "- " + this.state.username;

            } else {
                this.setState({
                    hasErrorOnFetchInfo: true
                })
            }

        }).catch(err => {
            document.getElementsByTagName("title")[0].innerHTML = this.state.fullname + "- " + this.state.username;
        })
        axios.get(HOST_URL + '/currentUser_follower_following', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token')
            }
        }).then(result => {
            if (result.status === 200) {
                let data = result.data
                console.log(data);
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
        }).catch(err => {
            console.log(err);
        })
    }

    handleClickMenu = (e) => {
    }
    handleFileSelection = (e) => {
       
        e.preventDefault();
        let files = e.target.files;
        this.setState({
            updateProfile: false
        })
        if (files.length > 0) {
            e.preventDefault();
            this.uploadProfile(files[0]);
        }


    }
     uploadProfile(file) {
        let formData = new FormData();
        formData.append('profile', file);
      
      axios.post(HOST_URL + '/upload_profile', formData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token')
            }
        }).then((result)=>{
            if (result.data.status === 200) {
                console.log(result.data);
                this.setState({
                    updateProfile: true,
                    profileurl: result.data.url,
                    message: {
                        title: "Success",
                        message: "Update profile successfully",
                        status: true
                    }
                })
            } else {
                    
            }
        });
       

    }
    handleClick = () => {

    }
    handleClosePopup = () => {
        window.location.href = "/"+this.state.username;
    }

    render() {
        let savedUrl = "/" + this.state.username + "/__saved__";
        let taggedUrl = "/" + this.state.username + "/__tagged__";
        let postsUrl = "/" + this.state.username;
        let following = "/" + this.state.username + "/following"
        let followers = "/" + this.state.username + "/followers"


        if (this.state.hasErrorOnFetchInfo) {
            return <>
                <h1>Something went wrong</h1>
            </>
        }
        let style={
            link:{
                color:'#000',
                textDecoration:'none'
            }
        }

        return <>

            {this.state.updateProfile ? <PopupMessage data={this.state.message} /> : null}
            <Router>
                <Switch>
                    <Route exact path={followers} >
                        <div className="full-screen-popup"  >
                            <span className="close" onClick={this.handleClosePopup}>&times;</span>
                            <Follower info={{ userId: this.state.userId, username: this.state.username }} />
                        </div>

                    </Route>
                    <Route exact path={following} >
                        <div className="full-screen-popup" >    
                        <span className="close"  onClick={this.handleClosePopup}>&times;</span>
                            <Following info={{ userId: this.state.userId, username: this.state.username }} />
                        </div>
                    </Route>
                    <Route exact path={'accounts/edit'}>
                    </Route>
                </Switch>


                <div className="dashboard">
                    {/* User Information Section */}

                    <div className="main-container-user-information">

                        <section className="profile-section">
                            <img src={baseUrl + "/" + this.state.profileurl} alt="" className="current-user-profile" />
                        </section>

                        <section className="user-information-section">
                            {/*  */}
                            <div className="username-edit-setting">
                                <h2>{this.state.username}</h2>
                                <label htmlFor="profile-pic" className="edit-profile-btn">Edit Profile</label>
                                {/* <form method="POST" name="profile" id="profile" name="profile"> */}
                                <input type="file" hidden name="profile-pic" multiple={false} accept="image/*" id="profile-pic" onChange={this.handleFileSelection} />
                                {/* </form> */}

                                <a href={'/accounts/edit'}> <i className="material-icons">settings</i></a>

                            </div>
                            {/* Post,Followers and Following */}
                            <div className="dashboard-post-follower-following">
                                <div className="dashboard-post-container">
                                    <span>{this.state.posts}</span>
                                    <span>Posts</span>
                                </div>
                                <div className="dashboard-follower-container" onClick={this.handleClick}>
                                    <NavLink to={followers} onClick={this.handleClick} style={style.link}>
                                        <span>{this.state.followers}</span>
                                        <span>Followers</span>
                                    </NavLink>
                                </div>
                                <div className="dashboard-following-container" onClick={this.handleClick}>
                                    <NavLink to={following} onClick={this.handleClick} style={style.link}>
                                        <span>{this.state.following}</span>
                                        <span>Following</span>
                                    </NavLink>
                                </div>
                            </div>

                            <div className="user-fullname-bio-website-field">
                                <h3>{this.state.fullname}</h3>
                                <span>{this.state.bio}</span>
                                <a href={'https://'+ this.state.website} rel="noreferrer" target="_blank">{this.state.website}</a> 
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

                            <div className="current-user-post dashboard-sub-menu" onClick={this.handleClickMenu(0)} >
                                <Link to={postsUrl} className="sub-menu-item"><i className="material-icons" onSelect={this.handleSelected}>person</i><span>POSTS</span></Link>
                            </div>
                            <div className="current-user-saved dashboard-sub-menu" onClick={this.handleClickMenu(1)}  >
                                <Link to={savedUrl} className="sub-menu-item" onSelect={this.handleSelected}><i className="material-icons">turned_in_not</i><span>SAVED</span></Link>
                            </div>
                            <div className="current-user-tagged dashboard-sub-menu" onClick={this.handleClickMenu(2)} >
                                <Link to={taggedUrl} className="sub-menu-item" onSelect={this.handleSelected}><i className="material-icons">portrait</i><span>TAGGED</span></Link>
                            </div>

                        </div>

                        {/* End Dashboard Menu Section */}

                        {/* Another Section */}
                        <div className="main-container-dashboard-data">

                            <Switch>
                                <Route exact path={postsUrl}>
                                    <DashboardPosts calledFrom="dashboard_post" />

                                </Route>
                                <Route exact path={savedUrl}>
                                    <DashboardPosts calledFrom="dashboard_saved" />
                                </Route>
                                <Route exact path={taggedUrl}>
                                    <h1>Tagged</h1>

                                </Route>

                            </Switch>


                        </div>

                    </Router>

                    {/*End Section  */}

                </div>



            </Router>
        </>
    }


}

export default (Dashbaord);
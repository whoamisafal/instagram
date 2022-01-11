import React, { useEffect, useState } from "react";
import axios from "axios";
import HOST_URL from "../proxy";

import Cookies from 'js-cookie'
import Toast from "./toast";

//Here followers means current user's followers
//userid means the visited profile ids


function FollowAndFollowing(props) {

    let [isLoading, setIsLoading] = React.useState(false)
    let [currentUid, setCurrentUid] = React.useState(0)
    let [userId, setUserId] = React.useState(0)
    let token = Cookies.get('token');
    let isAuth = token == undefined ? false : true;
    let calledFrom = props.calledFrom;
    let user = props.user;
    let account_visiblity = props.user.account_visiblity;
    let [isfollowing, setIsfollowing] = React.useState(false)
    let [followers, setFollowers] = React.useState([]);


    React.useEffect(() => {
        setUserId(user.userId);

        axios.get(HOST_URL + '/is_following?userId=' + userId, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token')
            }
        })
            .then(res => {
                if (res.status === 200) {
                    setIsfollowing(res.data.result)
                    setIsLoading(false)
                    setCurrentUid(res.data.currentUserId)

                }
            }).catch(err => {
                console.log(err);
            })
    }, [user])

    React.useEffect(() => {

        axios.get(HOST_URL + '/get_all_followers_ids', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token')
            }
        }).then(result => {
            if (result.status === 200) {
                let data = result.data
                if (data.status === 200) {
                    setFollowers(data.followers);
                }
            }
        })

    }, [
        currentUid
    ])




    let style = {
        followStyle: {
            backgroundColor: '#3a96f2',
            borderRadius: '5px',
            color: 'white',
            padding: '7px',
            border: 'none',
            cursor: 'pointer',
            minWidth: '125px',
            fontWeight: 'bold',
        },
        followStyle1: {
            backgroundColor: 'transparent',
            border: 'none',
            color: '#3a96f2',
            cursor: 'pointer',
            fontWeight: 'bold',
            padding: '7px',
            width: '125px',
            fontSize: '12px',

        }
    }
    if (currentUid === userId || currentUid === 0) {
        return <></>
    }

    const handleClick = () => {
        if (!isAuth) {
            alert("You must be logged in to follow someone")
            return
        }
        setIsLoading(true)
        axios.post(HOST_URL + '/follow/', {
            followTo: userId,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token')
            }
        }).then(res => {
            if (res.status === 200) {
                if (isfollowing) {
                    user.decFollower()
                } else {

                    user.incFollower()
                }
                console.log(isfollowing);
                setIsfollowing(!isfollowing)
                setIsLoading(false)

            } else if (res.status === 403) {
                console.log("403");
                alert(res.data.message)
            }

        })

    }



    return <>
        <div className={calledFrom}>
            <button onClick={handleClick} style={calledFrom === "callFromPostView" ?
                style.followStyle1 : style.followStyle}>{!isAuth ? "Follow" :
                    isLoading ? "Loading..." : isfollowing ? account_visiblity == "private" ? "Requested" :
                        "Following" : isfollowing ? "Following" : Array.from(followers).includes(userId) ? "Follow back" : "Follow"
                }

            </button>
        </div>
    </>




}
export function RemoveFollower(props) {
    let user = props.user;
    console.log(user);
    let [isRemoved, setIsRemoved] = React.useState(false)
    let [isConfirmToRemove, setIsConfirmToRemove] = React.useState(false)
    let [isClickedRemoveFollower, setIsClickedRemoveFollower] = React.useState(false)
    const removeFollower = () => {
        setIsClickedRemoveFollower(true)
    }
    useEffect(() => {
        if (isConfirmToRemove) {
            console.log(isClickedRemoveFollower);
            axios.post(HOST_URL + '/remove_follower/', {
                followerId: user.userId,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + Cookies.get('token')
                }
            }).then(res => {
                if (res.status === 200) {
                    setIsRemoved(true)
                    setIsClickedRemoveFollower(false)
                }
            }).catch(err => { })
        }
        return () => {
            setIsClickedRemoveFollower(false)
        }
    }, [
        isConfirmToRemove
    ])

    let style = {
        img: {
            width: '70px',
            height: '70px',
            borderRadius: '50%',
        },
        h2: {
            textAlign: 'center',
            fontWeight: '400',
            color: 'rgba(0,0,0,0.7)',
        },
        p: {
            textAlign: 'center',
            color: 'rgba(0,0,0,0.5)',
            margin: '10px',
        },
        button: {
            backgroundColor: 'white',
            padding: '7px',
            border: '0.5px solid rgba(0,0,0,0.2)',
            cursor: 'pointer',
            fontWeight: 'bold',
            borderRadius: '5px',
            zIndex: '9',
        }

    }
    const confirm = () => {
        setIsConfirmToRemove(true)
        setIsClickedRemoveFollower(false)
    }
    const cancel = () => {
        setIsConfirmToRemove(false)
        setIsClickedRemoveFollower(false)
    }

    return <>
        {
            isClickedRemoveFollower ? <div className="remove-follower-poup-alert-main-container" >
                <div className="remove-follower-poup-alert-container">
                    <div className="remove-follower-poup-alert-header">
                        <div className="remove-follower-poup-alert-header-profile">
                            <img src={HOST_URL + '/' + user.profile} style={style.img} />
                        </div>
                    </div>
                    <div className="remove-follower-popup-alert-body">
                        <h2 style={style.h2}>
                            Remove Follower?
                        </h2>
                        <p style={style.p}>
                            {
                                "Instagram won't tell " + user.username + " they were removed from your followers"
                            }
                        </p>
                    </div>
                    <div className="remove-follower-popup-alert-footer">
                        <div className="remove-follower-popup-alert-footer-confirm-btn" onClick={confirm}>Confirm</div>
                        <div className="remove-follower-popup-alert-footer-cancel-btn" onClick={cancel}>Cancel</div>
                    </div>

                </div>
            </div> : null
        }


        <button onClick={removeFollower} style={style.button} disabled={isRemoved}>{isRemoved ? "Removed" : "Remove"}</button>
    </>
}

export function ConfirmationRemoveFollowing(props) {
    let user = props.user;
    let close = props.close;
    let [isRemoved, setIsRemoved] = React.useState(false)
    let [isConfirmToRemove, setIsConfirmToRemove] = React.useState(false)

    let [isFollowing, setIsFollowing] = React.useState(true)


    useEffect(() => {
        if (isConfirmToRemove) {
            if (Cookies.get('token') === undefined) {
                alert("You must be logged in to follow someone")
                return
            }
            axios.post(HOST_URL + '/follow/', {
                followTo: user.userId,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + Cookies.get('token')
                }
            }).then(res => {
                if (res.status === 200) {
                    setIsFollowing(!isFollowing)
                    setIsConfirmToRemove(false)
                    close()
                } else if (res.status === 403) {
                    console.log("403");
                    alert(res.data.message)
                }

            })
        }

        return () => {

        }
    }, [
        isConfirmToRemove
    ])




    let style = {
        img: {
            width: '70px',
            height: '70px',
            borderRadius: '50%',
        },
        h2: {
            textAlign: 'center',
            fontWeight: '400',
            color: 'rgba(0,0,0,0.7)',
        },
        p: {
            textAlign: 'center',
            color: 'rgba(0,0,0,0.5)',
            margin: '10px',
        },
        button: {
            backgroundColor: 'white',
            padding: '7px',
            border: '0.5px solid rgba(0,0,0,0.2)',
            cursor: 'pointer',
            fontWeight: 'bold',
            borderRadius: '5px',
            zIndex: '9',
        }

    }
    const confirm = () => {
        setIsConfirmToRemove(true)

    }


    return <>
        <div className="remove-following-poup-alert-main-container" >
            <div className="remove-following-poup-alert-container">
                <div className="remove-following-poup-alert-header">
                    <div className="remove-following-poup-alert-header-profile">
                        <img src={HOST_URL + '/' + user.profile} style={style.img} />
                    </div>
                </div>
                <div className="remove-following-popup-alert-body">
                    <p style={style.p}>
                        {
                            isFollowing ? "Unfollow " + user.username + "?" : "Follow " + user.username + "?"
                        }
                    </p>
                </div>
                <div className="remove-following-popup-alert-footer">
                    <div className="remove-following-popup-alert-footer-confirm-btn" onClick={confirm}>{
                        isFollowing ? "Unfollow" : "Follow"
                    }</div>
                    <div className="remove-following-popup-alert-footer-cancel-btn" onClick={close}>Cancel</div>
                </div>

            </div>
        </div>
    </>
}

export function ConfirmationToDeletePost(props) {
    let post = props.post;
    let message=props.message;
    let close = props.close;
    let [isRemoved, setIsRemoved] = React.useState(true)
    let [isFailure, setIsFailure] = useState(false)
    let [isConfirmToRemove, setIsConfirmToRemove] = React.useState(false)

    useEffect(() => {
        if (isConfirmToRemove) {
            if (Cookies.get('token') === undefined) {
                alert("You must be logged in to delete this post")
                return
            }
            axios.delete(HOST_URL + '/delete/post/', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + Cookies.get('token')
                },
                data: {
                    postId: post[0].postId
                }
            }).then(res => {
                if (res.status === 200) {
                    let data = res.data
                    if (data.statusCode === 200) {
                        //Success
                        setIsRemoved(true)
                        message(true,'Post deleted successfully')
                        close()
                    } else {
                        setIsFailure(true)
                        message(false,'Fail to delete post')
                        close()
                        //Something went's wrong
                    }
                } else {
                    setIsFailure()
                    close()
                }
            }).catch((err) => {
                setIsFailure()
                close()
            })

        }

        return () => {

        }
    }, [
        isConfirmToRemove
    ])




    let style = {
        img: {
            width: '70px',
            height: '70px',
            borderRadius: '50%',
        },
        h2: {
            textAlign: 'center',
            fontWeight: '400',
            color: 'rgba(0,0,0,0.7)',
        },
        p: {
            textAlign: 'center',
            color: 'rgba(0,0,0,0.5)',
            margin: '10px',
        },
        button: {
            backgroundColor: 'white',
            padding: '7px',
            border: '0.5px solid rgba(0,0,0,0.2)',
            cursor: 'pointer',
            fontWeight: 'bold',
            borderRadius: '5px',
            zIndex: '9',
        }

    }
    const confirm = () => {
        setIsConfirmToRemove(true)
    }



    return <>
        <div className="remove-post-poup-alert-main-container" >
            <div className="remove-post-poup-alert-container">
                <div className="remove-post-poup-alert-header">
                    <div className="remove-post-poup-alert-header-profile">
                        <h2>  Delete Post?</h2>
                    </div>
                </div>
                <div className="remove-post-popup-alert-body">
                    <p style={style.p}>
                        Do you want to delete this post?
                    </p>
                </div>
                <div className="remove-post-popup-alert-footer">
                    <div className="remove-post-popup-alert-footer-confirm-btn" onClick={confirm}>
                        Delete
                    </div>
                    <div className="remove-post-popup-alert-footer-cancel-btn" onClick={close}>Cancel</div>
                </div>

            </div>
        </div>
    </>
}

export function RemoveFollowing(props) {
    let user = props.user;

    let [isRemoved, setIsRemoved] = React.useState(false)
    let [isConfirmToRemove, setIsConfirmToRemove] = React.useState(false)
    let [isClickedRemoveFollowing, setIsClickedRemoveFollowing] = React.useState(false)
    let [isFollowing, setIsFollowing] = React.useState(true)

    const removeFollower = () => {
        setIsClickedRemoveFollowing(true)
    }
    useEffect(() => {
        if (isConfirmToRemove) {
            if (Cookies.get('token') === undefined) {
                alert("You must be logged in to follow someone")
                return
            }
            axios.post(HOST_URL + '/follow/', {
                followTo: user.userId,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + Cookies.get('token')
                }
            }).then(res => {
                if (res.status === 200) {
                    setIsFollowing(!isFollowing)
                    setIsConfirmToRemove(false)
                } else if (res.status === 403) {
                    console.log("403");
                    alert(res.data.message)
                }

            })


        }

        return () => {
            setIsClickedRemoveFollowing(false)
        }
    }, [
        isConfirmToRemove
    ])




    let style = {
        img: {
            width: '70px',
            height: '70px',
            borderRadius: '50%',
        },
        h2: {
            textAlign: 'center',
            fontWeight: '400',
            color: 'rgba(0,0,0,0.7)',
        },
        p: {
            textAlign: 'center',
            color: 'rgba(0,0,0,0.5)',
            margin: '10px',
        },
        button: {
            backgroundColor: 'white',
            padding: '7px',
            border: '0.5px solid rgba(0,0,0,0.2)',
            cursor: 'pointer',
            fontWeight: 'bold',
            borderRadius: '5px',
            zIndex: '9',
        }

    }
    const confirm = () => {
        setIsConfirmToRemove(true)
        setIsClickedRemoveFollowing(false)
    }
    const cancel = () => {
        setIsConfirmToRemove(false)
        setIsClickedRemoveFollowing(false)
    }

    return <>
        {
            isClickedRemoveFollowing ? <div className="remove-following-poup-alert-main-container" >
                <div className="remove-following-poup-alert-container">
                    <div className="remove-following-poup-alert-header">
                        <div className="remove-following-poup-alert-header-profile">
                            <img src={HOST_URL + '/' + user.profile} style={style.img} />
                        </div>
                    </div>
                    <div className="remove-following-popup-alert-body">
                        <p style={style.p}>
                            {
                                isFollowing ? "Unfollow " + user.username + "?" : "Follow " + user.username + "?"
                            }
                        </p>
                    </div>
                    <div className="remove-following-popup-alert-footer">
                        <div className="remove-following-popup-alert-footer-confirm-btn" onClick={confirm}>{
                            isFollowing ? "Unfollow" : "Follow"
                        }</div>
                        <div className="remove-following-popup-alert-footer-cancel-btn" onClick={cancel}>Cancel</div>
                    </div>

                </div>
            </div> : null
        }


        <button onClick={removeFollower} style={style.button} disabled={isRemoved}>{isFollowing ? "Following" : "Follow"}</button>
    </>
}



export default FollowAndFollowing
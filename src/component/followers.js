import axios from "axios";
import React, { useEffect } from "react";
import HOST_URL from "../proxy";
import Cookies from 'js-cookie'
import { Link, useHistory } from 'react-router-dom'
import FollowAndFollowing, { RemoveFollower } from "./follow-following";


function FollowerListRender(props) {
    let follower = props.follower;

    let styleFollower = {
        container: {
            position: 'relative',
            display: 'block',
            width: '100%',
            userSelect: 'none',

        },
        followerInfo: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            userSelect: 'none',
            columnGap: '10px',
            padding: '10px',
        },
        image: {
            width: '45px',
            height: '45px',
            objectFit: 'cover',
            borderRadius: '50%',
            userSelect: 'none',
        },
        link: {
            textDecoration: 'none',
            color: 'black',
            zIndex: '1',
        },
        usernameFullname: {
            fontSize: '14px',
            fontWeight: '500',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            textAlign: 'start',

        },
        fullname: {
            color: '#828282',
        },
        removeFollowerFollowing: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',

        }
    }
    return <>
        <div style={styleFollower.container}>

            <div className="followers-info" style={styleFollower.followerInfo}>
                <Link to={'/' + follower.username} style={styleFollower.link}>
                    <div className="user-profile">
                        <img src={HOST_URL + "/" + follower.profile} alt="profile" style={styleFollower.image} />
                    </div>
                </Link><Link to={'/' + follower.username} style={styleFollower.link}>
                    <div className="username-fullname" style={styleFollower.usernameFullname}>
                        <span>{follower.username}</span>
                        <span style={styleFollower.fullname}>{follower.fullname}</span>
                    </div>
                </Link>

                <div className="remove-follow-following" style={styleFollower.removeFollowerFollowing}>
                    <FollowAndFollowing user={{ userId: follower.userId, username: follower.username, incFollower: () => { }, decFollower: () => { }, }}
                        calledFrom="callFromPostView" />
                    <RemoveFollower user={follower} />
                </div>
            </div>

        </div>
    </>
}


function Follower(props) {
    let info = props.info;
    let history = useHistory();
    let [follower, setFollower] = React.useState([]);
    let [isLoading, setIsLoading] = React.useState(true);
    let [isPrivateAccount, setIsPrivateAccount] = React.useState(false);
    let [userId, setUserId] = React.useState(0);
    let [username, setUsername] = React.useState('');

    useEffect(() => {
        setUserId(info.userId);
        setUsername(info.username);

        axios.get(HOST_URL + '/get_followers?info=' + JSON.stringify({
            userId: info.userId,
            username: info.username
        }), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token')
            }
        }).then(res => {
            if (res.status === 200) {
                let data = res.data
                setIsLoading(false);
                setFollower(data.followers);

            } else {
                setIsLoading(false);
            }
        })
            .catch(err => {
                console.log(err);
            })
        return () => {
            setUserId(0);
            setIsLoading(false);
        }
    }, [info])

    let style = {
        close: {
            cursor: 'pointer',

        }
    }

    return <>
        <div className={isLoading ? "dashboard-followers-main-container" : "dashboard-followers-main-container-active"}>
            <div className="dashboard-follower-header">
                <div className="dashboard-follower-header-title">
                    <h4>Followers</h4>
                </div>
                <span className="dashboard-follower-close" onClick={history.goBack} style={style.close}>&times;</span>
            </div>
            <div className="dashboard-followers-list">
                {isLoading ? <h1>Loading...</h1> :
                    follower.length === 0 ? <><h1>No followers</h1></> :
                        follower.map((follower, index) => {
                            return <FollowerListRender follower={follower} key={index} />
                        })
                }
            </div>
        </div>

    </>

}







export default Follower
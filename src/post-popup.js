import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { ConfirmationRemoveFollowing, ConfirmationToDeletePost } from "./component/follow-following";
import Toast from "./component/toast";
import HOST_URL from "./proxy";


function PopupMenuPost(props) {
    let post = props.post;
    let [user, setUser] = React.useState({});
    let close = props.close;
    let message=props.message;
    let [isFollowing, setIsFollowing] = React.useState(false);
    let [isClickedUnFollow, setIsClickedUnFollow] = React.useState(false);
    let [isClickedDelete,setIsClickedDelete]=useState(false)
    let [userId, setUserId] = React.useState(0);
    let [isMounted, setIsMounted] = React.useState(true);
    let [isCopied, setIsCopied] = React.useState(false);
   
    useEffect(() => {
        if(isMounted)
        axios.get(HOST_URL + '/is_following?userId=' + post[0].userId, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token')
            }
        }).then(res => {
            if (res.status === 200) {
                let data = res.data
                if (data.status === 200) {

                    setUserId(data.currentUserId);
                    setIsFollowing(data.result);
                }

            } else {

            }
        })
            .catch(err => {
                console.log(err);
            })
        return () => {
            setIsMounted(false);
            setIsCopied(false);
        }
    }, [post])
    useEffect(() => {
        if(isMounted)
        axios.get(HOST_URL + "/get_user?userId=" + post[0].userId).then(res => {
            if (res.status === 200) {
                setUser(res.data);
            }

        }).catch(err => {
            //(err);
        })
        return () => { 
            setIsMounted(false);
        }
    }, [post])
    useEffect(() => {
        if(isCopied){
            setTimeout(() => {
                closeView();
            },1000)
        }
        return () => {
         
            clearTimeout(1000)
            // setIsCopied(false);
        }
    },[isCopied])
    

    const goToPost = () => {
        window.location.href = post[0].postUrl;
    }
    const copyLink = () => {
        let copyText = document.getElementById("copylink").value;
        let location = window.location.href;
        let url = location.substring(0, location.lastIndexOf('/'));
        // navigator.clipboard.writeText(url + copyText).then(function () {
        //    setIsCopied(true);
        // }).catch(function (err) {
        //     console.log('Something went wrong', err);
        // })
        if (navigator.clipboard !== undefined) {//Chrome
            navigator.clipboard.writeText(url).then(function () {
                setIsCopied(true);
            }, function (err) {
                console.error('Async: Could not copy text: ', err);
            });
        }
        else if(window.clipboardData) { // Internet Explorer
            window.clipboardData.setData("Text", url);
            setIsCopied(true);
        }



    }
    const unfollow = () => {
        setIsClickedUnFollow(true)
    }
    const closeView=()=>{
        setIsClickedUnFollow(false)
        setIsClickedDelete(false)
        close();
    }
    const deletePost=()=>{
        setIsClickedDelete(true)
    }
  

    return <>
        {
            isClickedUnFollow? <ConfirmationRemoveFollowing user={user} close={closeView} /> :null
        }
        {
            isClickedDelete?<ConfirmationToDeletePost post={post} close={closeView} message={message} />:null
        }
        {
            isCopied?<Toast message="Copied" duration={3} />:null
        }
        <div className="popup-menupost-main-container" >
            <div className="popup-menupost-container">
                <ul>
                    {
                        userId !== post[0].userId ? <li className="post-report">Report</li> : null
                    }
                    {
                        isFollowing ? <li className="post-unfollow-user" onClick={unfollow}>Unfollow</li> : userId === post[0].userId ? null : null
                    }
                    {
                        userId === post[0].userId ? <li className="post-delete-post" onClick={deletePost}>Delete</li> : null
                    }
                    <li onClick={goToPost}>Go to post</li>
                    <li onClick={copyLink}>Copy Link<input value={post[0].postUrl} readOnly id="copylink" hidden /> </li>
                    <li onClick={close}>Cancel</li>
                </ul>

            </div>

        </div>
    </>
}

export default PopupMenuPost
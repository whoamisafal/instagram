import React, { useEffect } from "react";

import axios from "axios";
import Cookies from "js-cookie";
import HOST_URL from "../proxy";
import helper from "../helper";
import UserNotLogin from "../notlogin";

function handleCaption(caption) {
    let caption_array = caption
    let patternForTags = /#[a-zA-Z0-9]+/g
    let tags = caption.match(patternForTags)

    for (let tag in tags) {
        let a = "<a href='/explore/tags/" + tags[tag].replace(/#/g,'') + "'/''>" + tags[tag] + "</a>"
        let pattern = new RegExp(tags[tag], "g")
        caption_array = caption_array.replaceAll(pattern, a)
    }
    return caption_array
}

function PostFooter(props) {
    let post = props.post;
    let calledFrom=props.calledFrom;
 
    let caption = post[0].caption;
    let timestamp = post[0].timestamp;
    let [isLiked, setIsLiked] = React.useState(false);
    let [isSaved, setIsSaved] = React.useState(false);
  let [commentParentId, setCommentParentId] = React.useState(0);
    let [commentCount, setCommentCount] = React.useState(0);
    let [comment, setComment] = React.useState("");
    let [customdate, setcustomDate] = React.useState('');
     let [isAuth, setIsAuth] = React.useState(Cookies.get('token') !== undefined);
   let [canShowNotLoggedIn, setCanShowNotLoggedIn] = React.useState(false);
    let [isMounted, setIsMounted] = React.useState(true);
   
    useEffect(() => {
        if(isMounted)
        axios.get(HOST_URL+'/get_comment_countAndCheck_user_like?postId='+post[0].postId,{
            headers: {
                'Authorization': 'Bearer ' + Cookies.get('token'),
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.status === 200) {
                setIsLiked(res.data.isLike);
                setIsSaved(res.data.isSaved);
                setCommentCount(res.data.commentCount);
            }
        })
        .catch(err => {
            console.log(err);
        })
        
        return () => {
            setIsMounted(false);
        }
    },[])
    let style = {
        fav: {
            color: isLiked ? "#ff0000" : "#000000",
            cursor: "pointer",
            userSelect: "none",
            transition: "all 0.5s ease-in-out",
            opacity: isLiked ? 0.8 : 1
        },
        comment: {
            cursor: "pointer",
            userSelect: "none",
            transition: "all 0.5s ease-in-out",
            opacity: 0.8
        },
        share: {
            cursor: "pointer",
            transform: "rotateZ(315deg)",
            userSelect: "none",
            transition: "all 0.5s ease-in-out",
            opacity: 0.8
        },
        bookmark: {
            cursor: "pointer",
            userSelect: "none"
        },
        linkStyle: {
            color: "#000000",
            textDecoration: "none",
            cursor: "pointer",
            fontSize: '12px',
            userSelect: "none",
            opacity: 0.8,
            marginTop: "7px",
            textTransform: "uppercase"
        },
        linkStyle1: {
            color: "#000000",
            textDecoration: "none",
            cursor: "pointer",
            fontSize: '12px',
            userSelect: "none",
            opacity: 0.8,
            marginTop: "7px",
            
        }

    }
    const handleLike = () => {
      
        if(!isAuth){return}
        setIsLiked(!isLiked);
        let postId = post && post[0].postId;
        let cp_userId = post && post[0].userId;
        axios.put(HOST_URL + "/like_post", {
            postId: postId,
            userId: cp_userId
        },{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token')
            }
        }).then(res => {
            if (res.status === 200) {
                //("Liked");
            }
        }).catch(err => {
            console.log(err);
        })


    }
    const handleSave = () => {
      
        if(!isAuth){return}
        axios.post(HOST_URL + "/save_post", {
            postId: post[0].postId,

        },{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token')
            }
        }).then((res) => {
            if (res.status === 200) {
                setIsSaved(!isSaved);
            }
        })
        .catch(err => {
            console.log(err);
        })


        setIsSaved(!isSaved);
    }
    
    const handleComment = () => {
      
        if(comment.length <= 0){
            return
        }
        axios.post(HOST_URL + "/comment_post", {
            postId: post[0].postId,
            comment: comment,
            commentParentId: commentParentId,
        },{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token')
            }
        }).then(res => {
            if (res.status === 200) {
               setComment('');
               setCommentCount(commentCount+1);
            }
        }).catch(err => {
            console.log(err);
        })
    }
    const handleShare = () => {

    }
    caption = handleCaption(caption)
    const handleInputChange = (e) => {
        setComment(e.target.value)
    }
    let postUrl = post[0].postUrl

    setInterval(() => {
        let currentTimestamp = new Date().getTime()
        let timeDiff = currentTimestamp - timestamp
        customdate = helper.getCustomTime(timeDiff)
        setcustomDate(customdate)

    }, 1000)
    return <>
       <UserNotLogin/>

        <div className="footer-post-buttons" >
            <div className="footer-post-left-side">
                <i className="material-icons" style={style.fav} onClick={handleLike}>{
                    isLiked ? "favorite" : "favorite_border"
                }</i>
                {/* <i className="material-icons" style={style.comment} onClick={handleComment}>comment</i>
                <i className="material-icons" style={style.share} onClick={handleShare}>send</i> */}
            </div>
            <div className="footer-post-right-side" >
                <i className="material-icons" style={style.bookmark} onClick={handleSave}>{
                    isSaved ? "bookmark" : "bookmark_border"
                }</i>
            </div>
        </div>
        <div className="footer-post-description">
            { calledFrom==="postviewer"?<></>:  <div dangerouslySetInnerHTML={{ __html: caption }} />}
           <div>
               {
                calledFrom==="postviewer"?<></>:   commentCount>0? <a href={postUrl} style={style.linkStyle1}>{commentCount>1?"View all "+commentCount+" comments":"View "+commentCount+" comment"}</a>:null
               }
           </div>
            <a href={postUrl} style={style.linkStyle} >{customdate}</a>
        </div>
        <hr />
        <div className="footer-post-input-comment">
            <input type="text" placeholder="Add a comment..." value={comment} onChange={handleInputChange} />
            <button className="send-comment" disabled={comment.length > 0 ? false : true} onClick={handleComment} >Post</button>
        </div>

    </>

}

export default PostFooter;
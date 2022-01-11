import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import './css/explore.css';
import HOST_URL from "./proxy";


function ExploreItem(props) {
    let explore=props.explore
    let [isHover,setHover]=useState(false)
    let posturl=explore && explore[0].postUrl
    let url=HOST_URL+"/"+explore && explore[0].url
    let mimetype=explore && explore[0].mimetype
    let postId=explore && explore[0].postId
    let [commentCount,setCommentCount]=useState(0)
    let [likeCount,setLikeCount]=useState(0)

    useEffect(()=>{
        axios.get('/analyze_post?postId='+postId).then((result)=>{
            if(result.status===200){
                if(result.data.status===200){
                    setCommentCount(result.data.commentCount)
                    setLikeCount(result.data.likeCount)
                }
            }

        })
        .catch((err)=>{
            console.log(err)
        })
    },[postId])



    const handleMouseOver=()=>{
        setHover(true)
    }
    const handleMouseOut=()=>{
        setHover(false)
    }

    return <>
        <div className="explore-data" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
            {
                isHover?<a href={posturl} target={'_blank'}><div className="analyze-comment-and-like" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
                   <div><b>{likeCount}</b><i className="material-icons">favorite</i></div>
                  <div>
                      <b>{commentCount}</b>
                  <i className="material-icons">comment</i>
                  </div>
                </div></a> :null
            }
            {
                mimetype.includes("image")?<img src={url} className="explore-item-image"onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut} />:null
            }
             {
                mimetype.includes("video")?<a href={posturl} target={"_blank"}><video src={url} className="explore-item-video" controls onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut} /></a>:null
            }
        </div>
    </>
}

function Explore() {

    let [explores, setExplores] = useState([])
    let [isLoading, setIsLoading] = useState(true)
    let [error, setError] = useState('')


    document.getElementsByTagName("title")[0].innerHTML = "Explore"

    useEffect(() => {
        axios.get('/explore', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token')
            }
        }).then((result) => {
            if (result.status === 200) {
                setIsLoading(false)
              
                setExplores(result.data.explores)
            }

        }).catch((err) => {
            setError("Something went wrong")
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <>Loading...</>
    }
    return <>
        {/* This is an explore main container */}
        <div className="explore-main-container">
            {/* Blank Section */}
            <section className="explore-blank-section"></section>

            {/* Data Section */}
            <section className="explore-main-data-section">
                {
                    explores && explores.map((explore, index) => {
                        return <ExploreItem explore={explore} key={index} />
                    })
                }


            </section>
            {/* Blank Section */}
            <section className="explore-blank-section"></section>


        </div>

    </>
}

export default Explore;
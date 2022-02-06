import axios from "axios";
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import HOST_URL from "../proxy";

function DashboardPostItem(props) {
    let post = props.post;
    let [item, setItem] = useState([]);
    useEffect(() => {
        setItem(post[0]);
        return () => { }
    },[post])
  
    if(item.length===0){
       
        return <></>
    }

    let style={
        containerStyle:{
            height:'175px',
            width:'175px',
            userSelect:'none',
            cursor:'pointer'

        },
        itemStyle:{
            postion:'absolute',
            height:'175px',
            width:'175px',
            objectFit:'contain',
            
        }
    }


    return <>
    {/* <div className="dashbaord-post-item-container" style={style.containerStyle}> */}
        <a href={item.postUrl}  style={style.containerStyle} > 
        {
            item.mimetype.match(/image/) ?<img className="dashboard-post-item-image" draggable={false} style={style.itemStyle} src={HOST_URL+"/"+item.url} /> : null
        }
        {
            item.mimetype.match(/video/) ? <video className="dashboard-post-item-video" draggable={false} style={style.itemStyle}  src={HOST_URL+"/"+item.url} /> : null
        }
        </a>
    {/* </div> */}
    </>
}


function DashboardPosts(props) {
    let calledFrom = props.calledFrom;
    let [posts, setPosts] = useState([]);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(false);
    let [errorMessage, setErrorMessage] = useState("");
    

    useEffect(() => {
        if(calledFrom==="dashboard_saved"){
            axios.get(HOST_URL + "/get_saved_posts",{
                headers: {
                    'content-type': 'application/json',
                    "Authorization": "Bearer " + Cookies.get("token"),

                }
            }).then(res => {
                if (res.status == 200) {
                    setPosts(res.data.posts);
                    setLoading(false);
                  
                }
            }).catch(err => {
                //(err);
                setError(true);
                setErrorMessage(err.message);
            })
        }
        else if (calledFrom == "dashboard_post") {
            axios.get("/currentuser_posts", {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " + Cookies.get("token")
                }
            }).then(res => {
                if (res.status === 200) {
                    let data = res.data;
                    if (data.status === 200) {
                        setPosts(data.posts);
                        setLoading(false);
                    }else{
                        setLoading(false);
                        setError(true);
                        setErrorMessage(data.message);
                    }

                }else{
                    setLoading(false);
                    setError(true);
                    setErrorMessage(res.data.message);
                }
            }).catch(err => {
                console.log(err);
                setError(true);
                setLoading(false);
            });
        } else {
            let userId = props.userId;

            //Check the viewer is login or not
            if (Cookies.get("token")) {
                axios.get("/login_user_posts?userId=" + userId, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: "Bearer " + Cookies.get("token")
                    }
                }).then(res => {
                    if (res.status === 200) {
                        let data = res.data;
                        if (data.status === 200) {
                            setPosts(data.posts);
                            setLoading(false);
                        }else{
                            setLoading(false);
                            setError(true);
                            setErrorMessage(data.message);
                        }
                    }else {
                        let data=res.data;
                        if(data.status===403){
                            setLoading(false);
                            setError(true);
                            setErrorMessage(data.message);
                          
                        }else{
                            setError(true);
                            setErrorMessage("Something went wrong");
                            setLoading(false);
                        }
                    }
                }).catch(err => {
                    console.log(err);
                    setLoading(false);
                    setError(true);
                });
            }else{
                axios.get("/otheruser_posts?userId=" + userId, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }).then(res => {
                    if (res.status === 200) {
                        let data = res.data;
                        if (data.status === 200) {
                            setPosts(data.posts);
                            setLoading(false);
                        }else {
                            let data=res.data;
                            if(data.status===403){
                                setError(true);
                                setErrorMessage(data.message);
                                setLoading(false);
                            }else{
                                setError(true);
                                setErrorMessage("Something went wrong");
                                setLoading(false);
                            }
                        }
                    }
                }).catch(err => {
                    console.log(err);
                    setLoading(false);
                    setError(true);
                });
            }


         
        }





        return () => { }
    }, [calledFrom])
    if(error){
        return <div>{errorMessage}</div>
    }

    if (loading) {
        return <div className="loading-posts">Loading...</div>
    }
    let style={
        display:"flex",
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
        columnGap:"10px",
        flexWrap:"wrap",
        rowGap:"10px",

    }

    return (
        <div className="dashboard-post-main-container" style={style}>
            {posts.length == 0 ? <div>No posts</div> : null}
            {
                posts && Array.from(posts).map((post, index) => {
                    return <DashboardPostItem key={index} post={post} />
                })
            }

        </div>
    );
}

export default DashboardPosts;
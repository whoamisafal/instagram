import axios from "axios";
import React, { useEffect } from "react";
import HOST_URL from "./proxy";
import './css/tagview.css';

function TagPostView(props) {
    let post = props.post;
    let postUrl=post && post[0].postUrl
    let url=post && HOST_URL+"/"+post[0].url;
    let mimeType=post && post[0].mimetype;
    return <>
    <a href={postUrl} className="tag-post-link">
        <div className="tags-post-content">

            {
                mimeType.includes("image") ?<img src={url} draggable={false} alt={url} className="tags-post-image" /> :
                mimeType.includes("video") ? <video src={url} draggable={false} className="tags-post-video" controls></video> :null
            }

        </div>
        </a>

    </>
}

function TagView(props) {
    let tag = props.match.params.tag;
    let [data, setData] = React.useState([]);
    let [isLoading, setIsLoading] = React.useState(true);
    let [isError, setIsError] = React.useState(false);
    let [isImage, setIsImage] = React.useState(false);
    let [imageurl, setImageurl] = React.useState('');
    let [errorMessage, setErrorMessage] = React.useState('');

    useEffect(() => {
        axios.get(HOST_URL + "/tags?tag=" + tag, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                if (res.status === 200) {
                    if (res.data.status == 200) {
                        setData(res.data.posts);
                        setIsLoading(false);
                        if (res.data.posts.length > 0) {
                            setIsImage(res.data.posts[0][0].mimetype.match(/image/));
                            setImageurl(res.data.posts[0][0].url)
                        }
                    } else {
                        setIsError(true);
                        setErrorMessage(res.data.message);
                    }
                } else if (res.status === 403) {
                    setErrorMessage(res.data.message)
                    setIsError(true)
                }
            })
            .catch(err => {
                setErrorMessage(err.message)
                setIsError(true);
            })
    }, [tag])



    if (isError) {
        return <div>{errorMessage}</div>
    }

    return <>
        <div className="tag-main-container">
            <header className="tag-view-header">
                <div className="tag-view-header-left-side">
                 {isImage? <img src={HOST_URL + "/" + imageurl} draggable={false} className="tag-view-header-image" />:null}
                {!isImage? <video src={HOST_URL + "/" + imageurl} draggable={false}  className="tag-view-header-video"></video>:null}
                </div>
                <div className="tag-view-header-right-side">
                    <h1>{"#" + tag}</h1>
                    <div className="tag-post-count">
                        {data && data.length > 1 ? data && data.length + " posts" : data && data.length == 1 ? "1 post" : "No posts"}
                    </div>
                </div>

            </header>
            <div className="tag-main-content">
                <div><p className="tag-post">Posts</p></div>
                {data && data.length == 0 ? <h1>No posts</h1> :
                    <div className="tag-post-contents">
                        {data && data.map((post, index) => {
                            return <TagPostView post={post} key={index} />
                        })}</div>}
            </div>
        </div>
    </>
}
export default TagView;

import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useCallback, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import PostList from './component/PostList';
import Suggestion from './component/suggestions';
import Toast from './component/toast';
import './css/home.css';

import HOST_URL from './proxy';

function PostAndSuggestionListItem(props) {
    let index = props.index
    let userId = props.userId
    let post = props.post
    return <>
        <Suggestion key={'suggestions' + index} type={'scroll-bar'} />
        <PostList key={index} post={post} userId={userId} />
    </>
}


function Home(props) {

    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [isFetchingError, setIsFetchingError] = useState(false);
    const [userId, setUserId] = useState(0);
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(0);
    const [reachMax, setReachMax] = useState(false);
    const [isFooterLoading, setIsFooterLoading] = useState(false);
    const [isDeletedPost, setIsDeletedPost] = useState(false);
    const [duration, setDuration] = useState(3);
 

  
    document.getElementsByTagName("title")[0].innerHTML = "Instagram";

    const handlleScroll = useCallback(() => {
        const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight
        if (reachMax) {
            setIsFooterLoading(false)
            return
        }
        if (bottom) {
            setTimeout(() => {
                if (!reachMax) {
                    setIsFooterLoading(true);
                }

            }, 1000)
        }
    })
    useEffect(() => {
        document.addEventListener('scroll', handlleScroll)
        return () => {
            clearTimeout(1000)
            document.removeEventListener('scroll', handlleScroll)
        }

    }, [handlleScroll])

    const filterPost = (newPosts) => {
        let filter = newPosts.filter((ele, ind) => ind === newPosts.findIndex(elem => elem[0].postId === ele[0].postId))
        return filter
    }

    useEffect(() => {

        if (reachMax === true) {
            setIsFooterLoading(false)
            return
        }
        if (!reachMax)

            axios.get(HOST_URL + '/posts?offset=' + offset + "&limit=" + limit, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + Cookies.get('token')
                }
            }).then(res => {
                if (res.status === 200) {
                    if (res.data.status === 403) {
                        Cookies.remove('token')
                        window.location.href = "/login"
                    }
                }
                if (res.status === 200) {
                    if (reachMax) {
                        setIsLoading(false);
                    }
                    if (res.data.reachMax) {
                        setReachMax(true);
                        setIsLoading(false);
                        //Reached Max

                    } else {

                        setPosts(filterPost(posts.concat(res.data.posts)));

                        setIsLoading(false);
                        setUserId(res.data.userId);
                    }

                } else {
                    setIsFetchingError(true);
                    setIsLoading(false);
                }
            })
                .catch(err => {

                    setIsFetchingError(true);
                    setIsLoading(false);
                })

        return () => {


        }
    }, [limit]);

    useEffect(() => {
        setTimeout(() => {
            isDeletedPost && setIsDeletedPost(false)
        }, duration * 1000)
        return () => {
            clearTimeout(duration * 1000)
        }
    }, [isDeletedPost])


    let token = Cookies.get('token')
    if (token === undefined) {
        return <Redirect to="/login" />
    }
    if (isFetchingError) {
        return <h1>Error</h1>
    }
    const remove = (post) => {
        let newPosts = posts.filter(p => p !== post)
        setPosts(newPosts)
        setIsDeletedPost(true)
    }
    const loadMore = () => {
        setTimeout(() => {
            setOffset(limit + 1)
            setLimit(limit + 10)
        }, 500)
    }

    return <>
        {
            isDeletedPost ? <Toast message={'Post Deleted'} duration={duration} /> : null
        }

        <div className="main-home-container" onScroll={handlleScroll}>
            {/* Blank Section */}
            <section className="main-home-blank-section">

            </section>
            {/* Post Section */}
            <section className="post-stories-section">

                {/* Stories section */}
                {/* <section className="stories-section">

                    <div className="stroy-section"></div>
                    <div className="stroy-section"></div>

                </section> */}
                {/* Post Section */}


                <section className="post-sections">
                    {
                        isLoading ? <></> : posts && posts.length == 0 ? <Suggestion key={'suggestions'} type={'scroll-bar'} /> : null
                    }
                    {
                        isLoading ? <>Loading...</> : posts && Array.from(posts).map((post, index) => {
                            if (index == 5 || index == 25) {
                                return <PostAndSuggestionListItem key={post[0].postId} index={index} post={post} userId={userId} />
                            }

                            return <PostList key={post[0].postId} index={index} post={post} userId={userId} remove={remove} />
                        })
                    }
                    {
                        isFooterLoading ? <div className='post-load-more' onClick={loadMore}> <span className='material-icons'>add_circle_outline</span>Load More </div> : null
                    }



                </section>

            </section>
            {/* Suggestion Section */}
            <section className="suggestions-section">
                <div className="suggestion-box">
                    <Suggestion key={'suggestions-1'} type={'vertical-bar'} />
                </div>
            </section>
        </div>

    </>

}


export default Home;
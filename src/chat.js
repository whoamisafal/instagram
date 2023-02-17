import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Redirect, Link, useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './css/chat.css';
import './css/root.css';

import io from 'socket.io-client';
import HOST_URL from './proxy';
import Cookies from 'js-cookie'
import helper from './helper';
const socket = io(HOST_URL);

function StartConveration(props) {
    let [countMessageRequest, setCountMessageRequest] = useState(0)

    useEffect(() => {
        axios.get(HOST_URL + '/count_message_request', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token')
            }
        }).then((result) => {
            if (result.status === 200) {
                setCountMessageRequest(result.data.count)
            }


        }).catch((e) => {

        })
        return (() => { })

    }, [])




    return <>
        <div className='message-request-container'>

            <div className='chat-request'>
                <Link to='/inbox/request'>{'Message request(' + countMessageRequest + ')'}</Link>
            </div>
        </div>
        <div className="send-message-container">

            <div className='center'>
                <p><b>Start a converstation</b></p>
                <div className='send-message-btn-container'> <button><Link to={'/inbox/new/'}>Send Message</Link></button></div>
            </div>
        </div>
    </>
}
function ButtonAcceptAndIgnore(props) {
    let className = props.className
    let handle = props.handle
    let name = props.name

    return <>
    <button onClick={handle} className={className}>{name}</button>
    </>
}


function UserRequestItem(props) {
    let user = props.user
    let profile = HOST_URL + '/' + user.profile
    let [ignore,setIgnore]=useState(false)
    let [accept,setAccept]=useState(false)
    
    const handleAccept=()=>{
        axios.get(HOST_URL + '/accept_chatrequest?id='+user.id+'&cuid='+user.userId, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token')
            }
        }).then((res)=>{
            if(res.status===200){
                console.log(res.data);
            }

        }).catch((err)=>{

        })


        setAccept(!accept)
    }
    const handleIgnore=()=>{
        axios.get(HOST_URL + '/ignore_chat?cuid='+user.userId, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token')
            }
        }).then((res)=>{
            if(res.status===200){
                console.log(res.data);
            }

        }).catch((err)=>{

        })
        setIgnore(!ignore)
        
    }
    return <>
        <div className='user-request-item'>
            <div className='user-request-item-info'>
                <img src={profile} className='user-request-item-image' />
                <div className='user-request-item-userdetails'>
                   <a href={'/'+user.username} style={{textDecoration:'none',color:'#000'}}> <h3> {user.username}</h3></a>
                   
                </div>
            </div>
            <div className='user-request-button'>
               {
                   accept?null: <ButtonAcceptAndIgnore name={!ignore?"Ignore":"Ignored"} key={ignore?"Ignore":"Ignored"}  className={!ignore?"Ignore":"Ignored"} handle={handleIgnore}/>
               }
                {
                    ignore?null:<ButtonAcceptAndIgnore name={!accept?"Accept":"Accepted"} key={accept?"Accept":"Accepted"} className={!accept?"Accept":"Accepted"} handle={handleAccept}/>
                }
            </div>

        </div>
    </>
}


function MessageRequestView(props) {
    let [userRequests, setUserRequests] = useState([])
    let [isLoading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(HOST_URL + '/get_all_message_request', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token')
            }
        }).then((result) => {
            if (result.status === 200) {
                setUserRequests(result.data.requests);
                setLoading(false)
            }
        }).catch((e) => {
            setLoading(false)
        })
        return (() => { })

    }, [])

    if (isLoading) {
        return <>
            Loading...
        </>
    }

    return <>
        <div className='message-request-view-main-container'>
            {
                isLoading ? null : userRequests.length === 0 ? <h3>No requests</h3> : null
            }
            {
                isLoading ? null : userRequests && Array.from(userRequests).map((user, index) => {
                    return <UserRequestItem user={user} />
                })
            }
        </div>
    </>


}


function ContainerBox() {
    const [userInfo, setUserInfo] = useState({
        fullname: '',
        username: '',
        profile: ''

    })
    const [isLoading, setLoading] = useState(true)


    useEffect(() => {
        axios.get(HOST_URL + '/current_user_info', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token')
            }
        })
            .then(res => {
                if (res.status === 200) {
                    const data = res.data
                    //.log(data)
                    setUserInfo({
                        fullname: data.fullname,
                        username: data.username,
                        profile: data.profile,
                    })
                    setLoading(false)
                }


            })
            .catch(err => {
                //.log(err);
            })
            return (() => { })
    }, [])


    return <>
        <div className="chat-container-box">
            <Router>
                <section className="people-message-section">
                    {/* Current User Profile Section */}
                    <div className="current-user-profile-section">
                        <span className="current-user-profile">
                            <img src={HOST_URL + "/" + userInfo.profile} className='current-user-profile-image' alt={userInfo.username} height={'50px'} width={'50px'} />
                            <Link to='/inbox' style={{
                                color: '#000',
                                textDecoration: 'none'
                            }}> <h4>{userInfo.username}</h4></Link>
                        </span>

                    </div>
                    {/* People Section  */}
                    <div className="chat-people-section">
                        <ChatUserList />
                    </div>
                </section>
                {/* Message Section */}
                <section className="message-section">
                    <Switch>
                        <Route exact path={'/inbox'}>
                            <StartConveration />
                        </Route>
                        <Route exact path={'/inbox/request'}>
                            <MessageRequestView />
                        </Route>
                        <Route exact path={'/inbox/new/'}>
                            <SearchPeopleToConverstation key={2} />
                        </Route>
                        <Route exact path={'/inbox/:username'} render={(props) => <ChatWith {...props} />} />

                    </Switch>

                </section>
            </Router>
        </div>
    </>
}

function ChatUserList(props) {
    const [users, setUsers] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [currentUid, setCurrentUid] = useState(0)

    useEffect(() => {
        axios.get(HOST_URL + '/get_all_chatusers', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token')
            }
        })
            .then(res => {
                if (res.status === 200) {
                    const data = res.data
                    //.log(data)
                    setCurrentUid(data.currentUserId)
                    setUsers(data.users)
                    setLoading(false)
                }
            })
            .catch(err => {
                //.log(err);
            })
            return (() => { })
    }, [])


    if (isLoading) {
        return <>
            <h3>Loading...</h3>
        </>
    }
    return <>
        {
            Array.from(users).map((user, index) => {
                if(user.userId===currentUid){
                    return null
                }
                return <ChatUser key={index} user={user} />
            })
        }

    </>
}
function ChatUser(props) {
    let user = props.user
    let history = useHistory()
    let currentTimestamp = new Date().getTime()
    let lastMessageTime = user.timestamp
    //.log(currentTimestamp, lastMessageTime);
    let timeDiff = currentTimestamp - lastMessageTime
    let customTime =helper.getCustomTime(timeDiff)
    //.log(new Date(lastMessageTime * 1000).toLocaleString());
    const handleClick = (e) => {
        e.preventDefault()
        history.push(`/inbox/${user.username}`)
    }
    let style = {
        link: {
            textDecoration: 'none',
            color: 'black'
        }
    }
    return <>
        <Link to={"/inbox/" + user.username} style={style.link}>
            <div className='chat-user' onClick={handleClick}>

                <img src={HOST_URL + "/" + user.profile} className='chat-user-profile' alt={user.username} />
                <h4 className='chat-username'>{user.fullname}</h4>

            </div>
        </Link>
    </>
}


function ChatWith(props) {
    let username = props.match.params.username
    let [error, setError] = useState(false)
    let [usernotfound, setUsernotfound] = useState(false)
    const [userInfo, setUserInfo] = useState({
        fullname: '',
        username: '',
        profile: '',
        userId: 0,

    })
    // //.log("You are in chat with: " + username)
    useEffect(() => {

        axios.post(HOST_URL + '/other_user_profile/', {
            username: username
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token')
            }
        })
            .then(res => {
                const data = res.data[0]
                //  //.log(res.status)
                if (data.status === 403) {
                    setUsernotfound(true)
                }
                if (res.status == 200) {
                    setUserInfo({
                        fullname: data.fullname,
                        username: data.username,
                        profile: data.profile,
                        userId: data.userId
                    })
                } else {
                    setError(true)
                }
            }).catch(err => {
                //.log(err);
            })

        // //.log("Fetch info" + userInfo.userId)

        if (userInfo.userId != 0 || userInfo.userId != undefined)
            axios.post(HOST_URL + '/create_a_chat/', {
                users: [{ userId: userInfo.userId, username: userInfo.username }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + Cookies.get('token')
                    }
                }],
            }).catch(err => {
                setError(true)
            })

            return () => {}

    }, [username])

    document.getElementsByTagName("title")[0].innerHTML = username;
    if (error) {
        return <>
            <div>
                <h1>Something went wrong </h1>
                <h1>Please try again later</h1>
            </div>
        </>
    }
    if (usernotfound) {
        return <>
            <div>
                <h1>User not found</h1>
                <Link to={'/inbox'}>Back to inbox</Link>
            </div>
        </>
    }

    return <>
        <HeaderChatWithDetails user={userInfo} />
        <ChatBox reciverInfo={userInfo} username={username} />
    </>
}
function ChatBox(props) {
    const reciverInfo = props.reciverInfo
    //.log("This is from chat box" + reciverInfo.userId);
    const [isSend, setIsSend] = useState(false)
    const isSendMessage = () => {
        setIsSend(true)
    }
    return <>
        <div className='chat-viewer-container'>
            <ChatViewer reciverInfo={reciverInfo} />
        </div>
        <div className='chat-input-container'>
            <ChatInputContainer reciverInfo={reciverInfo} isSend={isSend} />
        </div>
    </>
}
function ChatViewer(props) {
    const reciverInfo = props.reciverInfo
    let receiverId = reciverInfo.userId
    const [update, setUpdate] = useState(true)
    const [currentUserId, setCurrentUserId] = useState(0)
    const isSend = props.isSend
    const [messages, setMessages] = useState([])

    useEffect(() => {

        axios.post(HOST_URL + '/get_chat_messages/', {
            receiverId: receiverId
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token')
            }
        })
            .then(res => {
                const data = res.data
                if (res.status === 200) {
                    setMessages(data.messages)

                    setCurrentUserId(data.userId)
                    setUpdate(false)
                }

            })
            .catch(err => {
                setUpdate(false)
                //.log(err);
            })
            return () => {}

    }, [receiverId, update])
    socket.on('replay', (data) => {
        setUpdate(true)
    })

    return <>
        <ul>
            {
                messages.map((message, index) => {
                    return <MessageView key={index} userId={currentUserId} reciverInfo={reciverInfo} message={message} />
                })
            }
        </ul>
    </>
}
function MessageView(props) {
    let reciverInfo = props.reciverInfo
    let message = props.message
    let currentUserId = props.userId
    let [customTime, setCustomTime] = useState('')
    let sentMessageTimestamp = message.timestamp
    setInterval(() => {
        let currentTimestamp = new Date().getTime()
        let timeDiff = currentTimestamp - sentMessageTimestamp
       let  current_custom_time = helper.getCustomTime(timeDiff)
        setCustomTime(current_custom_time)
    }, 5000)



    let messageview = <></>
    if (message.senderId == currentUserId) {
        messageview = <li className='message-viewer-sender'>
            <div className='message-current-user' >
                <p className='message-time'>{customTime}</p>
                <p className='message-send-by-current-user'>{message.message}</p>

            </div>
        </li>
    } else {
        messageview = <li className='message-viewer-reciver'>
            <div className='message-receiver-information'>
                <img src={HOST_URL + "/" + reciverInfo.profile} className='message-receiver-profile' />
                <b className='message-receiver-name'>{reciverInfo.username}</b>
            </div>
            <div className='message-other-user'>
                <p className='message-send-by-other-user'>{message.message}</p>
                <p className='message-time'>{customTime}</p>
            </div>
        </li>
    }
    return messageview

}

function ChatInputContainer(props) {
    let reciverInfo = props.reciverInfo

    const [message, setMessage] = useState('')
    const [reference, setReference] = useState(0)
    const [canSendMessage, setCanSendMessage] = useState(false)

    const handleChange = (e) => {
        setMessage(e.target.value)
    }
    const sendImageMessage = (e) => {


    }
    useEffect(() => {

        if (canSendMessage) {
            axios.post(HOST_URL + '/send_message_text/', {
                receiverId: reciverInfo.userId,
                message: message,
                messageReference: reference

            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + Cookies.get('token')
                }
            })
                .then(res => {

                    if (res.status === 200) {
                        setMessage('')
                        socket.emit('message', {
                            receiverId: reciverInfo.userId,
                        })
                    }
                    setCanSendMessage(false)
                })
                .catch(err => {
                    setCanSendMessage(false)
                    setMessage('')
                })
        }
        
        return () => {}
    }, [canSendMessage])

    const sendMessage = () => {
        setCanSendMessage(true)
    }


    let rightSideInput = <></>
    if (message.length > 0) {
        rightSideInput =
            <button className='send-message' onClick={sendMessage}>Send</button>

    } else {
        rightSideInput = <>
            <div className='chat-right-side'>
                {/* <label htmlFor='choose-message-image'><i className='material-icons'>insert_photo</i></label>
                <input type={'file'} id='choose-message-image' className='choose-message-image' multiple={false} onChange={sendImageMessage} name='choose-message-image' hidden /> */}
            </div>
        </>
    }

    return <>
        <textarea type={'text'} maxLength={'500'} value={message} placeholder='Message...' onChange={handleChange} />
        {rightSideInput}
    </>
}


function HeaderChatWithDetails(props) {
    let user = props.user

    return <>
        <div className='chat-with-main-container'>
            <div className='chat-with-left-side'>
                <img src={HOST_URL + "/" + user.profile} className='chat-with-image' alt={user.username} height={'30px'} width={'30px'} />
                <span><h4>{user.username}</h4></span>
            </div>
            <div className='chat-with-right-side'>
            </div>
        </div>
    </>
}



function SearchPeopleToConverstation(props) {
    const [userInfo, setUserInfo] = useState([])
    const [searchData, setSearchData] = useState('')
    const [isLoading, setLoading] = useState(false)
    const [selectedUser, setselectedUser] = useState([])
    const [isCloseBtnClicked, setCloseBtnClicked] = useState(false)
    const [isCreateAChat, setIsCreateAChat] = useState(false)
    const [username, setUsername] = useState('')

    useEffect(() => {
        if (searchData.length == 0) {
            setLoading(false)
            return
        }
        axios.get(HOST_URL + '/search?q=' + searchData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token')
            }
        })
            .then(res => {
                if (res.status === 200) {
                    const data = res.data
                    setUserInfo(data)
                }
                setLoading(false)

            })
            .catch(err => {
                //.log(err);
                setLoading(false)
            })
            
            return () => {}

    }, [searchData, selectedUser])

    const handleInput = (e) => {
        const value = e.target.value
        setLoading(true)
        setSearchData(value)
    }
    const handleSelect = (userId, username) => {

        let result = checkDuplicate(userId)

        if (result) {
            let filtered = selectedUser.filter(user => user.userId !== userId)
            setselectedUser(filtered)
        } else {
            setselectedUser(selectedUser.concat({ userId: userId, username: username }))
        }
    }
    const checkDuplicate = (userId) => {
        for (let index = 0; index < selectedUser.length; index++) {
            if (selectedUser[index].userId === userId) {
                return true

            }
        }
        return false
    }
    const popupClose = () => {
        setCloseBtnClicked(true)
    }
    if (isCloseBtnClicked) {
        return <Redirect to={'/inbox'} />
    }
    const createAChat = () => {
        axios.post(HOST_URL + '/create_a_chat/', {
            users: selectedUser
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token')
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    let data = res.data
                    let username = data.username
                    setUsername(username)
                    setIsCreateAChat(true)
                } else {
                    popupClose()
                }
            }).catch((err) => {
                //.log(err);
            })


    }

    if (isCreateAChat) {
        return <Redirect to={'/inbox/' + username} />
    }

    return <>
        <div className='inbox-popup-main-container'>
            <div className='popup-main-container'>
                <div className='popup-header'>
                    <b onClick={popupClose}>&times;</b>
                    <span><h4>New Message</h4></span>
                    <span><button disabled={selectedUser.length > 0 ? false : true} onClick={createAChat}>Next</button></span>
                </div>
                <div className='popup-body'>
                    <div className='popup-body-left'>
                        <p><b>To:</b></p>
                    </div>
                    <div className='popup-body-right'>
                        <div className='selected-people'>
                            {selectedUser.map((user, index) => {
                                return <SelectedPeople user={user} key={index} handleSelect={handleSelect} />
                            })}
                        </div>
                        <div className='search-section'>
                            <input type='text' value={searchData} className='search-chat-people' placeholder='Search People' onChange={handleInput} />
                        </div>
                    </div>
                </div>
                <div className='popup-footer'>
                    {isLoading ? <><h1>Loading...</h1></> : userInfo && userInfo.length === 0 ? <p>No Suggestions</p> :
                        userInfo.map(user => <SuggestedPeople user={user} key={user.userId} selectedUser={selectedUser} checkDuplicate={checkDuplicate} handleSelect={handleSelect} />)
                    }
                </div>

            </div>
        </div>

    </>
}


function SelectedPeople(props) {
    let user = props.user
    //.log(user);
    let handleSelect = props.handleSelect
    const remove = () => {
        handleSelect(user.userId, user.username)
    }

    return <>
        <div className='selected-people-container'>
            <span>{user.username}</span>
            <span className='selected-people-close-btn' onClick={remove}  >&times;</span>
        </div>
    </>
}

function SuggestedPeople(props) {
    let handleSelect = props.handleSelect
    let user = props.user
    let result = props.checkDuplicate(user.userId)
    const select = () => {
        handleSelect(user.userId, user.username)
    }


    return <>
        <div className='suggested-people-container'>

            <div className='suggested-left-side' onClick={select}>
                <img src={HOST_URL + "/" + user.profile} className='suggested-people-image' alt={user.username} />
                <h4>{user.username}</h4>
            </div>

            <div className='suggested-right-side'>
                <input type={'radio'} id='select-user' name={user.username} checked={
                    result ? true : false
                } value={user.username} className='radio-btn' onChange={select} onClick={select} multiple />
            </div>
        </div>
    </>
}



function Chat(props) {

    document.getElementsByTagName("title")[0].innerHTML = "Inbox";


    if (!props.isAuth) {
        return <Redirect to="/login" />
    }

    return <>
        <div className="main-chat-container">
            {/* Blank Section */}
            <section className="chat-blank-section"></section>
            {/* Chat Section */}
            <section>
                <ContainerBox />
            </section>

            {/* Blank Section */}
            <section className="chat-blank-section"></section>
        </div>

    </>
}

export default Chat;

import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import './css/register.css'
import HOST_URL from "./proxy";




function EmailSignUp(props) {

    const [userInfo, setUserInfo] = React.useState({
        email: "",
        pswd: "",
        fullname: "",
        username: "",
    })
    const [email, setEmail] = React.useState("");
    const history=useHistory()
    const [btnState, setBtnState] = React.useState(true)
    const [errorMessage, setErrorMessage] = React.useState("")
    const [hasError, setHasError] = React.useState(false)
    const [isRegister, setIsRegister] = React.useState(false)
    //const [field, setField] = useState('')
  
    useEffect(() => {
        if (isRegister) {
            setTimeout(() => {
                history.push("/login") 
            }, 3000)
        }
        return () => { 
           setTimeout(() => {
            setIsRegister(false)
           },2500)
        }
    },[isRegister])
    useEffect(() => {
        if (userInfo.email !== "" && userInfo.fullname !== "" && userInfo.username !== "" && userInfo.pswd !== "") {
            setBtnState(false)
        } else {
            setBtnState(true)
        }
        return () => {
            setBtnState(true)
        }
    }, [userInfo])


    const handleSubmit = async (e) => {
        e.preventDefault();


        axios.post(HOST_URL + '/accounts/emailsignup', {
            ...userInfo
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    let data = res.data
                    if (data.status === 200) {
                        Cookies.set("email_verify_token", data.token, { expires: 1 })
                        setEmail(userInfo.email)
                        setIsRegister(true)
                        setUserInfo({
                            email: "",
                            pswd: "",
                            fullname: "",
                            username: "",
                        })
                        window.location.href = "/accounts/verify/email/"
                    
                        setHasError(false)
                        setErrorMessage("")
                    } else if (data.status === 403) {
                        setErrorMessage(data.message)
                        setHasError(true)
                    }
                }else{
                    setErrorMessage("Something went wrong")
                    setHasError(true)
                }
            })
            .catch(err => console.log(err))

    }
    const onchangeInput = (e) => {
        setUserInfo({
            ...userInfo, [e.target.name]: e.target.value
        })

    }

    let token = Cookies.get('token');

    if (token != undefined) {
        return <Redirect to="/" isAuth={this.props.isAuth} />
    }
    return <>
        <div className="main-register-container">
            {/* Blank Section */}
            <section className="email-blank-section"></section>


            {/* Register main Container */}
            <section className="register-main-container">
                {/* Form Section */}
                <section className="register-form-section">

                    {/* App Name Section */}
                    <div className="app-name-section-register"><h1>Instagram</h1></div>
                    {/* App Description section */}
                    <p className="short-page-description">
                        Sign up to see photos and videos from your friends.
                    </p>

                    {/* Divider */}
                    <div className="divider-register">
                        <span className="divider-section-register"><b>OR</b></span>
                    </div>


                    <form method="POST" className="register-form" id="register-form" onSubmit={handleSubmit} >
                        {/* Email Field */}


                        <input className="email-field-register" value={userInfo.email} onChange={onchangeInput} name="email" id="email" type="email" placeholder="Email" /><br />



                        <input type="text" placeholder="Full Name" value={userInfo.fullname} onChange={onchangeInput} name="fullname" id="fullname" /><br />


                        <input type="text" placeholder="Username" value={userInfo.username} onChange={onchangeInput} name="username" id="username" /><br />


                        <input type="password" placeholder="Password" value={userInfo.pswd} onChange={onchangeInput} name="pswd" id="pswd" autoComplete="" /><br />


                        <input className="submit" type="submit" value="Register" disabled={btnState} /><br />

                    </form>
                    {/* Alert */}
                    <div className="alert-register">
                        {
                            hasError ? <p className="error">{errorMessage}</p> : null
                        }
                        {
                            isRegister ? <p className="success">Successfully Registered</p> : null
                        }
                    </div>


                    {/* Term and Conditions and cookies */}
                    <p className="term-and-conditions">
                        By signing up, you agree to our Terms , Data Policy and Cookies Policy .
                    </p>


                </section>


                {/* Switch to Login Section */}

                <section className="switch-login-section">
                    <span>Have an account?</span>
                    <span><a href="/login">Login</a></span>
                </section>

                {/* End of Switch Login Section */}
            </section>
            {/* End */}


            {/* Blank Section */}
            <section className="email-blank-section"></section>



        </div>
    </>


}


export default EmailSignUp;
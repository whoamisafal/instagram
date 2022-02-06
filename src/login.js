import axios from "axios";
import React from "react";
import { Redirect } from "react-router-dom";

import './css/login.css';
import HOST_URL from "./proxy";
import Cookies from "js-cookie";


class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogin: false,
            email: '',
            fullname: '',
            username: '',
            pswd: '',
            isLoginFail: false,
            message: '',
            btnState: true
        };
    


        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeFullName = this.onChangeFullName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        });
        if (e.target.value.length > 0) {
            this.setState({
                btnState: false
            })
        }
    }
    onChangeUserName = (e) => {
        this.setState({
            username: e.target.value
        });
    }
    onChangeFullName = (e) => {
        this.setState({
            fullname: e.target.value
        });
    }
    onChangePassword = (e) => {
        this.setState({
            pswd: e.target.value
        });
    }
    handleCookie = (token) => {
        try {
            Cookies.set('token', token, { expires: 1, path: '/' });
        } catch (error) {
            console.log("Failed to set cookie");
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            btnState: true
        });

        axios.post(HOST_URL + '/login', {
            email: this.state.email,
            password: this.state.pswd
        }, {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
        }

        ).then(res => {
            let data = res.data;
            if (res.status === 200) {
                if (data.status === 200) {
                    Cookies.set('username', data.username);
                    localStorage.setItem('username', data.username);
                    this.handleCookie(data.token);
                    this.setState({
                        isLogin: true,
                        isLoginFail: false,
                        isAuth: true,
                    })
                    window.location.href = "/";
                } if (data.status === 201) {
                    Cookies.set('email_verify_token', data.token);
                     window.location.href="/accounts/verify/email/";   
                }else {
                    this.setState({
                        isLogin: false,
                        isLoginFail: true,
                        message: data.message
                    })
                }
            } else if (res.status === 401) {
                this.setState({
                    isLogin: false,
                    isLoginFail: true,
                    message: res.data.message
                })
            }
        }).catch(err => {
            console.log(err);
        })

        document.getElementsByTagName('form')[0].reset();
        this.setState({
            email: '',
            fullname: '',
            username: '',
            pswd: '',
            error: '',
            btnState: true
        });

    }



    render() {
        if (this.props.isAuth) {
            return <Redirect to="/" isAuth={this.state.isAuth} />
        }
        if (this.state.isLogin) {
            return <Redirect to="/" isAuth={this.state.isLogin} />
        }


        return <>
            {/* Login Page Main Container */}
            <div className="main-container-login">

                {/* Design Section */}
                <section className="design-section-login-page"></section>
                {/* End of Design Section */}


                {/* Form Section */}
                <section className="main-login-form-container">

                    {/* Form Container */}
                    <section className="login-form-section">

                        {/* App Name Section */}
                        <div className="app-name-section-login"><h1>Instagram</h1></div>



                        <form method="POST" className="login-form" id="login-form" onSubmit={this.handleSubmit} >
                            {/* Email Field */}
                            <input className="email-field-login" value={this.state.email} onChange={this.onChangeEmail} name="email" id="email" type="email" placeholder="Email" required />
                            <input type="password" placeholder="Password" className="login-password" value={this.state.pswd} onChange={this.onChangePassword} name="pswd" id="pswd" required />
                            <input className="submit" type="submit" value="Login" disabled={this.state.btnState} />
                        </form>

                        {/* End of Form Container */}


                        {/* Error Section */}
                        <div className="error-section-login">
                            {this.state.isLoginFail ? <p>{this.state.message}</p> : null}

                        </div>
                        {/* End Error Section */}

                        {/* Forget password Section*/}
                        <div className="forget-password-section">


                            <a href="/accounts/password/reset">Forgot password?</a>


                        </div>
                        {/* End Section */}


                    </section>
                    {/* End Form Container */}



                    {/* Switch to the signup page */}
                    <div className="switch-to-signup-container">
                        <span>
                            Don't have an account?
                        </span>
                        <span><a href="/accounts/emailsignup">Sign up</a></span>


                    </div>
                    {/* End switch container */}



                </section>
                {/* End Section */}


                {/* End */}
            </div>


        </>
    }



}

export default Login;
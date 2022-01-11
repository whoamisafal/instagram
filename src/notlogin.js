import Cookies from "js-cookie";
import React from "react";
import { NavLink } from "react-router-dom";
import './css/auth.css'
function UserNotLogin(params) {
    let [isAuth, setIsAuth] = React.useState(Cookies.get('token') !== undefined);



    if (isAuth) {
        return <></>
    }
    return <>
        <div className="not-login-message-show-container">
            <div className="not-login-message-show-container-header">
                <div className="not-login-message-show-container-inner-title-text">
                    You are not logged in
                </div>
            </div>
            <div className="not-login-message-show-container-body">
                <div className="not-login-message-show-container-login">
                    <NavLink to={'/login'}>Login</NavLink>
                </div>
                <div className="not-login-message-show-container-register">
                    <NavLink to={'/accounts/emailsignup'}>Register</NavLink>
                </div>
            </div>
        </div>

    </>

}

export default UserNotLogin;
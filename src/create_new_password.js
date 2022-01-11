import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import './css/create_new_password.css'
import HOST_URL from "./proxy";

function CreateNewPassword(props) {
    let { pcode } = props.match.params
    let [message, setMessage] = React.useState("")
    let [isPasswordChange, setIsPasswordChange] = React.useState(false)
    let [passwords, setPasswords] = React.useState({
        newPassword: '',
        confirmPassword: ''
    })
    let history=useHistory()
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (passwords.newPassword.length === 0 || passwords.confirmPassword.length === 0) {
            setMessage("Please enter password")
            return
        }
        if (passwords.newPassword === passwords.confirmPassword) {
            changePassword()
        } else {
            setMessage("Password do not match")
        }

    }
    const changePassword = () => {
        axios.post(HOST_URL + '/create_new_password', {
            pcode: pcode,
            password: passwords.newPassword,
            confirmPassword: passwords.confirmPassword
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            if (res.status === 200) {
                if (res.data.status === 200) {
                    setIsPasswordChange(true)
                    setMessage("Password changed successfully")
                 
                } else {
                    setIsPasswordChange(false)
                    setMessage(res.data.message)

                }
            } else {
                setMessage("Something went wrong")
                setIsPasswordChange(false)
            }
        }).catch((err) => {
            setMessage("Something went wrong")
            setIsPasswordChange(false)
        })
    }
    const handleChange = (e) => {
        let { name, value } = e.target;
        setPasswords({ ...passwords, [name]: value })
    }
    useEffect(() => {
        console.log(isPasswordChange);
        if (isPasswordChange) { 
          setTimeout(() => {  history.push("/login")},2500)
        }
        return () => { }
    },[isPasswordChange])
    
    if(Cookies.get('token')!==undefined){
        return <Redirect to='/' />
    }

    return (
        <div className="create-new-password-main-container">
            <div className="create-new-password-container">
                <h1>Create New Password</h1>
                <form onSubmit={handleSubmit}>
                    <div className="newPassword">
                        <label>
                            New Password
                        </label>
                        <input type="password" name="newPassword" value={passwords.newPassword} onChange={handleChange} />
                    </div>

                    <div className="confirmPassword">
                        <label>
                            Confirm Password
                        </label>
                        <input type="password" name="confirmPassword" value={passwords.confirmPassword} onChange={handleChange} />
                    </div>
                    <div className="change-password-btn-container">
                        <input type="submit" value="Change Password" />
                    </div>
                </form>
                <div className="create-new-password-alert-container">
                    <p className={isPasswordChange?"success":"error"}>
                        {message}
                    </p>

                </div>
                <div className="create-new-passowrd-footer">
                    <a href="/login/">Go back</a>
                </div>
            </div>

        </div>
    )
}
export default CreateNewPassword;
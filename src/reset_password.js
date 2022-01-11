import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import './css/resetpassword.css';
import HOST_URL from "./proxy";



function ResetPassword(props) {
    const [email, setEmail] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [Error, setError] = React.useState("");
    const [isSent, setIsSent] = React.useState(false);
    const [ucode,setUcode]=useState("")


    if (Cookies.get('token') !== undefined) {
        return <Redirect to="/" />
    }
    const sendCodeHandler = () => {
        if(email === ""){
            setIsError(true);
            setError("Please enter your email")
            return
        }
        setIsLoading(true);
        axios.post(HOST_URL + '/send_reset_password_code', {
            email: email
        })
            .then(result => {
                if (result.status === 200) {
                    console.log(result.data);
                    if(result.data.status === 200){
                        console.log(result.data.ucode)
                        setUcode(result.data.ucode)
                        setIsLoading(false);
                        setIsSuccess(true);
                        setIsSent(true);  
                        setError("");
                    }else{
                        setIsLoading(false);
                        setIsError(true);
                        setError(result.data.message);
                    }
                   
                }
            })
            .catch(err => {
                setIsLoading(false);
                setIsError(true);

                setError("Something went wrong");
            })

    }
    const handleChange = (event) => {
        setEmail(event.target.value);
    }
    if(isSent){
      
        return <Redirect to={"/resetpassword/verify/"+ucode} />
    }

    return <>
        <div className="reset-password-main-container">

            <div className="reset-password-container">
                <div className="reset-password-title">
                    <h1>Reset Password</h1>
                </div>
                <div className="reset-password-form">
                    <form onSubmit={props.handleSubmit}>
                        <div className="reset-password-form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" value={email} onChange={handleChange} placeholder="john@example.com" />
                        </div>
                    </form>
                </div>
                <div className="reset-password-btn-container">
                    <button className="reset-password-button" onClick={sendCodeHandler}>Send code</button>
                </div>

                <div className="reset-password-message">
                    <p>
                        {isLoading ? "Sending code..." : ""}
                        {isLoading?null:isError ? Error : ""}
                    </p>
                </div>
                <div>
                    <NavLink to="/login" className="reset-password-link">
                        Go Back
                    </NavLink>
                </div>

            </div>



        </div>

    </>
}



export default ResetPassword;
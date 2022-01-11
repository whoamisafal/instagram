import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import HOST_URL from "./proxy";


function InputField(props) {
    let onchange = props.onchange
    let key = props.index

    return <>
        <input type={'text'} className="verify-code-input-field" maxLength={'1'} onChange={onchange} tabIndex={key} />

    </>
}


function EmailVerification(props) {
    let [code, setCode] = useState([])
    let [inputFields, setInputFields] = React.useState([])
    let [len, setLen] = useState(0)
    let [isLoading, setLoading] = React.useState(true)
    let [isresend, setResend] = useState(false)
    let [messageResend, setMessageResend] = useState('')
    let [message, setMessage] = useState("")
    let [isVerified, setVerified] = useState(false)
    let [counter, setCounter] = useState(60)

    let codeLen = 6



    const onchange = (e) => {
        let value = e.target.value
        if (value === '' || value === ' ') {
            return
        }
        let tabIndex = e.target.tabIndex
        code[tabIndex] = value
        setCode(code)
        setLen(code.length)

        focusNext(tabIndex, codeLen)
    }
    const focusNext = (index, codeLen) => {
        let nextIndex = index + 1
        if (nextIndex < codeLen) {
            let elem = document.getElementsByClassName('verify-code-input-field')
            if (elem === null) {
                return
            } else {
                elem[nextIndex].focus()
            }
        }

    }

    useEffect(() => {
        if (isresend) {
            setTimeout(() => {
                setResend(false)
            }, 3000);
        }
    }, [isresend])

    useEffect(() => {
        let interval = setInterval(() => {
            if (counter > 0) {
                setCounter(counter - 1)
            }
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [counter])


    useEffect(() => {
        for (let i = 0; i < codeLen; i++) {
            setInputFields(inputFields => [...inputFields, <InputField key={i} index={i} onchange={onchange} />])
        }
        setLoading(false)
        return () => { }
    }, [])

    if (isLoading) {
        return <div>Loading</div>
    }

    if (Cookies.get('token')) {
        return <Redirect to='/' />
    }
    if (Cookies.get('email_verify_token') === undefined) {
        return <Redirect to='/login' />
    }
    const resend = () => {

        axios.post(HOST_URL + '/accounts/email/resend', {
            token: Cookies.get('email_verify_token')
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => {
            if (res.status === 200) {
                setResend(true)
                setCounter(60)
                setMessageResend('Email sent successfully')
            } else {
                setCounter(60)
                setResend(true)
                setMessageResend('Email not sent')
            }

        }).catch(err => {
            setResend(true)
            setCounter(60)
            setMessageResend("Something went wrong")
        })


    }
    const verify = () => {
        let vcode = code.join('')
        axios.post(HOST_URL + '/accounts/email/verify', {
            token: Cookies.get('email_verify_token'),
            code: vcode
        }).then(res => {
            if (res.status === 200) {
                if (res.data.status === 200) {
                    setMessage(res.data.message)
                    setVerified(true)
                    Cookies.remove('email_verify_token')
                } else {
                    setVerified(false)
                    setMessage(res.data.message)
                }
            } else {
                setVerified(false)
            }
        }).catch(err => {
            setVerified(false)
            setMessage("Invalid code")
        })
    }

    return <>
        <div className="verify-code-main-container">

            <div className="verify-container">
                <div className="verify-code-title">
                    <h1>Verification Code</h1>
                </div>
                <div className="verify-input-container"> {
                    inputFields
                }</div>
                <div className="verify-container-button">
                    <button className="verify-code-button" onClick={verify} disabled={len === 6 ? false : true} >Verify</button>
                </div>
                <div className="resend-container-button">
                    {
                        counter === 0 ? null : <>
                            Resend in {counter} sec
                        </>
                    }
                    <button className="resend-code-button" onClick={resend} disabled={counter === 0 ? false : true} >Resend Code</button>
                    {
                        isresend ? <p>{messageResend}</p> : null
                    }
                </div>
                <div className="verify-error-container">
                    <p>
                        {message}
                    </p>
                </div>
            </div>

        </div>

    </>
}
export default EmailVerification
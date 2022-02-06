import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import HOST_URL from "./proxy";


function InputField(props) {
    let onchange = props.onchange
    let key = props.index

    return <>
        <input type={'text'} className="verify-code-input-field" maxLength={'1'} onChange={onchange} tabIndex={key} />

    </>
}


function VerifyCode(props) {
    let { ucode } = props.match.params
    
    let [code, setCode] = useState([])
    let [inputFields, setInputFields] = React.useState([])
    let [len, setLen] = useState(0)
    let [isLoading, setLoading] = React.useState(true)
    let [hasUCodeError, setUCodeError] = useState(false)
    let [message, setMessage] = useState("")
    let [isVerified, setVerified] = useState(false)
    let [passwordChangeCode, setPasswordChangeCode] = useState("")
    let codeLen = 6

    useEffect(() => {
        if (ucode === undefined) {
            setUCodeError(true)
            return () => { }
        }
        axios.get(HOST_URL + '/ucode_checker?ucode=' + ucode, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            console.log(res.data);
            if (res.status === 200) {
                if (res.data.status === 200) {
                    //Ok
                } else {
                    setUCodeError(true)
                }
                //
            } else {
                setUCodeError(true)
            }

        }).catch((err) => {
            console.log(err);
        })

        return () => { 

        }

    }, [ucode])

  const  onchange = (e) => {
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
    const  focusNext=(index, codeLen)=> {
        let nextIndex = index + 1
        if (nextIndex < codeLen) {
           let elem= document.getElementsByClassName('verify-code-input-field')
           if(elem===null){
               return
           }else{
            elem[nextIndex].focus()
           }
        }
    
    }

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
    if (hasUCodeError) {
        setTimeout(() => {
            return <Redirect to='/login' />
        }, 5000)
    }
    const verify = () => {
        if (ucode === undefined) {
            setUCodeError(true)
            setMessage("Something went's wrong")
            return
        }
        if (code.length === 6) {
            let vcode = ""
            for (let index = 0; index < code.length; index++) {
                vcode += code[index]

            }
            axios.post(HOST_URL + '/verify_code', {
                code: vcode,
                ucode: ucode,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                console.log(res.status);
                if (res.status === 200) {
                    if (res.data.status === 200) {
                        setPasswordChangeCode(res.data.passwordChangeCode)
                        setVerified(true)
                        setMessage("Verification Successful")
                    } else {
                        setMessage(res.data.message)
                    }
                } else {
                    setMessage(res.data.message)
                }
            })
        }


    }

    if (isVerified) {
        window.location.href = '/create/new/password/' + passwordChangeCode
//return <Redirect to={'/create/new/password/' + passwordChangeCode} />
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
                <div className="verify-error-container">
                    <p>
                        {message}
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
export default VerifyCode
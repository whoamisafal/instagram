import axios from "axios";
import React, { useState, useEffect } from "react";
import HOST_URL from "../proxy";
import Cookies from 'js-cookie'


function EditProfile(props) {

    const [userInfo, setUserInfo] = useState({
        fullname: '',
        username: '',
        bio: '',
        website: '',
        gender: '',
        profile: '',
        date_of_birth: '',
        email: '',
        user_type: '',
        account_visiblity: ''

    })
    const [isEdit,setEdit]=useState(true)
    const [loading, setLoading] = useState(true)

    const getCustomDate=(__)=>{
        let date=new Date(__)
        let day=date.getDate()
        if(day<10){
            day=0+""+day
        }
        let month=date.getMonth()+1
        if(month<10){
            month=0+""+month
        }
        let year=date.getFullYear()
        let date_of_birth=year+"-"+month+"-"+day
        return date_of_birth
    }

    useEffect(() => {

        axios.get(HOST_URL+'/current_user_info',{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('token')
            }
        })
            .then(res => {
                if (res.status === 200) {
                    const data = res.data
                    console.log(data)
                    setUserInfo({
                        fullname: data.fullname,
                        username: data.username,
                        email: data.email,
                        profile: data.profile,
                        bio: data.description,
                        website: data.website,
                        gender: data.gender == null ? '' : data.gender,
                        account_type: data.account_type,
                        account_visiblity: data.account_visiblity,
                        date_of_birth: data.date_of_birth == null ? '' : getCustomDate(data.date_of_birth),

                    })
                  
                 
                    setLoading(false)
                }
              

            })
            .catch(err => {
                console.log(err);
            })
    }, [])


    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUserInfo({ ...userInfo, [name]: value })
        setEdit(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(userInfo.fullname===""){
            return 
        }
       axios.post(HOST_URL+'/update_user_info', {...userInfo},{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + Cookies.get('token')
        }
       }).then(res=>{
            console.log(res);
       }).catch(err=>{
           console.log(err);
       })
    }   
 

    if (loading) {
        return <div>Loading...</div>
    }

    return <>
        <div className="edit-profile-container">
            <div className="edit-full-name">
                <label>Full Name</label>
                <input type="text" value={userInfo.fullname} name="fullname" onChange={handleInput} maxLength={50} placeholder="Full name" required />
            </div>
            <div className="username">
                <label>Username</label>
                <input type="text" value={userInfo.username} disabled />
            </div>
            <div className="email-used">
                <label>Email</label>
                <input type="text" value={userInfo.email} disabled />
            </div>
            <div className="edit-website">
                <label>Website</label>
                <input type="text" value={userInfo.website} name="website" onChange={handleInput} placeholder="Website" />
            </div>
            <div className="edit-bio" >
                <label>Bio</label>
                <textarea value={userInfo.bio} maxLength={150} name="bio" onChange={handleInput} placeholder="Bio"></textarea>
            </div>
            <div className="edit-date-of-birth">
                <label >Date of Birth</label>
            
                <input type="date" value={userInfo.date_of_birth} name="date_of_birth" id="date_of_birth" onChange={handleInput}  />
             
            </div>
            <div className="edit-gender">
                <label>Gender</label>

                <select id="gender" name="gender" onChange={handleInput} value={userInfo.gender}>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                   <option value={'0'}>Prefer Not To Say</option>
                </select>

            
           
            </div>
           <div className="change-submit">
           <input type='submit' disabled={isEdit} onClick={handleSubmit} value={"Submit"}/>
           </div>


        </div>
    </>
}

export default EditProfile
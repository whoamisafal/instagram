import React from "react";
import { NavLink } from "react-router-dom";


function SettingMenu(){
 
    return <>
        <nav className="setting-nav">
            <ul>
                <li>
                    <NavLink to="/accounts/edit" activeClassName="active">Edit Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/accounts/password/change" activeClassName="active">Change Password</NavLink>
                    </li>
               
            </ul>
    


        </nav>
    
    </>


}



export default SettingMenu;
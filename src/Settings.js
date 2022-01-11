import React from "react";
import {BrowserRouter as Router,Route, Switch,Redirect } from "react-router-dom";
import ChangePassword from "./component/change-password";
import EditProfile from "./component/edit-profile";
import SettingHelp from "./component/setting-help";
import SettingMenu from "./component/setting-menu";
import './css/settings.css';

class Settings extends React.Component{

    constructor(props){
        super(props)

    }
    render(){  
        if(!this.props.isAuth){
        return <Redirect to="/login" />
             }

        return <>
        
        <div className="settings-container">
           <Router>
           <section className="settings-menu-section">
                <SettingMenu/>
            </section>

            <section className="settings-content-section">
                <Switch>
                    <Route exact path="/accounts/edit" component={EditProfile}/>
                    <Route exact path="/accounts/password/change" component={ChangePassword}/>
                    <Route exact path="/settings/help" component={SettingHelp}/>
                </Switch>
            </section>

           </Router>
        </div>


        
        </>
    }




}


export default Settings
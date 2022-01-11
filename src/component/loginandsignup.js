import React from "react";
import { Link } from "react-router-dom";

class LoginAndSignup extends React.Component {
  render() {
    return (
      <>
        <menu>
          <ul>
            <li>
              <Link to="/login">
               
                <button className="login-button"> Login </button>
              </Link>
            </li>
            <li>
              <Link to="/accounts/emailsignup/">
              
                <button className="signup-button"> Signup </button>
              </Link>
            </li>
          </ul>
        </menu>
      </>
    );
  }
}

export default LoginAndSignup;

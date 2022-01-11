import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './home';
import Activity from './activity';
import Chat from './chat';
import NavBar, { MobileCompatibleNavBar } from './navbar';
import Explore from './explore';
import Dashbaord from './dashboard';
import Login from './login';
import OtherUserProfile from './OtherUserProfile';
import EmailSignUp from './register';
import ResetPassword from './reset_password';

import Loading from './loading';
import ExplorePeople from './ExplorePeople';
import Create from './CreatePost'
import Settings from './Settings';
import Cookies from 'js-cookie';
import PostViewer from './postviewer';
import TagView from './tagsview';

import VerifyCode from './verifycode';
import CreateNewPassword from './create_new_password';
import EmailVerification from './email_verify';


function App(props) {
  const isLoading = false;
  let isAuth = false;


  const token = Cookies.get('token');
  if (token != undefined || token != null) {
    isAuth = true;
  }





  if (isLoading) {
    return <Loading />
  }
  let username = localStorage.getItem('username');

  let navbar = <NavBar isAuth={isAuth} />

  return (
    <>
      <Router>
        <div>
          <Switch>

            <Route exact path="/accounts/emailsignup/">
              <EmailSignUp isAuth={isAuth} />
            </Route>

            <Route exact path="/login">
              <Login isAuth={isAuth} />
            </Route>
            <Route exact path="/"  >
              {navbar}
              <Home isAuth={isAuth} />
              
            </Route>
            <Route exact path="/accounts/edit/"  >
              {navbar}
              <Settings isAuth={isAuth} />
           
            </Route>
            <Route exact path="/accounts/password/change"  >
              {navbar}
              <Settings isAuth={isAuth} />
            </Route>
            <Route exact path="/settings/help" >
              {navbar}
              <Settings isAuth={isAuth} />
            </Route>

            <Route exact path="/home">
              {navbar}
              <Home />
              
            </Route>
            <Route exact path="/inbox"  >
              {navbar}
              <Chat isAuth={isAuth} />
              
            </Route>
            <Route exact path="/inbox/new"  >
              {navbar}
              <Chat isAuth={isAuth} />
              
            </Route>
            <Route exact path="/inbox/:username"  >
              {navbar}
              <Chat isAuth={isAuth} />
              
            </Route>
            <Route exact path="/create">
              {navbar}
              <Create />
              
            </Route>
            <Route exact path="/create/__post__">
              {navbar}
              <Create />
            </Route>
            <Route exact path="/create/__story__">
              {navbar}
              <Create />
            </Route>
            <Route exact path={'/p/:url'} render={(props) => <>{navbar}<PostViewer {...props} /></>} />
            <Route exact path={"/" + username + "/"} >
              {navbar}
              <Dashbaord  />
              
            </Route>
            <Route exact path={"/" + username + "/__saved__"}>
              {navbar}
              <Dashbaord  />
              
            </Route>
            <Route exact path={"/" + username + "/__tagged__"}>
              {navbar}
              <Dashbaord  />
              
            </Route>
            <Route exact path={"/" + username + "/following"}>
              {navbar}
              <Dashbaord  />
              
            </Route>
            <Route exact path={"/" + username + "/followers"}>
              {navbar}
              <Dashbaord  />
              
            </Route>
            <Route exact path="/activity">
              {navbar}
              <Activity />
            </Route>

            <Route exact path="/explore" >
              {navbar}
              <Explore />
            </Route>
            <Route exact path="/explore/" >
              {navbar}
              <Explore />
            </Route>

            <Route exact path={'/accounts/verify/email/'}>
              <EmailVerification />
            </Route>

            <Route exact path="/explore/people/">
              {navbar}
              <ExplorePeople isAuth={isAuth} />
            </Route>
            <Route sensitive path={'/explore/tags/:tag/'} render={(props) => <>{navbar}<TagView {...props} /></>} />
            <Route exact path="/accounts/password/reset" component={ResetPassword} />
            <Route exact path="/resetpassword/verify/" render={(props) => <> <VerifyCode type="resetpassword_verify" {...props} /></>} />
            <Route exact path="/resetpassword/verify/:ucode" render={(props) => <> <VerifyCode type="resetpassword_verify" {...props} /></>} />
            <Route exact path={"/create/new/password/:pcode"} render={(props) => <> <CreateNewPassword type="create_new_password" {...props} /></>} />
            <Route path="/:username" render={(props) => <>{navbar} <OtherUserProfile isAuth={isAuth} {...props} /></>} />
            <Route path="/:username/__save__" render={(props) => <>{navbar} <OtherUserProfile isAuth={isAuth} {...props} /></>} />
            <Route path="/:username/__tagged__" render={(props) => <>{navbar} <OtherUserProfile isAuth={isAuth} {...props} /></>} />
          </Switch>
        </div>
      </Router>


    </>
  );



}


export default App;

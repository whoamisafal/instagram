
import React from "react";
import { Route,BrowserRouter as Router } from "react-router-dom";

import CreatePost from "./component/create-post";


class Create extends React.Component {
  

    render() {
        return <>
            <Router>
            <Route exact path="/create/__post__" component={CreatePost} />
            <Route exact path="/create/" component={CreatePost} />
            </Router>
        </>
    }

}

export default Create
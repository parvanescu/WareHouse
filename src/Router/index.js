import React from "react";
import Login from "../Components/Login"
import App from "../Components/App"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom"



export default function Routing() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" render={()=> <Redirect to={"/test"}/>}/>
                    <Route exact path="/test">
                        <Login/>
                    </Route>
                    <Route exact path='/app'>
                        <App/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
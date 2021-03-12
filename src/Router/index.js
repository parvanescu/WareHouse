import React, {useEffect} from "react";
import Login from "../Components/Screens/Login/Login"
import Home from "../Components/Screens/Home/Home"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom"
import Register from "../Components/Screens/Register/Register";
import Profile from "../Components/Screens/Profile/Profile";

import SetPassword from "../Components/Screens/SetPassword/SetPassword";
import Organisation from "../Components/Screens/Organisation/Organisation";

export default function Routing() {



    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" render={()=> <Redirect to={"/login"}/>}/>
                    <Route exact path="/login">
                        <Login/>
                    </Route>
                    <Route exact path="/home">
                        <Home/>
                    </Route>
                    <Route exact path='/register'>
                        <Register/>
                    </Route>
                    <Route exact path='/profile'>
                        <Profile/>
                    </Route>
                    <Route exact path="/setPassword&:userId&:organisationId">
                        <SetPassword/>
                    </Route>
                    <Route exact path='/organisation'>
                        <Organisation/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
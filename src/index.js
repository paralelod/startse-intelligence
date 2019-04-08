import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Route, Switch, Redirect} from "react-router-dom";

import App from './App';
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup';
import RecoverPwd from './components/Auth/Pwd/RequestNew'
import CreatePwd from './components/Auth/Pwd/CreateNew'
import Portfolio from './components/Portfolio/Portfolio'
import AppRoute from "./layouts/App/AppRoute";
import DefaultRoute from "./layouts/Default/DefaultRoute";


ReactDOM.render((
    <HashRouter basename='/'>
        <Route exact path="/" render={() => (
            <Redirect to="/login"/>
        )}/>
        <DefaultRoute exact path="/login"  component={Login} />
        <DefaultRoute exact path="/recover"  component={RecoverPwd} />
        <DefaultRoute exact path="/new-password"  component={CreatePwd} />
        <DefaultRoute path="/signup" component={Signup} />
        <Route exact path="/logged" render={() => (
            <Redirect to="/logged/portfolio"/>
        )}/>
        <AppRoute path="/logged/portfolio" component={Portfolio}/>    
    </HashRouter>
), document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

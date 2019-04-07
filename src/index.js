import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WrappedNormalSignupForm from './pages/Signup';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Route, Switch, Redirect} from "react-router-dom";

import App from './App';
import Login from './pages/Login'
import Portfolio from './components/Portfolio/Portfolio'
import AppRoute from "./layouts/AppRoute";


ReactDOM.render((
    <HashRouter basename='/'>
        <Route exact path="/"  component={Login} />
        <Route path="/signup" component={WrappedNormalSignupForm} />
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

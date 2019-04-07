import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Project from './pages/Portfolio'
import * as serviceWorker from './serviceWorker';
import { HashRouter, Route} from "react-router-dom";

ReactDOM.render((
    <HashRouter basename='/'>
        <Route exact path="/" component={App} />
        <Route exact path="/project" component={Project} />
    </HashRouter>
), document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';

import StorePicker from './components/StorePicker';
import App from './components/App';
import NotFound from './components/NotFound';

import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import h from './helpers';

/*
  Routes
*/

let Routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={StorePicker}/>
    <Route path="/store/:storeId" component={App}/>
    <Route path="*" component={NotFound}/>
  </Router>
)

ReactDOM.render(Routes, document.querySelector('#main'));

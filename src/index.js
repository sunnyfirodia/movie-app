import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import store from './store/store';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import About from './components/About'
import Error from './components/Error'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path ="/">
          <HomePage />
        </Route>
        <Route  path ="/about">
          <About />
        </Route>
        <Route path ="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
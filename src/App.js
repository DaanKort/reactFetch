import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from "./views/homepage"
import Contact from "./views/contact"

class App extends Component {
  render() {
    return (
      <Switch>
		  <Route exact path= '/' component={Homepage} ></Route>
		  <Route exact path='/contact' component={Contact}></Route>
	  </Switch>
    );
  }
}

export default App;

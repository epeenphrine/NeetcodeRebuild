import React, { Component, Fragment } from "react";


//component stuff

//layout
import Navbar from "./components/Layout/Nav/Navbar";
//pages
import Home from './components/Pages/Home/Home'
import Testing from './components/Testing/Testing'
//apps
import TweetChart from './components/App/TweetChart/TweetChart'
import Covid19 from './components/App/Covid19/Covid19'



//router stuff 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css'


function App() {

  return (

    <Router >
      <Fragment >
        <div className="App">
          <Navbar /> 
          <Switch>
          </Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/testing" component={Testing} />
            <Route exact path="/app/tweetchart/" component={TweetChart} />
            <Route exact path='/app/covid19/' component={Covid19} />
        </div>
      </Fragment>
    </Router>
  );
}

export default App;

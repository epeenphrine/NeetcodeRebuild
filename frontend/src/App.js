import React, { Component, Fragment } from "react";


//component stuff

//layout
import Navbar from "./components/Layout/Nav/Navbar";
//pages
import Home from './components/Pages/Home/Home'

//apps
import TweetChart from './components/App/TweetChart/TweetChart'




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
          <div className='container-fluid'>
            <Route exact path="/" component={Home} />
            <Route exact path="/app/tweetchart/" component={TweetChart} />
          </div>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;

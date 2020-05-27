// Main App

// React Import
import React from 'react';

// React 3rd Party Components
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components Import
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../components/Home';
import Projects from '../components/Projects';
import About from '../components/About';

import PageNotFound from '../components/PageNotFound';

import config from 'react-reveal/globals';
config({ ssrFadeout: true });


const AppRouter = () => (
    <Router>
    <div className="wrapper">
      <Header />   
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/projects"><Projects /></Route>
          <Route><PageNotFound /></Route>
        </Switch>
      <Footer />
    </div>
  </Router>
)

export default AppRouter;
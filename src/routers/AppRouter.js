// Main App

// React Import
import React from 'react';

// React 3rd Party Components
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components Import
import Footer from '../components/Footer';
import Header from '../components/Header';

// Pages Import
import Home from '../components/Home';
//import { APP_FOLDER_NAME } from '../globals/variables';
import PageNotFound from '../components/PageNotFound';

const AppRouter = () => (
    <Router>
    <div className="wrapper">
      <Header />
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route><PageNotFound /></Route>
        </Switch>
      <Footer />
    </div>
  </Router>
)

export default AppRouter;
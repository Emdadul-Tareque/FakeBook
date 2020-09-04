import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Post from './Components/Post/Post';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from './Components/Details/Details';

function App() {
  return (
    <div className="main-container">
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Post></Post>
          </Route>
          <Route path="/detail/:key">
            <Details></Details>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

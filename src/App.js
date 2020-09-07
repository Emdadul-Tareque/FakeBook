import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from './Components/Details/Details';
import Body from './Components/Body/Body';

function App() {
  return (
    <div className="main-container">
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Body></Body>
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

import React from "react";


import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './Home';


function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;

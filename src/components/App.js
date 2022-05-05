import React from "react";
import RecipeContainer from '../items/RecipeContainer';
import  RecipeCard from './items/RecipeCard';
import {About} from './About'
import Header from './nav/Header'
import NavBar from './nav/Navbar'







import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './Home';


function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Header />
      <Switch>
      
      <Route path="/recipes">
        <RecipeContainer />
      </Route>

      <Route path="/recipe/:id">
         <RecipeCard />
        </Route>

      <Route path="/about">
        <About />
      </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;

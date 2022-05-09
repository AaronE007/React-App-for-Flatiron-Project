import React from "react";
import Form from "./Items/Form";
import RecipeContainer from '../containers/RecipeContainer';
import  RecipeCard from './Items/RecipeCard';
import About from './About';
import Header from './nav/Header';
import NavBar from './nav/Navbar';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Home';


function App() {
  return (
    <div className="App">
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

        <Route path="/Form">
          <Form />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>     
    </div>
  );
}

export default App;

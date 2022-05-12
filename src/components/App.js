import React from "react";
import RecipeForm from "./Items/RecipeForm";
import RecipeContainer from '../containers/RecipeContainer';
import  RecipeCard from './Items/RecipeCard';
import About from './About';
import Header from './nav/Header';
import NavBar from './nav/Navbar';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Footer from "./nav/Footer";


function App() {
  
  const fishImage = window.location.origin + "/images/bigfish.jpeg"

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
          <About fishImage={fishImage} />
        </Route>

        <Route path="/RecipeForm">
          <RecipeForm />
        </Route>

        <Route path="/">
          <Home fishImage={fishImage} />
        </Route>
      </Switch>
      <Footer />     
    </div>
  );
}

export default App;

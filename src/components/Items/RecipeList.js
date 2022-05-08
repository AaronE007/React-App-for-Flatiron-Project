import React from "react";
import RecipeCard from "./RecipeCard";


function RecipeList({meals}) {
  return (
  <div>
    <h2>Recipes</h2>
    {
      meals.map(meal=> (
        <RecipeCard itemsPerRow={2} key={meal.idMeal} meal={meal} />
      ))
    }
  </div>
  ) ;
}

export default RecipeList

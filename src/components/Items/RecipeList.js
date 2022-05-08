import React, {useState} from "react";
import RecipeCard from "./RecipeCard";
import Search from "./Search";



function RecipeList({meals}) {
const [searchTerm, setSearchTerm] = useState("")



 return (
  <div>
    <div>
  <Search searchTerm={searchTerm} onChangeSearch={setSearchTerm}  />  
  </div>
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

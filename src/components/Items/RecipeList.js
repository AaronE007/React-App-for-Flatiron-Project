import React, {useState} from "react";
import RecipeCard from "./RecipeCard";
import Search from "./Search";
import RecipeForm from "./RecipeForm";



function RecipeList({ meals, addNewMeal }) {
const [searchTerm, setSearchTerm] = useState("")

const mealsForSearch = meals.filter((meal)=> 
  meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
);



 return (
  <div>
    <div>
      <RecipeForm addNewMeal={addNewMeal}/>
      <h5>Key Word Search for a Recipe Below</h5>
      <Search searchTerm={searchTerm} onChangeSearch={setSearchTerm}  />  
    </div>
    <h2>Recipes</h2>
    {
      mealsForSearch.map(meal=> (
        <RecipeCard itemsPerRow={2} key={meal.idMeal} meal={meal} />
      ))
    }
  </div>
  ) ;
}

export default RecipeList

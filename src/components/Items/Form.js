import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Form = () => {
  const [strMeal, setstrMeal] = useState("")
  const [strMealThumb, setRecipeImage] = useState("")
  const [strIngredients, setstrIngredients] = useState("")
  const [strInstructions, setstrInstructions] = useState("")
  const hist = useHistory()
  
  
  function handleSubmit(event) {
    event.preventDefault()
    if([strMeal,strMealThumb,strIngredients,strInstructions].some(value => value.trim() === "")){
      alert("Make sure that all of the sections are filled before continuing.")
      return null
    }
    const newRecipes = {strMeal: strMeal, strMealThumb: strMealThumb, strIngredients: strIngredients, strInstructions: strInstructions}

    fetch("http://localhost:3001/meals", {
      Method: "Post",
      Headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRecipes)
})
    setstrMeal("")
    setRecipeImage("")
    setstrIngredients("")
    setstrInstructions("")
    hist.push("/recipes")
 }


return (
  <div > 
    <form onSubmit={handleSubmit}>
      <input type="submit" value="Add a Recipe!" /> 
      <br />
      <br />
      <label htmlFor="RecipeName">Recipe name</label>
      <input onChange={event => strMeal(event.target.value)} type="text" name="recipe" id="recipeName" value={strMeal} required/>
      <br />
      <br />
      <label htmlFor="RecipeImage">Recipe Image</label>
      <input onChange={event => setRecipeImage(event.target.value)} type="text" name="name" id="recipeImage" value={strMealThumb} required/>
      <br />
      <br />
      <label htmlFor="Ingredients">Recipe Ingredients</label>
      <input onChange={event => setstrIngredients(event.target.value)} type="text" name="name" id="ingredients" value={strIngredients} required/>
      <br />
      <br />
      <label htmlFor="Instructions">Recipe Instructions</label>
      <input onChange={event => setstrInstructions(event.target.value)} type="text" name="instructions" id="name" value={strInstructions} required/>
    </form>
  </div>
  )
}

export default Form


import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Form = () => {
  const [recipeName, setRecipeName] = useState("")
  const [recipeImage, setRecipeImage] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [instructions, setInstructions] = useState("")
  
  
  function handleSubmit(event) {
    event.preventDefault()
    if([recipeName,recipeImage,ingredients,instructions].some(value => value.trim() === "")){
      alert("Make sure that all of the sections are filled before continuing.")
      return null
    }
    const newRecipes = {recipeName, recipeImage, ingredients, instructions}

    fetch("http://localhost:3001/meals", {
      Method: "Post",
      Headers: { "Content-Type": "application/json"},
      body: JSON.stringify(newCharacter)
})
 setRecipeName("")
 setRecipeImage("")
 setIngredients("")
 setInstructions("")
  useHistory().push("/recipes")
 }


  


  

  return (
    <div style={{margin: "auto", border: "solid", backgroundColor: "blue", height: 150, width: 400, color: "gold", fontWeight: "superBold"}}>
      <form onSubmit={handleSubmit}>
      <label htmlFor="RecipeName">Recipe name</label>
      <input onChange={event => setRecipeName(event.target.value)} type="text" name="recipe" id="name" value={recipeName} required/><br />
      <label htmlFor="RecipeImage">Recipe Image</label>
      <input onChange={event => setRecipeImage(event.target.value)} type="text" name="name" id="name" value={recipeImage} required/><br />
      <label htmlFor="Ingredients">Recipe Ingredients</label>
      <input onChange={event => setIngredients(event.target.value)} type="text" name="name" id="name" value={ingredients} required/><br />
      <label htmlFor="Instructions">Recipe Instructions</label>
      <input onChange={event => setInstructions(event.target.value)} type="text" name="name" id="name" value={instructions} required/><br />
      </form>
    </div>
  )
}

export default Form

// This is how the data looks on the server:
// // "strMeal": "Cajun spiced fish tacos",
// //   "strMealThumb": "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
// //   "idMeal": "52819",
// //   "strIngredients": "2 tbsp cajun 1 tsp cayenne pepper 4 fillets white fish 1 tsp vegetable oil 8 flour tortilla 1 sliced avocado 2 shredded little gem lettuce 4 shredded spring onion 1 x 300ml salsa 1 pot sour cream 1 lemon 1 clove finely chopped garlic",
// //   "strInstructions":
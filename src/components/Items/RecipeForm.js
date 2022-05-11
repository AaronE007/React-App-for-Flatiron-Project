import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Form = () => {
  const [strMeal, setstrMeal] = useState("")
  const [strMealThumb, setMealThumb] = useState("")
  const [strIngredients, setstrIngredients] = useState("")
  const [strInstructions, setstrInstructions] = useState("")
  const hist = useHistory()
  
  
const handleSubmit = (event) => {
    event.preventDefault()
    if([strMeal,strMealThumb,strIngredients,strInstructions].some(value => value.trim() === "")){
      alert("Make sure that all of the sections are filled before continuing.")
      return null
    }
    const newRecipes = {strMeal,strMealThumb, strIngredients, strInstructions}

    fetch("http://localhost:3001/meals", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRecipes)
    })
    setstrMeal("")
    setMealThumb("")
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
      <input onChange={event => setstrMeal(event.target.value)} type="text" name="strMeal"  value={strMeal}/>
      <br />
      <br />
      <label htmlFor="RecipeImage">Recipe Image</label>
      <input onChange={event => setMealThumb(event.target.value)} type="text" name="strMealThumb"  value={strMealThumb}/>
      <br />
      <br />
      <label htmlFor="Ingredients">Recipe Ingredients</label>
      <input onChange={event => setstrIngredients(event.target.value)} type="text" name="strIngredients"  value={strIngredients}/>
      <br />
      <br />
      <label htmlFor="Instructions">Recipe Instructions</label>
      <input onChange={event => setstrInstructions(event.target.value)} type="text" name="strInstructions"  value={strInstructions}/>
    </form>
  </div>
  )
}

export default Form


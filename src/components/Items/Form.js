import React, { useState } from "react";
import { Form } from "semantic-ui-react";

const Form = () => {
  
  const [formData, setFormData] = useState({
    strMeal:"",
    strThumb:"",
    strIngredients:"",
    strInstructions"",
  });


  
  function handleSubmit() {
    const newRecipes = {
      strMeal: formData.,
    strThumb:formData.,
    strIngredients:formData.,
    strInstructions: formData.,

     }
    if([strMeal,strMealThumb,strIngredients,strInstructions].some(value => value.trim() === "")){
      alert("Make sure that all of the sections are filled before continuing.")
      return null
    }


    fetch("http://localhost:3001/meals", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRecipes)
    })


return (
  <div > 
    <form >
     
    </form>
  </div>
  )
}
export default Form

// const Form = () => {
//   const [strMeal, setstrMeal] = useState("")
//   const [strMealThumb, setRecipeImage] = useState("")
//   const [strIngredients, setstrIngredients] = useState("")
//   const [strInstructions, setstrInstructions] = useState("")
//   const hist = useHistory()
  
  
//   function handleSubmit(event) {
//     event.preventDefault()
//     if([strMeal,strMealThumb,strIngredients,strInstructions].some(value => value.trim() === "")){
//       alert("Make sure that all of the sections are filled before continuing.")
//       return null
//     }
//     const newRecipes = {strMeal,strMealThumb, strIngredients, strInstructions}

//     fetch("http://localhost:3001/meals", {
//       method: "Post",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newRecipes)
//     })
//     setstrMeal("")
//     setRecipeImage("")
//     setstrIngredients("")
//     setstrInstructions("")
//     hist.push("/recipes")
//  }


// return (
//   <div > 
//     <form onSubmit={handleSubmit}>
//       <input type="submit" value="Add a Recipe!" /> 
//       <br />
//       <br />
//       <label htmlFor="RecipeName">Recipe name</label>
//       <input onChange={event => setstrMeal(event.target.value)} type="text" name="recipe"  value={strMeal} />
//       <br />
//       <br />
//       <label htmlFor="RecipeImage">Recipe Image</label>
//       <input onChange={event => setRecipeImage(event.target.value)} type="text" name="image"  value={strMealThumb} />
//       <br />
//       <br />
//       <label htmlFor="Ingredients">Recipe Ingredients</label>
//       <input onChange={event => setstrIngredients(event.target.value)} type="text" name="ingredients"  value={strIngredients} />
//       <br />
//       <br />
//       <label htmlFor="Instructions">Recipe Instructions</label>
//       <input onChange={event => setstrInstructions(event.target.value)} type="text" name="instructions"  value={strInstructions} />
//     </form>
//   </div>
//   )
// }

// export default Form
import React, { useState } from "react";
import { Form } from "semantic-ui-react";

const RecipeForm = ({ addNewMeal }) => {
  
  const [formData, setFormData] = useState({
    strMeal: "",
    strMealThumb: "",
    strIngredients: "",
    strInstructions: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }


  
  function handleSubmit() {
    const newRecipes = {
      strMeal: formData.strMeal,
      strThumb: formData.strMealThumb,
      strIngredients: formData.strIngredients,
      strInstructions: formData.strInstructions,

     }
    // if([strMeal,strMealThumb,strIngredients,strInstructions].some(value => value.trim() === "")){
    //   alert("Make sure that all of the sections are filled before continuing.")
    //   return null
    // }
    fetch("http://localhost:3001/meals", {
      method: "Post",
      headers: { 
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipes),
    })
    .then((r) => r.json())
    .then(addNewMeal);
  }


return (
  <div > 
    <h3>Add New Recipes Here:</h3>
    <Form onSubmit={handleSubmit}>
      <Form.Group widths="equal">
        <Form.Input
        fluid
        label="Name"
        placeholder="Recipe Name Here"
        name="strMeal"
        value={formData.strMeal}
        onChange={handleChange}
      />
      <Form.Input
        fluid
        label="image"
        placeholder="Recipe Image"
        name="strMealThumb"
        value={formData.strMealThumb}
        onChange={handleChange}
      />
      <Form.Input
        fluid
        label="instructions"
        placeholder="instructions here"
        name="strInstructions"
        value={formData.strInstructions}
        onChange={handleChange}
      />
      <Form.Input
        fluid
        label="ingredients"
        placeholder="Ingredients List here"
        name="strIngredients"
        value={formData.strIngredients}
        onChange={handleChange}
      />
      </Form.Group>
      <Form.Button>Submit</Form.Button>
    </Form>
  </div>
  )
}
export default RecipeForm

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
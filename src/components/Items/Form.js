import React, {useState} from "react";

const Form = () => {
  const [recipeName, setRecipeName] = useState("")


  const handlesubmit = (event) => {


  };

  return (
    <div>
      <form >
      <label htmlFor="RecipeName">Recipe name</label>
      <input onChange={event => setRecipeName(event.target.value)} type="text" name="recipe" id="name" value={recipeName} required/><br />
      <label htmlFor="RecipeImage">Recipe name</label>
      <input onChange={event => setRecipeName(event.target.value)} type="text" name="name" id="name" value={recipeName} required/><br />
      <label htmlFor="Ingredients">Recipe name</label>
      <input onChange={event => setRecipeName(event.target.value)} type="text" name="name" id="name" value={recipeName} required/><br />
      <label htmlFor="Instructions">Recipe name</label>
      <input onChange={event => setRecipeName(event.target.value)} type="text" name="name" id="name" value={recipeName} required/><br />
      </form>
    </div>
  )
}

export default Form


// "strMeal": "Cajun spiced fish tacos",
//   "strMealThumb": "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
//   "idMeal": "52819",
//   "strIngredients": "2 tbsp cajun 1 tsp cayenne pepper 4 fillets white fish 1 tsp vegetable oil 8 flour tortilla 1 sliced avocado 2 shredded little gem lettuce 4 shredded spring onion 1 x 300ml salsa 1 pot sour cream 1 lemon 1 clove finely chopped garlic",
//   "strInstructions":
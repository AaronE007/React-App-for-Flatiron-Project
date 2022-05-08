import React, { useState } from "react";
import ReactCardFlip from 'react-card-flip';



const RecipeCard = ({meal}) => {
  const [isFlipped, setIsFlipped] = useState(false);


  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }

   
    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div style={{margin: "auto", border: "solid", backgroundColor: "blue", height: 800, width: 800, color: "gold"}}>
        <h4 className="card-title">{meal.strMeal}</h4>
        <img src={meal.strMealThumb} alt={meal.strMeal}/>
        <br/>
          <button onClick={handleClick}>Click to See Recipe</button>
        </div>

        <div style={{margin: "auto", border: "solid", backgroundColor: "gold", height: 800, width: 800, color: "blue"}}>
          <h4 className="card-ingredients">{meal.strIngredients}</h4>
          <h5 className="card-instructions">{meal.strInstructions}</h5>
          <button onClick={handleClick}>Click to See the Recipe Completed</button>
        </div>
      </ReactCardFlip>
    )
  
}

export default RecipeCard



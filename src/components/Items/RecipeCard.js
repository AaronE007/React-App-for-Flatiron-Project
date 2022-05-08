import React, { useState } from "react";
import ReactCardFlip from 'react-card-flip';



const RecipeCard = ({meal}) => {
  const [isFlipped, setIsFlipped] = useState(false);


  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }

   
    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div>
        <h4 className="card-title">{meal.strMeal}</h4>
        <img src={meal.strMealThumb} alt={meal.strMeal}/>
        <br/>
          <button onClick={handleClick}>Click to See Recipe</button>
        </div>

        <div>
          This is the back of the card.
          <button onClick={handleClick}>Click to See the Recipe Completed</button>
        </div>
      </ReactCardFlip>
    )
  
}

export default RecipeCard


// <div>
// <div className="card">
//   <div className="cardBody">
//     <h4 className="card-title">{meal.strMeal}</h4>
//     <img src={meal.strMealThumb} alt={meal.strMeal}/>
//   </div>
// </div> 
// </div>
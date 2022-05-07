import React from "react";


const RecipeCard = ({meal}) => {
  return (
    <div>
      <div className="card">
        <div className="cardBody">
          <h4 className="card-title">{meal.strMeal}</h4>
        
        
      </div>
      </div> 
      </div>
  )
}

export default RecipeCard

// function Stock({ stock, handleClick }) {
//   return (
//     <div>
//       <div className="card" onClick={() => handleClick(stock)}>
//         <div className="card-body">
//           <h5 className="card-title">{stock.name}</h5>
//           <p className="card-text">{`${stock.ticker}: ${stock.price}`}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Stock;

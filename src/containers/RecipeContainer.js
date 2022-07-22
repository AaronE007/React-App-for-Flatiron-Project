import RecipeList from '../components/Items/RecipeList'
import React, {useState, useEffect} from "react";

const RecipeContainer = () => {
const [meals, setMeals] = useState([])
  
const fetchData = async () => {
  try {
      const resp = await fetch("http://localhost:3001/meals")
      const data = await resp.json()
      setMeals(data)
  } catch (error) {
      alert(error)
  }
}

useEffect(() => {
 fetchData()
}, [])

  return (
    <div>
      <RecipeList meals={meals} />

    </div>
  )
}

export default RecipeContainer
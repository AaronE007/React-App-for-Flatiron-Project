
import {useState, useEffect} from 'react'

import RecipeList from '../components/Items/RecipeList'

import React from "react";



export default function RecipeContainer() {
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

function addNewMeal(newMeal){
  setMeals([...meals, newMeal]);
}



  return (
    <div>
      <RecipeList meals={meals} addNewMeal={addNewMeal}/>
    </div>
  )
}


import {useState, useEffect} from 'react'

import RecipeList from '../components/Items/RecipeList'

import React from "react";



export default function RecipeContainer() {
const [meals, setMeals] = useState([])
  
const fetchData = async () => {
  try {
      const resp = await fetch("http://localhost:3001/meals")
      const data = await resp.json()
      console.log(data)
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

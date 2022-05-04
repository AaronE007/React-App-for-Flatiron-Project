
import {useState, useEffect} from 'react'

import {RecipeList} from './components/items/RecipeList'

import React from "react";



export default function RecipeContainer() {
const [recipes, setRecipes] = useState([])
  
const fetchData = async () => {
  try {
      const resp = await fetch("http://localhost:3001/meals")
      const data = await resp.json()
      console.log(data)
      setRecipes(data)
  } catch (error) {
      alert(error)
  }
}

useEffect(() => {
 fetchData()
}, [])




  return (
    <div>
      <RecipeList />
    </div>
  )
}

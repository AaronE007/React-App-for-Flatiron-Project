
import {useState, useEffect} from 'react'

import RecipeList from '../components/Items/RecipeList'

import React from "react";

import { Container } from "semantic-ui-react";

import RecipeForm from '../components/Items/RecipeForm';




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
    <Container>
      <RecipeForm addNewMeal={addNewMeal}/>
      <RecipeList meals={meals}/>
    </Container>
  )
}

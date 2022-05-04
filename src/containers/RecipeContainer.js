
import {useState, useEffect} from 'react'

import {RecipeList} from './components/items/RecipeList'

import React from "react";



export default function RecipeContainer() {
  
  const fetchData = async () => {
    try{
      const resp = await fetch("http://localhost:3000/meals")

    }
  }




  return (
    <div>
      <RecipeList />
    </div>
  )
}

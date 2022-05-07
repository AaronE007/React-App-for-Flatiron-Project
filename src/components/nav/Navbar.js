import React from "react";
import {NavLink} from 'react-router-dom'

const style = {
  width: "100%",
  magrin:"25px 50px 75px",
  padding: "5em",
  color: "blue",
  backgroundColor: "Gold",
  fontWeight: "600",
  verticalAlign: "center"
}

const Navbar = () => {

  return (
    <div>
      <NavLink 
      activeStyle ={{
        fontWeight: "bolder",
        color: "blue"
      }}
        exact
        style={style}
        to='/'
        >Home</NavLink>
        <NavLink 
      activeStyle ={{
        fontWeight: "bolder",
        color: "blue"
      }}
        exact
        style={style}
        to='/about'
        >About</NavLink>
        <NavLink 
      activeStyle ={{
        fontWeight: "bolder",
        color: "blue"
      }}
        exact
        style={style}
        to='/recipe'
        >Recipe</NavLink>
        <NavLink 
      activeStyle ={{
        fontWeight: "bolder",
        color: "blue"
      }}
        exact
        style={style}
        to='/recipe/new'
        >New Recipe</NavLink>
    </div>
  )
}

export default Navbar

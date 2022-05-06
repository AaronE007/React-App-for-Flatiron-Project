import React from "react";
import {NavLink} from 'react-router-dom'

const style = {
  width: "100%",
  
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
    </div>
  )
}

export default Navbar

import React from "react";
import {Link} from 'react-router-dom'

const style = {
  width: "100%",
  magrin:"25px 50px 75px",
  padding: "5em",
  color: "black",
  backgroundColor: "Gold",
  fontWeight: "600",
  verticalAlign: "center"
}

const Navbar = () => {

  return (
    <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/recipes">Recipes</Link>
    </div>
  )
}

export default Navbar

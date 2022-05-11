import React from "react";

const style = {
  width: "100%",
  magrin:"25px 50px 25px",
  padding: "1em",
  color: "darkBlue",
  backgroundColor: "Gold",
  fontWeight: "400",
  verticalAlign: "center",
  border: "solid"

}


const About = () => {
  return (
    <div style={{style}}>
     <p> 
      This is a website is for all seafood eaters and pescatarians. 
      Feel free to scroll through the recipes or checkout if there is a specific recipe you want with the search bar.
      If there are any seafood recipes you would like to add, go ahead and enter them in the New Recipe form. 
     </p>
    </div>
  )
}

export default About;



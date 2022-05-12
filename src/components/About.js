import React from "react";

const About = ({ fishImage }) => {
  return (
    <div style={{margin: "auto", border: "solid", backgroundColor: "blue", height: 600, width: 850, color: "gold"}}>
     <p> 
      This is a website is for all seafood eaters and pescatarians. 
      Feel free to scroll through the recipes or checkout if there is a specific recipe you want with the search bar.
      If there are any seafood recipes you would like to add, go ahead and enter them in the New Recipe form. Have a great time cooking and happy feasting!
     </p>
     <img style={{width: "80%"}} src={fishImage} alt="A large Marlin fish" />
    </div>
  )
}

export default About;



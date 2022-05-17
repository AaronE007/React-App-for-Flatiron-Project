import React from "react";

const Search = ({ searchTerm, onChangeSearch }) => {
  
  const handleChange = (event) => {
    onChangeSearch(event.target.value)
  } 

  return (
    <div className="search">
      <input className="prompt" value={searchTerm} onChange={handleChange} />
    </div>
  )
}

export default Search

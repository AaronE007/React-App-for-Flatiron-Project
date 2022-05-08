import React from "react";

const Search = ({ searchTerm,onChangeSearch }) => {
  const handleChange = (e) => {
    onChangeSearch(e.target.value)
  }

  return (
    <div className="search">
      <input className="prompt" value={searchTerm} onChange={handleChange} />
    </div>
  )
}

export default Search

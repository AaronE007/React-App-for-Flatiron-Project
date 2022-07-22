import React, {useState} from 'react'

export default function Counter() {


const [word, setWord] = useState("")
const [number, setNumber] = useState(0)

const handleChange = (e) => {
 setWord(e.target.value)
}

const countWord = (e) => {
    e.preventDefault()
  setNumber(word.length)
}

  return (
    <div>
    <p>{number}</p>
      <form onSubmit={countWord} >
        <label>
          <input onChange={handleChange}type="text" value={word}></input>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

// <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import './index.css'
import CreateGameStartTools from './gameStartTools'

const Draw = () => {
  const [value, setValue] = useState([])
  const handleClick = () => {
  setValue([...value, value + 1])

  
}
console.log(value)
  return (
    <div>
      <button className="newAreaBtn" onClick={handleClick}>
        New Game
      </button>
      {value.map((value) =>{ return <CreateGameStartTools key={value} />})}
    </div>
  )

}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Draw />)
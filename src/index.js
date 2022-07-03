import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import './index.css'
import CreateGameStartTools from './gameStartTools'

const Draw = () => {
  const [componentNumber, setComponentNumber] = useState([])
  const handleClick = () => {
    setComponentNumber([...componentNumber, componentNumber + 1])
  }
  return (
    <div>
      <button className="newAreaBtn" onClick={handleClick}>
        New Game
      </button>
      {componentNumber.map((value) => {
        return <CreateGameStartTools key={value} />
      })}
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Draw />)

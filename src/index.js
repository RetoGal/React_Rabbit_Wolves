import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import './index.css'
import CreateGameStartTools from './gameStartTools'

const Draw = () => {
  const [value, setValue] = useState([])
  const drawGameTools = () => setValue([...value, <CreateGameStartTools />])

  return (
    <div>
      <button className="newAreaBtn" onClick={drawGameTools}>
        New Game
      </button>
      {value}
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Draw />)

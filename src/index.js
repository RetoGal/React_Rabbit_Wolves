import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import './index.css'
import CreateGameStartTools from './gameStartTools'

const Draw = () => {
  const [gameBoardNumber, setGameBoardNumber] = useState([])
  const handleClick = () => {
    setGameBoardNumber([...gameBoardNumber, gameBoardNumber.length + 1])
  }
  return (
    <div>
      <button className="newAreaBtn" onClick={handleClick}>
        New Game
      </button>
      {gameBoardNumber.map((value) => {
        return <CreateGameStartTools key={value} />
      })}
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Draw />)

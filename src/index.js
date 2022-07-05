import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import './index.css'
import CreateGameStartTools from './gameStartTools'
import { NewGameAreaButton } from './componentStyles'

const Draw = () => {
  const [gameBoardNumber, setGameBoardNumber] = useState([])
  const handleClick = () => {
    setGameBoardNumber([...gameBoardNumber, gameBoardNumber.length + 1])
  }
  return (
    <div>
      <NewGameAreaButton onClick={handleClick}>New Game</NewGameAreaButton>
      {gameBoardNumber.map((value) => {
        return <CreateGameStartTools key={value} />
      })}
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Draw />)

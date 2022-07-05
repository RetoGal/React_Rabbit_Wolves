import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import './index.css'
import CreateGameStartTools from './gameStartTools'
import styled from 'styled-components'

const NewGameAreaButton = styled.button`
  border: 2px solid #33275e;
  font-size: 30px;
  width: 150px;
  margin: 5px;
  border-radius: 20px;
  cursor: pointer;
  text-align: center;
  color: white;
  background-color: rgb(255, 0, 212);
`

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

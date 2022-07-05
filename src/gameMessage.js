import React from 'react'
import styled from 'styled-components'

const GameResult = styled.p`
  font-size: 80px;
  text-align: center;
  color: red;
`
const GameStatusMessage = (props) => (
  <GameResult>
    {props.gameState.theResultOfTheGame === 'youWon'
      ? 'CONGRATULATIONS!! YOU WON'
      : props.gameState.theResultOfTheGame === 'gameOver'
      ? 'YOU LOST'
      : ''}
  </GameResult>
)

export default GameStatusMessage

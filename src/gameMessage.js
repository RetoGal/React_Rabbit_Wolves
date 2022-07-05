import React from 'react'
import { GameResult } from './componentStyles'

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

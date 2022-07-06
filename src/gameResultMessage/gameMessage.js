import React from 'react'
import { GameResultMessage } from './stylesForGameMessage'

const GameStatusMessage = (props) => (
  <GameResultMessage>
    {props.gameState.theResultOfTheGame === 'youWon'
      ? 'CONGRATULATIONS!! YOU WON'
      : props.gameState.theResultOfTheGame === 'gameOver'
      ? 'YOU LOST'
      : ''}
  </GameResultMessage>
)

export default GameStatusMessage

import React from 'react'

const GameStatusMessage = (props) =>
  props.GAME_STATE.theResultOfTheGame === 'gameOver' ? (
    <h1>GAME OVER</h1>
  ) : props.GAME_STATE.theResultOfTheGame === 'youWon' ? (
    <h1> YOU WON</h1>
  ) : (
    ''
  )

export default GameStatusMessage

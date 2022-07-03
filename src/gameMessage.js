import React from 'react'
import CHARACTER_PARAMS from './objCaracterParams'

const GameStatusMessage = (props) => {
  if (props.gameState.theResultOfTheGame === 'gameOver') {
    return (
      <div>
        <img src={CHARACTER_PARAMS.xashlama.src} />
      </div>
    )
  } else if (props.gameState.theResultOfTheGame === 'youWon') {
    return <h1> YOU WON</h1>
  }
}

export default GameStatusMessage

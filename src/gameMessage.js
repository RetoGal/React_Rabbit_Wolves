import React from "react"

const GameStatusMessage = (props) => {
  const GAME_STATE = props.gameObj
  console.log(GAME_STATE,3)
  GAME_STATE.theGameContinues = false
  console.log(GAME_STATE.theGameContinues)
  if (GAME_STATE.theResultOfTheGame === 'gameOver') {
    <h2>GAME OVER</h2>
  } else if (GAME_STATE.theResultOfTheGame === 'youWon') {
    <h2> YOU WON</h2>
  } 
 
}
export default GameStatusMessage
import createGameBoardMatrix from './setCharacterInfreePositon'
import CreateGameBoard from './gameBoard'
import { useState } from 'react'
import gameMovement from './gameMove'
import GameStatusMessage from './gameMessage'

const SELECT_OPTION_VALUE = [5, 7, 10]
const buttonsDirection = ['up', 'right', 'left', 'down']

const CreateGameStartTools = () => {
  const [optionValue, setOptionValue] = useState(SELECT_OPTION_VALUE[0])
  const selOptionValue = parseInt(optionValue)
  const [gameState, setGameState] = useState({
    matrix: [],
    theGameContinues: false,
    theResultOfTheGame: '',
  })
  const selectChange = (evt) => setOptionValue(evt.target.value)
  const startGame = () => {
    setGameState({
      matrix: createGameBoardMatrix(selOptionValue),
      theGameContinues: true,
      theResultOfTheGame: '',
    })
  }

  const arrowChange = (direction) => {
     if (gameState.theGameContinues === false) {
      return
    }
    setGameState(gameMovement(direction, gameState))
  }
  return (
    <div>
      <select className="select" onChange={selectChange}>
        {SELECT_OPTION_VALUE.map((optionValue) => (
          <option key={optionValue} value={optionValue}>
            {optionValue}*{optionValue}
          </option>
        ))}
      </select>

      <button key={'startBtn'} className="startBtn" onClick={startGame}>
        Start
      </button>

      {gameState.theGameContinues === false ? (
        <GameStatusMessage gameState={gameState} />
      ) : (
        <CreateGameBoard gameState={gameState} />
      )}

      <div className="arrowDirection">
        { buttonsDirection.map((direction) => {
          return (
            <button key={direction} className= {direction} onClick={() => arrowChange(direction)}>{direction}</button>
          )
        })}
      </div>
    </div>
  )
}

export default CreateGameStartTools

import createGameBoardMatrix from '../functions/setCharacterInfreePositon'
import GameWrapper from '../gameWrapper/gameWrapper'
import { useState } from 'react'
import gameMovement from '../functions/gameMove'
import GameStatusMessage from '../gameResultMessage/gameMessage'
import {
  SelectGameBoard,
  StartGameButton,
  DivForDirectionButtons,
  DirectionButons,
} from './stylesForGameResultMessage'
const SELECT_OPTION_VALUE = [5, 7, 10]
const buttonsDirection = ['up', 'right', 'left', 'down']

const CreateGameStartTools = () => {
  const [optionValue, setOptionValue] = useState(SELECT_OPTION_VALUE[0])
  const [gameState, setGameState] = useState({
    matrix: [],
    theGameContinues: false,
    theResultOfTheGame: '',
  })
  const selectChange = (e) => setOptionValue(parseInt(e.target.value))
  const startGame = () => {
    setGameState({
      matrix: createGameBoardMatrix(optionValue),
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
      <SelectGameBoard onChange={selectChange}>
        {SELECT_OPTION_VALUE.map((optionValue) => (
          <option key={optionValue} value={optionValue}>
            {optionValue}*{optionValue}
          </option>
        ))}
      </SelectGameBoard>

      <StartGameButton key={'startBtn'} onClick={startGame}>
        Start
      </StartGameButton>

      {gameState.theGameContinues === false ? (
        <GameStatusMessage gameState={gameState} />
      ) : (
        <GameWrapper gameState={gameState} />
      )}

      <DivForDirectionButtons>
        {buttonsDirection.map((direction) => {
          return (
            <DirectionButons
              direction={direction}
              key={direction}
              onClick={() => arrowChange(direction)}
            >
              {direction}
            </DirectionButons>
          )
        })}
      </DivForDirectionButtons>
    </div>
  )
}

export default CreateGameStartTools

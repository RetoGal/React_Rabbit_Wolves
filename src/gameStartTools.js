import createGameBoardMatrix from './setCharacterInfreePositon'
import CreateDirectionButtons from './directionButtons'
import CreateGameBoard from './gameBoard'
import { useState } from 'react'
import gameMovement from './gameMove'
import moveWolvesOnNewBox from './moveWolvesOnNewBox'
import GameStatusMessage from './gameMessage'

const SELECT_OPTION_VALUE = [5, 7, 10]

const CreateGameStartTools = () => {
  const [value, setValue] = useState(SELECT_OPTION_VALUE[0])
  const [gameState, setGameState] = useState({
    matrix: [],
    theGameContinues: '',
    theResultOfTheGame: '',
  })

  const selectChange = (evt) => setValue(evt.target.value)
  const startGame = () => {
    setGameState({
      matrix: createGameBoardMatrix(parseInt(value)),
      theGameContinues: true,
      theResultOfTheGame: '',
    })
  }
  const GAME_STATE = { ...gameState }
  const arrowChange = (direction) => {
    setGameState(GAME_STATE, gameMovement(direction, GAME_STATE))

  }
  if (GAME_STATE.theGameContinues === false) {
    return <GameStatusMessage GAME_STATE={GAME_STATE} />
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

      {<CreateGameBoard gameState={gameState} />}

      <div className="arrowDirection">
        <div className="divUp">
          <CreateDirectionButtons onClick={() => arrowChange('up')} />
        </div>
        <div className="arrow_sides">
          <div className="divLeft">
            <CreateDirectionButtons onClick={() => arrowChange('left')} />
          </div>
          <div className="divRight">
            <CreateDirectionButtons onClick={() => arrowChange('right')} />
          </div>
        </div>
        <div className="divDown">
          <CreateDirectionButtons onClick={() => arrowChange('down')} />
        </div>
      </div>
    </div>
  )
}

export default CreateGameStartTools

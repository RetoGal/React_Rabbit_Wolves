import createGameBoardMatrix from './setCharacterInfreePositon'
import CreateDirectionButtons from './directionButtons'
import CreateGameBoard from './createGameBoard'
import { useState } from 'react'
import gameMovement from './gameMove'
import moveWolvesOnNewBox from './moveWolvesOnNewBox'
import GameStatusMessage  from './gameMessage'

const SELECT_OPTION_VALUE = {
  option1: 5,
  option2: 7,
  option3: 10,
}

const CreateGameStartTools = () => {
  const [value, setValue] = useState(SELECT_OPTION_VALUE.option1)
  const [gameState, setGameState] = useState({
    matrix: [],
    theGameContinues: '',
    theResultOfTheGame: '',
  })
  
  const SelectChange = (evt) => setValue(evt.target.value)
  const SubmitChange = () => {
    setGameState({
      matrix: createGameBoardMatrix(parseInt(value)),
      theGameContinues: true,
      theResultOfTheGame: '',
    })
  }
  const GAME_STATE = {...gameState}
  const ArrowChange = (direction) => {
    setGameState(GAME_STATE,gameMovement(direction, GAME_STATE))
    moveWolvesOnNewBox(GAME_STATE)
  }
   if(GAME_STATE.theGameContinues === false){
    return  <GameStatusMessage GAME_STATE = {GAME_STATE} />
   }


  return (
    <div>
      <select className="select" onChange={SelectChange}>
        {Object.values(SELECT_OPTION_VALUE).map((optionValue) => (
          <option key={optionValue} value={optionValue}>
            {optionValue}*{optionValue}
          </option>
        ))}
      </select>

      <button key={'startBtn'} className="startBtn" onClick={SubmitChange}>
        Start
      </button>
      
      {<CreateGameBoard gameObj = {gameState} />}

      <div className="arrowDirection">
        <div className="divUp">
          <CreateDirectionButtons onClick={() => ArrowChange('up')} />
        </div>
        <div className="arrow_sides">
          <div className="divLeft">
            <CreateDirectionButtons onClick={() => ArrowChange('left')} />
          </div>
          <div className="divRight">
            <CreateDirectionButtons onClick={() => ArrowChange('right')} />
          </div>
        </div>
        <div className="divDown">
          <CreateDirectionButtons onClick={() => ArrowChange('down')} />
        </div>
      </div>
    </div>
  )
}

export default CreateGameStartTools

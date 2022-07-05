import createGameBoardMatrix from './setCharacterInfreePositon'
import GameWrapper from './gameWrapper'
import { useState } from 'react'
import gameMovement from './gameMove'
import GameStatusMessage from './gameMessage'
import styled from 'styled-components'

const DirectionButons = styled.button`
  position: relative;
  left: ${(props) => (props.direction === 'right' ? '100px' : '')};
  right: ${(props) => (props.direction === 'left' ? '100px' : '')};
  bottom: ${(props) =>
    props.direction === 'left'
      ? '50px'
      : props.direction === 'down'
      ? '50px'
      : ''};
  border: 2px solid #33275e;
  font-size: 30px;
  width: 150px;
  margin: 5px;
  border-radius: 20px;
  cursor: pointer;
  text-align: center;
  color: white;
  background-color: rgb(255, 0, 212);
`

const StartGameButton = styled.button`
  border: 2px solid #33275e;
  font-size: 30px;
  width: 150px;
  padding: 4px;
  margin: 20px;
  border-radius: 20px;
  background-color: #4d0632;
  cursor: pointer;
  text-align: center;
  color: white;
`
const SelectGameBoard = styled.select`
  border: 2px solid #33275e;
  font-size: 30px;
  width: 150px;
  padding: 4px;
  margin: 20px;
  border-radius: 20px;
  background-color: #4d0632;
  cursor: pointer;
  text-align: center;
  color: white;
`

const DivForDirectionButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

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

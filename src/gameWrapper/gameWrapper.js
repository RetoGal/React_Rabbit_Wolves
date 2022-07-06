import GameBoard from '../gameBoard/gameBoard'
import { DivGameWrapper, DivСellСharacter } from './divCellCharacter'

const GameWrapper = (props) => {
  const gameState = props.gameState
  return (
    <DivGameWrapper matrixLength={gameState.matrix.length}>
      {gameState.matrix.map((row) =>
        row.map((cell, i) => {
          return (
            <DivСellСharacter key={i}>
              <GameBoard cell={cell} />
            </DivСellСharacter>
          )
        })
      )}
    </DivGameWrapper>
  )
}

export default GameWrapper

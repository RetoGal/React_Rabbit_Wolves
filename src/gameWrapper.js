import GameBoard from './gameBoard'
import styled from 'styled-components'

const DivСellСharacter = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ff6d419d;
  margin: 1px;
`

const DivGameWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #ffdafa;
  border-radius: 30px;
  padding: 20px;
  width: ${(props) => props.matrixLength * 60 + 20 + 'px'};
`

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

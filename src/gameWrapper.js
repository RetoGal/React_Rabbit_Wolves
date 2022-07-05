import GameBoard from './gameBoard'

const GameWrapper = (props) => {
  const GAME_STATE = props.gameState
  const gameBoardStyle = {
    width: GAME_STATE.matrix.length * 60 + 20 + 'px',
  }
  return (
    <div className={'gameWrapper'} style={gameBoardStyle}>
      {GAME_STATE.matrix.map((row) =>
        row.map((cell, i) => {
          return (
            <div key={i} className="box">
              <GameBoard cell={cell} />
            </div>
          )
        })
      )}
    </div>
  )
}

export default GameWrapper

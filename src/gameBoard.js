import PutTheCharacterInFreeCell from './drawACharacter'

const gameBoard = (props) => {
  const GAME_STATE = props.gameState
  const gameBoardStyle = {
    width: GAME_STATE.matrix.length * 60 + 20 + 'px',
  }
  return (
    <div className={"gameBoard"} style={gameBoardStyle}>
      {GAME_STATE.matrix.map((row) =>
        row.map((cell, i) => {
          return (
            <div key={i} className="box">
              <PutTheCharacterInFreeCell cell={cell} />
            </div>
          )
        })
      )}
    </div>
  )
}

export default gameBoard

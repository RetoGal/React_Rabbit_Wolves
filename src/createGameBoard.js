import PutTheCharacterInFreeCell from './putTheCharacterInFreeCell'

const CreateGameBoard = (props) => {
  const GAME_STATE = props.gameObj
  const gameBoardStyle = {
    width: GAME_STATE.matrix.length * 60 + 20 + 'px',
  }
  return (
    <div className={"gameBoard"} style={gameBoardStyle}>
      {GAME_STATE.matrix.map((cordinateX) =>
        cordinateX.map((cordinateY, i) => {
          return (
            
            <div key={i} className="box">
              <PutTheCharacterInFreeCell cordinateY={cordinateY} />
            </div>
          )
        })
      )}
    </div>
  )
}

export default CreateGameBoard

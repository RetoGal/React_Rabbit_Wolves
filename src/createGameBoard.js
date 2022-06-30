import PutTheCharacterInFreeCell from './putTheCharacterInFreeCell'

const CreateGameBoard = (props) => {
  const matrix = props.gameArr
  const gameBoardStyle = {
    width: matrix.length * 60 + 20 + 'px',
  }
  return (
    <div className={"gameBoard"} style={gameBoardStyle}>
      {matrix.map((cordinateX) =>
        cordinateX.map((cordinateY, i) => {
          return (
            <div key={i} className="box">
              <PutTheCharacterInFreeCell cordinateY={cordinateY} />
            </div>
          )
        })
      )}z
    </div>
  )
}

export default CreateGameBoard

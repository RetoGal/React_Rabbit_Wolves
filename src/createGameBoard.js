import PutTheCharacterInFreeCell from './putTheCharacterInFreeCell'

const CreateGameBoard = (props) => {
  const matrix = props.matrix
  const gameBoardStyle = {
    width: matrix.length * 60 + 20 + 'px',
  }
  return (
    <div className="gameBoard" style={gameBoardStyle}>
      {matrix.map((cordinateX) =>
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

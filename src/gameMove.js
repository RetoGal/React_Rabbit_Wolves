import CHARACTER_PARAMS from './objCaracterParams'
import getCordinatesOfCharacter from './getCordinatesOfCharacter'
import moveRabbit from './moveRabbit'
import moveWolvesOnNewBox from './moveWolvesOnNewBox'

const gameMovement = (direction, gameState) => {
  const newGameState = {...gameState}
  const matrix = newGameState.matrix
  const cordinateOfCharacter = getCordinatesOfCharacter(
    newGameState,
    CHARACTER_PARAMS.rabbit.name
  )
  const [x, y] = cordinateOfCharacter[0]
  let newX = x
  let newY = y
  direction === 'left'  && (y === 0 ? (newY = matrix.length - 1) : (newY = y - 1))
  direction === 'right' && (y === matrix.length - 1 ? (newY = 0) : (newY = y + 1))
  direction === 'up'    && (x === 0 ? (newX = matrix.length - 1) : (newX = x - 1))
  direction === 'down'  && (x === matrix.length - 1 ? (newX = 0) : (newX = x + 1))
  moveRabbit(newGameState, newX, newY)
  moveWolvesOnNewBox(newGameState)

  return newGameState
}






export default gameMovement
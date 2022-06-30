import CHARACTER_PARAMS from './objCaracterParams'
import getCordinatesOfCharacter from './getCordinatesOfCharacter'
import moveRabbit from './moveRabbit'

const gameMovement = (direction, arr) => {
 
  const cordinateOfCharacter = getCordinatesOfCharacter(
    arr,
    CHARACTER_PARAMS.rabbit.name
  )
  
  const [x, y] = cordinateOfCharacter[0]
  let newX = x
  let newY = y

  direction === 'left'  && (y === 0 ? (newY = arr.length - 1) : (newY = y - 1))
  direction === 'right' && (y === arr.length - 1 ? (newY = 0) : (newY = y + 1))
  direction === 'up'    && (x === 0 ? (newX = arr.length - 1) : (newX = x - 1))
  direction === 'down'  && (x === arr.length - 1 ? (newX = 0) : (newX = x + 1))
  const movementRabbit = moveRabbit(arr, newX, newY)

  return movementRabbit
}

export default gameMovement
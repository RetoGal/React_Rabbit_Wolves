import getCordinatesOfCharacter from './getCordinatesOfCharacter'
import CHARACTER_PARAMS from './objCaracterParams'

const FREE_CELL = 0
const moveRabbit = (GAME_STATE, x, y) => {
  const matrix = GAME_STATE.matrix
  const cordinateOfRabbit = getCordinatesOfCharacter(
    GAME_STATE,
    CHARACTER_PARAMS.rabbit.name
  )
  const [rabbitX, rabbitY] = cordinateOfRabbit[0]
  matrix[rabbitX][rabbitY] = FREE_CELL
  matrix[x][y] === FREE_CELL
    ? (matrix[x][y] = CHARACTER_PARAMS.rabbit.name)
    : matrix[x][y] === CHARACTER_PARAMS.wolf.name
    ? (GAME_STATE.theResultOfTheGame = 'gameOver')
    : matrix[x][y] === CHARACTER_PARAMS.home.name
    ? (GAME_STATE.theResultOfTheGame = 'youWon')
    : (matrix[rabbitX][rabbitY] = CHARACTER_PARAMS.rabbit.name)
  GAME_STATE.theResultOfTheGame !== ''
    ? (GAME_STATE.theGameContinues = false)
    : (GAME_STATE.theGameContinues = true)
}

export default moveRabbit

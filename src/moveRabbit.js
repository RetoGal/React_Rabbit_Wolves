import getCordinatesOfCharacter from './getCordinatesOfCharacter'
import CHARACTER_PARAMS from './objCaracterParams'

const FREE_CELL = 0

const moveRabbit = (arr, x, y) => {
  const cordinateOfRabbit = getCordinatesOfCharacter(
    arr,
    CHARACTER_PARAMS.rabbit.name
  )
  const [rabbitX, rabbitY] = cordinateOfRabbit[0]
  arr[rabbitX][rabbitY] = FREE_CELL

  arr[x][y] === FREE_CELL
    ? (arr[x][y] = CHARACTER_PARAMS.rabbit.name)
    : arr[x][y] === CHARACTER_PARAMS.wolf.name
    ? alert('GameOver')
    : arr[x][y] === CHARACTER_PARAMS.home.name
    ? alert('YouWon')
    : (arr[rabbitX][rabbitY] = CHARACTER_PARAMS.rabbit.name)

  return arr
}

export default moveRabbit

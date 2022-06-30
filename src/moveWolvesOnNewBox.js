import getCordinatesOfCharacter from './getCordinatesOfCharacter'
import findNearestСell from './findNearestСell'
import getRabbitNextToWolf from './getRabbitNextToWolf'
import CHARACTER_PARAMS from './objCaracterParams'
const FREE_CELL = 0

const moveWolvesOnNewBox = (GAME_STATE) => {
  const matrix = GAME_STATE.matrix
  const sideWolves = getCordinatesOfCharacter(GAME_STATE, CHARACTER_PARAMS.wolf.name)
  sideWolves.forEach((cordinateWolves) => {
    const [XnearestСell, YnearestСell] = findNearestСell(GAME_STATE, cordinateWolves)
    const [Xwolves, Ywolves] = cordinateWolves
    matrix[Xwolves][Ywolves] = FREE_CELL
    matrix[XnearestСell][YnearestСell] = CHARACTER_PARAMS.wolf.name
    getRabbitNextToWolf(GAME_STATE, cordinateWolves)
    return matrix
  })
}

export default moveWolvesOnNewBox
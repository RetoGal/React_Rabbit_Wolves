import getNeighbouringCoordinates from './getNeighbouringCoordinates'
const FREE_CELL = 0

const getFreeBoxNextToWolf = (GAME_STATE, [x, y]) => {
  const matrix = GAME_STATE.matrix
  const sidesWolf = getNeighbouringCoordinates(GAME_STATE, [x, y])
  const result = []
  sidesWolf.forEach((freeCell) => {
    if(GAME_STATE.theGameContinues === false){
      return
    }
    const [x, y] = freeCell
    matrix[x][y] === FREE_CELL && result.push(freeCell)
  })
  return result
}

export default getFreeBoxNextToWolf
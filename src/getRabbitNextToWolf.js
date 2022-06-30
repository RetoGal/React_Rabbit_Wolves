import getNeighbouringCoordinates from './getNeighbouringCoordinates'

const getRabbitNextToWolf = (GAME_STATE, [x, y]) => {
  const matrix = GAME_STATE.matrix
  const sidesWolf = getNeighbouringCoordinates(GAME_STATE, [x, y])
  sidesWolf.forEach((freeCell) => {
    const [x, y] = freeCell
    if (GAME_STATE.theGameContinues === false) {
      return
    }

    if (matrix[x][y] === 'rabbit') {
      GAME_STATE.theResultOfTheGame = 'gameOver'
      GAME_STATE.theGameContinues = false
    }
  })
}

export default getRabbitNextToWolf

import getNeighbouringCoordinates from './getNeighbouringCoordinates'

const getRabbitNextToWolf = (gameState, [x, y]) => {
  const matrix = gameState.matrix
  const sidesWolf = getNeighbouringCoordinates(gameState, [x, y])
  sidesWolf.forEach((freeCell) => {
    if (gameState.theGameContinues === false) {
      return
    }
    const [x, y] = freeCell
    if (matrix[x][y] === 'rabbit') {
      gameState.theResultOfTheGame = 'gameOver'
      gameState.theGameContinues = false
    }
  })
}

export default getRabbitNextToWolf

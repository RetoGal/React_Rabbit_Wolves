const isInRange = (GAME_STATE, [x, y]) =>
  x >= 0 &&
  x < GAME_STATE.matrix.length &&
  y >= 0 &&
  y < GAME_STATE.matrix.length

const getNeighbouringCoordinates = (gameState, [x, y]) => {
  const cells = [
    [x - 1, y],
    [x + 1, y],
    [x, y + 1],
    [x, y - 1],
  ]
  return cells.filter((cell) => isInRange(gameState, cell))
}

export default getNeighbouringCoordinates

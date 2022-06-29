import getNeighbouringCoordinates from './getNeighbouringCoordinates'

const getRabbitNextToWolf = (arr, [x, y]) => {
  const sidesWolf = getNeighbouringCoordinates(arr, [x, y])
  sidesWolf.forEach((freeCell) => {
    const [x, y] = freeCell
    arr[x][y] === 'rabbit' && alert('gameOver')
  })
}

export default getRabbitNextToWolf

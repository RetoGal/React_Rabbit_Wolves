import getNeighbouringCoordinates from './getNeighbouringCoordinates'

const getRabbitNextToWolf = (GAME_STATE, [x, y]) => {
  const matrix = GAME_STATE.matrix
  const sidesWolf = getNeighbouringCoordinates(GAME_STATE, [x, y])
  sidesWolf.forEach((freeCell) => {
    if(GAME_STATE.theGameContinues === false){
      return
    }
    const [x, y] = freeCell
    GAME_STATE.theGameContinues = false
    if(matrix[x][y] === 'rabbit'){
       GAME_STATE.theResultOfTheGame = "gameOver"
       alert('gameOver')
       return
    }
     
  })
}

export default getRabbitNextToWolf
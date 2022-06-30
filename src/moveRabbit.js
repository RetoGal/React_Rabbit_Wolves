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

  if(  matrix[x][y] === FREE_CELL){
    (matrix[x][y] = CHARACTER_PARAMS.rabbit.name)
  }else if( matrix[x][y] === CHARACTER_PARAMS.wolf.name ) {
    GAME_STATE.theGameContinues = false
    GAME_STATE.theResultOfTheGame = "gameOver"
    
    alert('GameOver')
    return
  } else if(matrix[x][y] === CHARACTER_PARAMS.home.name) {
    GAME_STATE.theGameContinues = false
    GAME_STATE.theResultOfTheGame = "youWon"
    alert('youWon')
    return
  } else {
    (matrix[rabbitX][rabbitY] = CHARACTER_PARAMS.rabbit.name)
  }

    
  
     
    
  

  return matrix
}

export default moveRabbit
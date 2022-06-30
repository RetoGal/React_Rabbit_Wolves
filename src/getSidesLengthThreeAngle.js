import getFreeBoxNextToWolf from './getFreeBoxNextToWolf'
import getCordinatesOfCharacter from './getCordinatesOfCharacter'
import calculateDistance from './calculateDistance'
import CHARACTER_PARAMS from './objCaracterParams'

const getSidesLengthThreeAngle = (GAME_STATE, [x, y]) => {
  const sidesWolf = getFreeBoxNextToWolf(GAME_STATE, [x, y])
  const cordRabbit = getCordinatesOfCharacter(GAME_STATE, CHARACTER_PARAMS.rabbit.name)
  return sidesWolf.map((item) => calculateDistance(item, cordRabbit[0]))
}

export default getSidesLengthThreeAngle
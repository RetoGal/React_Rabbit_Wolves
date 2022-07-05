import CHARACTER_PARAMS from './objCaracterParams'
import { ImgCharacters } from './componentStyles'

const GameBoard = (props) =>
  props.cell === CHARACTER_PARAMS.rabbit.name ? (
    <ImgCharacters src={CHARACTER_PARAMS.rabbit.src} />
  ) : props.cell === CHARACTER_PARAMS.wolf.name ? (
    <ImgCharacters src={CHARACTER_PARAMS.wolf.src} />
  ) : props.cell === CHARACTER_PARAMS.ban.name ? (
    <ImgCharacters src={CHARACTER_PARAMS.ban.src} />
  ) : props.cell === CHARACTER_PARAMS.home.name ? (
    <ImgCharacters src={CHARACTER_PARAMS.home.src} />
  ) : (
    ''
  )
export default GameBoard

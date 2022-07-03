import CHARACTER_PARAMS from './objCaracterParams'

const DrawACharacter = (props) =>
  props.cell === CHARACTER_PARAMS.rabbit.name ? (
    <img src={CHARACTER_PARAMS.rabbit.src} />
  ) : props.cell === CHARACTER_PARAMS.wolf.name ? (
    <img src={CHARACTER_PARAMS.wolf.src} />
  ) : props.cell === CHARACTER_PARAMS.ban.name ? (
    <img src={CHARACTER_PARAMS.ban.src} />
  ) : props.cell === CHARACTER_PARAMS.home.name ? (
    <img src={CHARACTER_PARAMS.home.src} />
  ) : (
    ''
  )
export default DrawACharacter

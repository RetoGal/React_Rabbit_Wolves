import CHARACTER_PARAMS from './objCaracterParams'

const PutTheCharacterInFreeCell = (props) =>
  props.cordinateY === CHARACTER_PARAMS.rabbit.name ? (
    <img src={CHARACTER_PARAMS.rabbit.src} />
  ) : props.cordinateY === CHARACTER_PARAMS.wolf.name ? (
    <img src={CHARACTER_PARAMS.wolf.src} />
  ) : props.cordinateY === CHARACTER_PARAMS.ban.name ? (
    <img src={CHARACTER_PARAMS.ban.src} />
  ) : props.cordinateY === CHARACTER_PARAMS.home.name ? (
    <img src={CHARACTER_PARAMS.home.src} />
  ) : (
    ''
  )

export default PutTheCharacterInFreeCell

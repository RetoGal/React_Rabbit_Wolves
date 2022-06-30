import CHARACTER_PARAMS from './objCaracterParams'


const PutTheCharacterInFreeCell = (props) => {
  const box = props.cordinateY
  if (box === CHARACTER_PARAMS.rabbit.name) {
    return <img src={CHARACTER_PARAMS.rabbit.src} />
  } else if (box === CHARACTER_PARAMS.wolf.name) {
    return <img src={CHARACTER_PARAMS.wolf.src} />
  } else if (box === CHARACTER_PARAMS.ban.name) {
    return <img src={CHARACTER_PARAMS.ban.src} />
  } else if (box === CHARACTER_PARAMS.home.name) {
    return <img src={CHARACTER_PARAMS.home.src} />
  }
}

export default PutTheCharacterInFreeCell
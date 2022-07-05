import styled from 'styled-components'

export const ImgCharacters = styled.img`
  width: 60px;
  height: 60px;
`
export const GameResult = styled.p`
  font-size: 80px;
  text-align: center;
  color: red;
`

export const DirectionButons = styled.button`
  position: relative;
  left: ${(props) => (props.direction === 'right' ? '100px' : '')};
  right: ${(props) => (props.direction === 'left' ? '100px' : '')};
  bottom: ${(props) =>
    props.direction === 'left'
      ? '50px'
      : props.direction === 'down'
      ? '50px'
      : ''};
  border: 2px solid #33275e;
  font-size: 30px;
  width: 150px;
  margin: 5px;
  border-radius: 20px;
  cursor: pointer;
  text-align: center;
  color: white;
  background-color: rgb(255, 0, 212);
`

export const StartGameButton = styled.button`
  border: 2px solid #33275e;
  font-size: 30px;
  width: 150px;
  padding: 4px;
  margin: 20px;
  border-radius: 20px;
  background-color: #4d0632;
  cursor: pointer;
  text-align: center;
  color: white;
`
export const SelectGameBoard = styled.select`
  border: 2px solid #33275e;
  font-size: 30px;
  width: 150px;
  padding: 4px;
  margin: 20px;
  border-radius: 20px;
  background-color: #4d0632;
  cursor: pointer;
  text-align: center;
  color: white;
`

export const DivForDirectionButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const DivСellСharacter = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ff6d419d;
  margin: 1px;
`

export const DivGameWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #ffdafa;
  border-radius: 30px;
  padding: 20px;
  width: ${(props) => props.matrixLength * 60 + 20 + 'px'};
`

export const NewGameAreaButton = styled.button`
  border: 2px solid #33275e;
  font-size: 30px;
  width: 150px;
  margin: 5px;
  border-radius: 20px;
  cursor: pointer;
  text-align: center;
  color: white;
  background-color: rgb(255, 0, 212);
`

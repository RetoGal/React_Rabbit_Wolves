import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: rgb(104, 150, 150);
  }
  
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

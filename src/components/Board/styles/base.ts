import styled from 'styled-components/macro'

interface KeyBoardStylesProps {
  rows: string
}

interface KeyCapStylesProps {
  color: string
}

interface KeyRowStylesProps {
  columns: string
}

interface hiddenContainerStylesProps {
  hide: 'true' | 'false'
}

export const Board = styled.div`
  height: fit-content;
  width: fit-content;
  min-height: 200px;
  min-width: 600px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: relative;
`

export const KeyBoard = styled.div<KeyBoardStylesProps>`
  margin-top: 50px;
  display: grid;
  row-gap: 15px;
  width: 100%;
  grid-template-rows: repeat(${props => props.rows}, 1fr);
`

export const KeyCap = styled.div<KeyCapStylesProps>`
  height: 100%;
  width: 100%;
  background-color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;

  &:focus {
    outline: none;
  }
`

export const KeyRow = styled.div<KeyRowStylesProps>`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  column-gap: 15px;
  height: 50px;
`

export const hiddenInput = styled.input<hiddenContainerStylesProps>`
  display: ${props => props.hide === 'true' ? 'none' : 'block'};
  position: absolute;
  top: 0;
  left: 0;
  background-color: red;
  background-color: transparent;
  z-index: 10;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border: none;
  color: transparent;

  &:focus {
    outline: none;
  }
`
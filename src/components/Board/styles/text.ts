import styled from 'styled-components/macro'

interface largeTextStylesProps {
  color: string
}

export const largeText = styled.span<largeTextStylesProps>`
  color: ${props => props.color};
  font-size: 60px;
  line-height: 42px;
  padding-top: 50px;
  display: block;
`

export const smallText = styled.p`
  font-size: 18px;
  color: black;
  padding-top: 50px;
  display: block;
`

export const letter = styled.span`
  display: block;
  height: 100%;
  width: 100%;
  background-color: yellow;
`
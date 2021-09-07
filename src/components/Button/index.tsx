import React from 'react'
import styles from './styles'

interface ButtonProps {
  children?: React.ReactNode
  onClick?(): void
}

const Button: React.FC<ButtonProps> = (props) => {

  const {
    children = 'Enter Button Text',
    onClick = () => {}
  } = props

  return (
    <styles.Button
      onClick={onClick}
    >
      {children}
    </styles.Button>
  )
}

export default Button
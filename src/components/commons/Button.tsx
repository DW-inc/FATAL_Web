import styled from '@emotion/styled'
import React from 'react'

type ButtonProps = {
  backgroundColor: string
  children: React.ReactNode
  type: 'button' | 'submit' | 'reset' | undefined
}

const Button = styled.button<ButtonProps>`
  padding: 8px;
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor} !important;
  border: 1px solid black;
  color: #000;
`

export default Button

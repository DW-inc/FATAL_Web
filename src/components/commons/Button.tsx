import styled from '@emotion/styled'
import React from 'react'

type ButtonProps = {
  backgroundColor: string
  width: string
  height: string
  children: React.ReactNode
  type: 'button' | 'submit' | 'reset' | undefined
  fontFamily: string
  fontStyle: string
  fontSize: string
  color: string
  border: string
}

const Button = styled.button<ButtonProps>`
  background-color: ${(props) => props.backgroundColor} !important;
  width: ${(props) => props.width} !important;
  height: ${(props) => props.height} !important;
  border: 1px solid black;
  color: ${(props) => props.color} !important;
  font-family: ${(props) => props.fontFamily};
  font-style: ${(props) => props.fontStyle};
  font-size: ${(props) => props.fontSize};
  border: ${(props) => props.border};
`

export default Button

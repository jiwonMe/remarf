import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  children: string
}

const Button = (props: ButtonProps) => {
  return (
    <ButtonLayout>
      {props.children}
    </ButtonLayout>
  )
}

export default Button

const ButtonLayout = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`

export const __FramerMetadata__ = {
  exports: {
    default: {
      type: "reactComponent",
      name: "Sample",
      slots: [],
      annotations: {
        framerSupportedLayoutHeight: "auto",
        framerSupportedLayoutWidth: "auto",
        framerContractVersion: "1"
      }
    },
    __FramerMetadata__: {
      type: "variable"
    }
  }
};

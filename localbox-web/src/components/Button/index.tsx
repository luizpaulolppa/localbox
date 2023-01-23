import React from "react";

import * as S from './styles'

type ButtonProp = {
  secondary?: boolean
  title?: string
  type?: 'button' | 'submit'
  onClick?: () => void
  children?: React.ReactElement | React.ReactElement[];
}

const Button = ({ secondary, title, type, onClick, children }: ButtonProp) => {
  return (
    <S.Button secondary={secondary} onClick={onClick} type={type}>
      {children || title}
    </S.Button>
  )
}

export default Button
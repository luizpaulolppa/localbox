import React from "react";

import * as S from './styles'

type ButtonProp = {
  secondary?: boolean
  children?: React.ReactElement | React.ReactElement[];
}

const Button = ({ secondary, children }: ButtonProp) => {
  return (
    <S.Button secondary={secondary}>
      {children}
    </S.Button>
  )
}

export default Button
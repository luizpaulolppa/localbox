import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import * as S from './styles'

type ButtonProp = {
  loading?: boolean
  secondary?: boolean
  title?: string
  type?: 'button' | 'submit'
  onClick?: () => void
  children?: React.ReactNode;
}

const Button = ({ secondary, title, type, onClick, loading, children }: ButtonProp) => {
  function handleOnClick() {
    !loading && onClick && onClick()
  }
  return (
    <S.Button secondary={secondary} onClick={handleOnClick} type={type}>
      {loading && <AiOutlineLoading3Quarters className="loading" />}
      {children || title}
    </S.Button>
  )
}

export default Button
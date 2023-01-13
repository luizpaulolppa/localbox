import React from "react";
import { FaDropbox } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'

import * as S from './styles'

type HeaderProp = {
  hiddenUserArea?: boolean
}

const Header = ({ hiddenUserArea = false }: HeaderProp) => {
  return (
    <S.Nav>
      <S.ContainerLogo>
        <FaDropbox size={28} color={'#0061fe'} />
        <S.LogoName>Localbox</S.LogoName>
      </S.ContainerLogo>
      {!hiddenUserArea && (
        <S.ContainerUser>
          <S.Username>Luiz Paulo</S.Username>
          <S.UserCircle>
            <AiOutlineUser />
          </S.UserCircle>
        </S.ContainerUser>
      )}
    </S.Nav>
  )
}

export default Header
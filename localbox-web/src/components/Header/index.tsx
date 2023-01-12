import React from "react";
import { FaDropbox } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'

import * as S from './styles'

const Header = () => {
  return (
    <S.Nav>
      <S.ContainerLogo>
        <FaDropbox size={28} color={'#0061fe'} />
        <S.LogoName>Localbox</S.LogoName>
      </S.ContainerLogo>
      <S.ContainerUser>
        <S.Username>Luiz Paulo</S.Username>
        <S.UserCircle>
          <AiOutlineUser />
        </S.UserCircle>
      </S.ContainerUser>
    </S.Nav>
  )
}

export default Header
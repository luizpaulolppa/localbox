import { FaDropbox } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'

import * as S from './styles'
import { useNavigate } from "react-router-dom";
import { limitCaracteres } from '../../utils';

type HeaderProp = {
  hiddenUserArea?: boolean
}

const Header = ({ hiddenUserArea = false }: HeaderProp) => {
  const navigate = useNavigate()
  const name = localStorage.getItem('@name')

  function handleLogout() {
    localStorage.clear()
    navigate('/')
  }

  return (
    <S.Nav>
      <S.ContainerLogo>
        <FaDropbox size={28} color={'#0061fe'} />
        <S.LogoName>Localbox</S.LogoName>
      </S.ContainerLogo>
      {!hiddenUserArea && (
        <S.ContainerUser>
          <S.ContainerUsername>
            <S.Username>{limitCaracteres(name, 20, true)}</S.Username>
            <S.UserCircle>
              <AiOutlineUser />
            </S.UserCircle>
          </S.ContainerUsername>
          <div className="dropdown-content">
            <ul>
              <li>My Profile</li>
              <li onClick={handleLogout}>Logout</li>
            </ul>
          </div>
        </S.ContainerUser>
      )}
    </S.Nav>
  )
}

export default Header
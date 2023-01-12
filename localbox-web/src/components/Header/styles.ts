import styled from 'styled-components'

export const Nav = styled.nav`
  height: 50px;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid hsla(36,23%,55%,.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
`

export const ContainerLogo = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const LogoName = styled.p`
  font-weight: bold;
  margin-left: 8px;
`

export const UserCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 1px solid hsla(36,23%,55%,.2);
  cursor: pointer;
`

export const ContainerUser = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const Username = styled.p`
  font-weight: 400;
  margin-right: 8px;
`

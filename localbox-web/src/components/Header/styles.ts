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
  position: relative;
  display: inline-block;

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: white;
    z-index: 1;
    border-radius: 6px;
    border: 1px solid hsla(36, 23%, 55%, .2);
    width: 120px;
    right: 2px;

    ul {
      list-style-type: none;
    }
    
    li {
      padding: 8px;
    }

    li:hover {
      padding: 8px;
      background-color: #f7f5f2;
    }
  }

  &:hover .dropdown-content {
    display: block;
  }
`

export const ContainerUsername = styled.div`
  display: flex;
  align-items: center;
`

export const Username = styled.p`
  font-weight: 400;
  margin-right: 8px;
`

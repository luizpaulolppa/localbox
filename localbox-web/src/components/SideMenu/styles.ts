import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 240px;
  background-color: #f7f5f2;
  border-right: 1px solid hsla(36,23%,55%,.2);
`

export const ContainerItem = styled.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-top: 16px;
`

export const Item = styled.p`
  color: rgba(82,74,62,.82);
  font-size: 16px;
  cursor: pointer;

  :hover {
    color: #1e1919;
  }
`

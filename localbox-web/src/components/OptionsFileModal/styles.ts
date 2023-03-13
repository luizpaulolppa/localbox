import styled from 'styled-components'

type ContainerModalProp = {
  hidden?: boolean
}

export const ContainerModal = styled.div<ContainerModalProp>`
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  ${({ hidden }) => hidden && `display: none;`}
`

export const Modal = styled.div`
  background: white;
  width: 100%;
  max-width: 300px;
  margin: 16px;
`

export const ModalBoxActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;

  button {
    width: 100%;
    max-width: 200px;
  }
`

export const Options = styled.ul`
  list-style-type: none;

  .close {
    color: rgb(243, 71, 71);
  }
`

export const Option = styled.li`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    font-weight: 500;
  }
`

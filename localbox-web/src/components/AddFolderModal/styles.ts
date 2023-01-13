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
  max-width: 500px;
`

export const ModalBoxForm = styled.div`
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  padding: 16px;

  label {
    font-weight: 500;
  }

  input {
    height: 36px;
    padding: 8px;
    border: 2px solid black;
  }
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

export const ModalBoxTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid hsla(36,23%,55%,.2);
  padding: 16px;

  svg {
    color: black;
    cursor: pointer;
  }
`

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 16px;
    color: #A1C9F7;
  }
`

export const Title = styled.p`
  font-size: 18px;
`

export const ContainerBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`

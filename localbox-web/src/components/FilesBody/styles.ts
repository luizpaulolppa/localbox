import styled from 'styled-components'

export const ContainerFoles = styled.div`
  overflow-y: auto;
  padding: 16px;
  width: 100%;

  table {
    width: 100%;
    border-spacing: 0;
  }

  td, th {
    padding: 8px;
    border-bottom: 1px solid hsla(36,23%,55%,.2);
  }

  th {
    text-align: start;
  }

  tbody tr:hover {
    cursor: pointer;
    background-color: #f7f5f2;
  }
`

export const Options = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  button + button {
    margin-left: 16px;
  }
`

type ButtonProp = {
  secondary?: boolean
}

export const Button = styled.button<ButtonProp>`
  height: 40px;
  border: 0;
  padding: 8px;
  display: flex;
  align-items: center;
  background-color: #0061fe;
  color: white;
  ${({ secondary }) => !!secondary && `background-color: #f7f5f2;`}
  ${({ secondary }) => !!secondary && `color: #1e1919;`}

  svg {
    margin-right: 8px;
  }
`

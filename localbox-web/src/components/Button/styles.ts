import styled from 'styled-components'

type ButtonProp = {
  secondary?: boolean
}

export const Button = styled.button<ButtonProp>`
  height: 40px;
  border: 0;
  padding: 16px;
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
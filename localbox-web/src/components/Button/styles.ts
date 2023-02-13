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
  font-weight: 500;
  ${({ secondary }) => !!secondary && `background-color: #f7f5f2;`}
  ${({ secondary }) => !!secondary && `color: #1e1919;`}

  svg {
    margin-right: 8px;
  }

  .loading {
    -webkit-animation: rotating 2s linear infinite;
    -moz-animation: rotating 2s linear infinite;
    -ms-animation: rotating 2s linear infinite;
    -o-animation: rotating 2s linear infinite;
    animation: rotating 2s linear infinite;
  }

  @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`
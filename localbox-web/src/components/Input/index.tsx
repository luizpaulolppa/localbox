import * as S from './styles'

type InputProp = {
  name?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  type?: string
  maxLength?: number
  errorMessage?: string
}

const Input = ({ onChange, errorMessage, ...rest }: InputProp) => {
  return (
    <S.Container>
      <S.InputContainer
        {...rest}
        onChange={(e) => onChange && onChange(e.target.value)} />
      {errorMessage && <S.ErrorMessage>message</S.ErrorMessage>}
    </S.Container>
  )
}

export default Input

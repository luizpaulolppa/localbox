import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";

import * as S from './styles'

const Login = () => {
  const navigate = useNavigate()

  function handleNewUser() {
    navigate('/new')
  }

  function handleGoHome(event: any) {
    event.preventDefault()
    localStorage.setItem('@isSignedIn', 'true')
    navigate('/home')
  }

  return (
    <>
      <Header hiddenUserArea />
      <S.Body>
        <S.Form onSubmit={handleGoHome}>
          <S.ContainerTitle>
            <h1>Acessar</h1>
            <S.CreateAccountText onClick={handleNewUser}>ou crie uma conta</S.CreateAccountText>
          </S.ContainerTitle>
          <label htmlFor="">E-mail</label>
          <input type="email" />
          <label htmlFor="">Senha</label>
          <input type="password" />
          <S.ContainerBtn>
            <Button>
              <p>Acessar</p>
            </Button>
          </S.ContainerBtn>
        </S.Form>
      </S.Body>
    </>
  )
}

export default Login
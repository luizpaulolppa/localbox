import React from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";

import * as S from './styles'

const Login = () => {
  return (
    <>
      <Header hiddenUserArea />
      <S.Body>
        <S.Form>
          <S.ContainerTitle>
            <h1>Acessar</h1>
            <S.CreateAccountText>ou crie uma conta</S.CreateAccountText>
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
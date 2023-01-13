import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";

import * as S from './styles'

const CreateNewUser = () => {
  const navigate = useNavigate()

  function handleGoBack() {
    navigate('/')
  }

  return (
    <>
      <Header hiddenUserArea />
      <S.Body>
        <S.Form>
          <S.ContainerTitle>
            <h1>Novo usuário</h1>
          </S.ContainerTitle>
          <label htmlFor="">Nome</label>
          <input type="email" />
          <label htmlFor="">E-mail</label>
          <input type="email" />
          <label htmlFor="">Senha</label>
          <input type="password" />
          <S.ContainerBtn>
            <p onClick={handleGoBack}>voltar</p>
            <Button>
              <p>Criar</p>
            </Button>
          </S.ContainerBtn>
        </S.Form>
      </S.Body>
    </>
  )
}

export default CreateNewUser
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { useToast } from "../../hooks/Toast";
import { createUser } from "../../service/api";
import { CreateUser } from "../../dtos/CreateUser";

import * as S from './styles'

const NewUser = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleGoBack() {
    navigate('/')
  }

  function handleValidateFields(): boolean {
    let isValid = true

    const nameCleaned = name.trim()
    if (!nameCleaned) {
      isValid = false
      toast.showError('Name is required!')
    }

    const emailCleaned = email.trim()
    if (!emailCleaned) {
      isValid = false
      toast.showError('Email is required!')
    }

    if (!password) {
      isValid = false
      toast.showError('Password is required!')
    }

    return isValid
  }

  async function handleNewUser(e: React.SyntheticEvent) {
    try {
      e?.preventDefault()
      if (!handleValidateFields()) return
      const nameCleaned = name.trim()
      const emailCleaned = email.trim()
      const data: CreateUser = {
        name: nameCleaned,
        email: emailCleaned,
        password,
      }
      const response = await createUser(data)
      if (response.status === 201) {
        toast.showSuccess('User created!')
        return handleGoBack()
      }
      toast.showError("It's no possible create new user now, try again in a feal minutes.")
    } catch (error) {
      const err = error as any;
      const responseData = err.response.data;
      toast.showError(responseData.message)
    }
  }

  return (
    <>
      <Header hiddenUserArea />
      <S.Body>
        <S.Form onSubmit={handleNewUser}>
          <S.ContainerTitle>
            <h1>Novo usuário</h1>
          </S.ContainerTitle>
          <label htmlFor="name">Nome</label>
          <Input
            name="name"
            type="text"
            onChange={setName}
            value={name}
            maxLength={50}
            errorMessage="" />
          <label htmlFor="email">Email</label>
          <Input
            name="email"
            type="email"
            onChange={setEmail}
            value={email}
            maxLength={50} />
          <label htmlFor="password">Password</label>
          <Input
            name="password"
            type="password"
            onChange={setPassword}
            value={password}
            maxLength={100} />
          <S.ContainerBtn>
            <p onClick={handleGoBack}>voltar</p>
            <Button title="Criar" type="submit" />
          </S.ContainerBtn>
        </S.Form>
      </S.Body>
    </>
  )
}

export default NewUser
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { useToast } from "../../hooks/Toast";
import { auth } from "../../service/api";

import * as S from './styles'

const Login = () => {
  const navigate = useNavigate()
  const { showError } = useToast()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleNewUser() {
    navigate('/new')
  }

  function handleValidation(): boolean {
    let isValid = true

    const emailCleaned = email.trim()
    if (!emailCleaned) {
      isValid = false
      showError('Email is required')
    }

    const passCleaned = password.trim()
    if (!passCleaned) {
      isValid = false
      showError('Password is required')
    }

    return isValid
  }

  async function handleLogin(event: any) {
    event.preventDefault()
    try {
      if (!handleValidation()) return;
      const emailCleaned = email.trim()
      const passCleaned = password.trim()
      const response = await auth(emailCleaned, passCleaned)
      if (response.status !== 200) {
        showError('Email or Password is invalid')
        return
      }
      localStorage.setItem('@isSignedIn', 'true')
      localStorage.setItem('@accessToken', response.data.accessToken)
      localStorage.setItem('@accessType', response.data.accessType)
      localStorage.setItem('@name', response.data.name)
      localStorage.setItem('@email', response.data.email)
      navigate('/home')
    } catch (error) {
      showError('Email or Password is invalid')
    }
  }

  return (
    <>
      <Header hiddenUserArea />
      <S.Body>
        <S.Form onSubmit={handleLogin}>
          <S.ContainerTitle>
            <h1>Acessar</h1>
            <S.CreateAccountText onClick={handleNewUser}>ou crie uma conta</S.CreateAccountText>
          </S.ContainerTitle>
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
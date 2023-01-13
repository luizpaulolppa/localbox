import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  justify-content: center;
`

export const Form = styled.form`
  width: 100%;
  max-width: 370px;

  h1 {
    font-size: 20px;
    font-weight: 400;
  }

  label {
    font-size: 12px;
    color: rgba(82,74,62,.82);
  }

  input {
    margin-bottom: 16px;
    height: 48px;
    width: 100%;
    font-size: 16px;
    padding: 8px;
    border: 1px solid #958c7e;
    border-radius: 0;
    color: rgba(82,74,62,.82);
  }
`

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 16px;
`

export const CreateAccountText = styled.p`
  font-size: 14px;
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
`

export const ContainerBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  p:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

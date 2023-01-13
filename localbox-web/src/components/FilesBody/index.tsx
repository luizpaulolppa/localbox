import React from "react";
import { HiUpload } from "react-icons/hi";
import { GrAdd } from "react-icons/gr";

import * as S from './styles'
import Button from "../Button";
import { AiFillFolder } from "react-icons/ai";

const FilesBody = () => {
  const tests = [1, 2, 3, 4, 4, 5, 6, 7, 1, 1, 1,
    1, 2, 3, 4, 4, 5, 6, 7, 1, 1, 1,
    1, 2, 3, 4, 4, 5, 6, 7, 1, 1, 1]
  return (
    <S.ContainerFoles>
      <S.Options>
        <Button>
          <HiUpload />
          <p>Enviar arquivo</p>
        </Button>
        <Button secondary>
          <GrAdd />
          <p>Criar Pasta</p>
        </Button>
      </S.Options>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Nome</th>
            <th>Proprietário</th>
            <th>Modificado</th>
          </tr>
        </thead>
        <tbody>
          {tests.map((i, index) => (
            <tr key={index}>
              <td></td>
              <td>
                <S.ContainerFileName>
                  <AiFillFolder size={32} />
                  cnh-frente.pdf
                </S.ContainerFileName>
              </td>
              <td>eu</td>
              <td>12/09/1995 12:33</td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.ContainerFoles>
  )
}

export default FilesBody
import React from "react";
import { HiUpload } from "react-icons/hi";
import { GrAdd } from "react-icons/gr";

import * as S from './styles'

const FilesBody = () => {
  const tests = [1, 2, 3, 4, 4, 5, 6, 7, 1, 1, 1,
    1, 2, 3, 4, 4, 5, 6, 7, 1, 1, 1,
    1, 2, 3, 4, 4, 5, 6, 7, 1, 1, 1]
  return (
    <S.ContainerFoles>
      <S.Options>
        <S.Button>
          <HiUpload />
          Enviar arquivo
        </S.Button>
        <S.Button secondary>
          <GrAdd />
          Criar Pasta
        </S.Button>
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
              <td>cnh-frente.pdf</td>
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
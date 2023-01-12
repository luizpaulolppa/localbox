import React from "react";

import * as S from './styles'

const FilesBody = () => {
  return (
    <S.Container>
      <S.ContainerItem>
        <S.Item>Todos os arquivos</S.Item>
      </S.ContainerItem>
      <S.ContainerItem>
        <S.Item>Compartilhado</S.Item>
      </S.ContainerItem>
      <S.ContainerItem>
        <S.Item>Arquivos excluídos</S.Item>
      </S.ContainerItem>
    </S.Container>
  )
}

export default FilesBody
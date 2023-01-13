import React from "react";
import { AiFillFolder } from "react-icons/ai";
import { MdOutlineClose } from 'react-icons/md'
import Button from "../Button";

import * as S from './styles'

const AddFolderModal = () => {
  return (
    <S.ContainerModal
      id="outsideModal"
      hidden={false}
    >
      <S.Modal id="insideModal">
        <S.ModalBoxTitle>
          <S.ContainerTitle>
            <AiFillFolder size={32} />
            <S.Title>Criar pasta</S.Title>
          </S.ContainerTitle>
          <MdOutlineClose size={24} />
        </S.ModalBoxTitle>
        <S.ModalBoxForm>
          <label htmlFor="">Nome</label>
          <input type="text" />
          <S.ContainerBtn>
            <Button>
              <p>Criar</p>
            </Button>
          </S.ContainerBtn>
        </S.ModalBoxForm>
      </S.Modal>
    </S.ContainerModal>
  )
}

export default AddFolderModal

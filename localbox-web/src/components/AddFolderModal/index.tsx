import { useEffect, useState } from "react";
import { AiFillFolder } from "react-icons/ai";
import { MdOutlineClose } from 'react-icons/md'
import { CreateFile } from "../../dtos/CreateFile";
import { useToast } from "../../hooks/Toast";
import { createNewFolder } from "../../service/api";
import Button from "../Button";
import Input from "../Input";

import * as S from './styles'

type Pros = {
  isOpen: boolean
  onClose: (reloadFiles?: boolean) => void
}

const AddFolderModal = ({ isOpen, onClose }: Pros) => {
  const { showError, showSuccess } = useToast()
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setName('')
  }, [isOpen])

  function handleOnClose(reloadFiles?: boolean) {
    onClose && onClose(reloadFiles)
  }

  async function handleNewFolder() {
    try {
      const nameCleaned = name.trim()
      if (!nameCleaned) {
        return showError('Name is required!')
      }

      const data: CreateFile = {
        name: nameCleaned,
        isFolder: true,
        parentId: undefined,
      }
      setLoading(true)
      const response = await createNewFolder(data)
      setLoading(false)
      if (response.status !== 201) {
        return showError("Can't create new folder, try again!")
      }
      showSuccess('Created new folder!')
      handleOnClose(true)
    } catch (error) {
      setLoading(false)
      const response = (error as any).response
      showError(response.data.message)
    }
  }

  return (
    <S.ContainerModal
      id="outsideModal"
      hidden={!isOpen}
    >
      <S.Modal id="insideModal">
        <S.ModalBoxTitle>
          <S.ContainerTitle>
            <AiFillFolder size={32} />
            <S.Title>Criar pasta</S.Title>
          </S.ContainerTitle>
          <MdOutlineClose size={24} onClick={() => handleOnClose()} />
        </S.ModalBoxTitle>
        <S.ModalBoxForm>
          <label htmlFor="">Nome</label>
          <Input maxLength={50} value={name} onChange={setName} />
          <S.ContainerBtn>
            <Button loading={loading} onClick={handleNewFolder}>Criar</Button>
          </S.ContainerBtn>
        </S.ModalBoxForm>
      </S.Modal>
    </S.ContainerModal>
  )
}

export default AddFolderModal

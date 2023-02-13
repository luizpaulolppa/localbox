import React, { useEffect, useState } from "react";
import { HiUpload } from "react-icons/hi";
import { GrAdd } from "react-icons/gr";

import * as S from './styles'
import Button from "../Button";
import { AiFillFolder } from "react-icons/ai";
import AddFolderModal from "../AddFolderModal";
import { CreateFile } from "../../dtos/CreateFile";
import { listFiles } from "../../service/api";

const FilesBody = () => {
  const [openNewFolder, setOpenNewFolder] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [files, setFiles] = useState<CreateFile[]>([])

  useEffect(() => {
    loadingFiles()
  }, [])

  async function loadingFiles() {
    setIsLoading(true)
    const response = await listFiles()
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    setFiles(response.data)
  }

  function handleOnCloseModal(reloadFiles?: boolean) {
    setOpenNewFolder(false)
    if (reloadFiles) {
      setFiles([])
      loadingFiles()
    }
  }
  
  return (
    <>
      <S.ContainerFiles>
        <S.Options>
          <Button>
            <HiUpload />
            Enviar arquivo
          </Button>
          <Button secondary onClick={() => setOpenNewFolder(true)}>
            <GrAdd />
            Criar pasta
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
            {files.map((file, index) => (
              <tr key={index}>
                <td></td>
                <td>
                  <S.ContainerFileName>
                    <AiFillFolder size={32} />
                    {file.name}
                  </S.ContainerFileName>
                </td>
                <td>Me</td>
                <td>? 2023-02-12 03:33pm</td>
              </tr>
            ))}
          </tbody>
        </table>
        {!isLoading && !files.length && <S.EmptyContainer>Esta pasta está vazia, arraste ou solta para fazer o envio.</S.EmptyContainer>}
        {isLoading && <S.EmptyContainer>Loading files...</S.EmptyContainer>}
      </S.ContainerFiles>
      <AddFolderModal
        isOpen={openNewFolder}
        onClose={handleOnCloseModal}
      />
    </>
  )
}

export default FilesBody
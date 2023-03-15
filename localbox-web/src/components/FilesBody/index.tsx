import React, { useEffect, useState } from "react";
import { HiUpload } from "react-icons/hi";
import { GrAdd } from "react-icons/gr";

import * as S from './styles'
import Button from "../Button";
import { AiFillFolder } from "react-icons/ai";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BsFillFileEarmarkFill } from "react-icons/bs";
import AddFolderModal from "../AddFolderModal";
import { CreateFile } from "../../dtos/CreateFile";
import { listFiles } from "../../service/api";
import OptionsFileModal, { OptionFileModalType } from "../OptionsFileModal";

const FilesBody = () => {
  const [openNewFolder, setOpenNewFolder] = useState(false)
  const [openFileOptions, setOpenFileOptions] = useState(false)
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

  function handleCloseFileOptions(option: OptionFileModalType) {
    if (option === 'cancel') {
      setOpenFileOptions(false)
    }
  }
  
  return (
    <>
      <S.ContainerFiles>
        <S.Options>
          <Button>
            <HiUpload />
            Upload file
          </Button>
          <Button secondary onClick={() => setOpenNewFolder(true)}>
            <GrAdd />
            New folder
          </Button>
        </S.Options>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Nome</th>
              <th>Proprietário</th>
              <th>Modificado</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <tr key={index}>
                <td></td>
                <td>
                  <S.ContainerFileName>
                    {file.isFolder && <AiFillFolder size={28} />}
                    {!file.isFolder && <BsFillFileEarmarkFill size={26} />}
                    {file.name}
                  </S.ContainerFileName>
                </td>
                <td>Me</td>
                <td>? 2023-02-12 03:33pm</td>
                <td>
                  <S.BoxDotsHorizontal onClick={() => setOpenFileOptions(true)}>
                    <HiOutlineDotsHorizontal size={22} />
                  </S.BoxDotsHorizontal>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!isLoading && !files.length && <S.EmptyContainer>This folder is empty.</S.EmptyContainer>}
        {isLoading && <S.EmptyContainer>Loading files...</S.EmptyContainer>}
      </S.ContainerFiles>
      <AddFolderModal
        isOpen={openNewFolder}
        onClose={handleOnCloseModal}
      />
      <OptionsFileModal
        isOpen={openFileOptions}
        onClose={handleCloseFileOptions}
      />
    </>
  )
}

export default FilesBody
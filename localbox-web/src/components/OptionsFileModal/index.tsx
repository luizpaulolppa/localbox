import * as S from './styles'

export type OptionFileModalType = 'cancel' | 'delete' | 'rename'

type Pros = {
  isOpen: boolean
  onClose: (option: OptionFileModalType) => void
}

const OptionsFileModal = ({ isOpen, onClose }: Pros) => {
  function handleOnClose(option: OptionFileModalType) {
    onClose && onClose(option)
  }

  return (
    <S.ContainerModal
      id="outsideModal"
      hidden={!isOpen}
    >
      <S.Modal id="insideModal">
        <S.Options>
          <S.Option onClick={() => handleOnClose('rename')}>Rename</S.Option>
          <S.Option onClick={() => handleOnClose('delete')}>Delete</S.Option>
          <S.Option onClick={() => handleOnClose('cancel')} className="close">Cancel</S.Option>
        </S.Options>
      </S.Modal>
    </S.ContainerModal>
  )
}

export default OptionsFileModal

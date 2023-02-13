import styled from 'styled-components'

export const ContainerFiles = styled.div`
  overflow-y: auto;
  padding: 16px;
  width: 100%;

  table {
    width: 100%;
    border-spacing: 0;
  }

  td, th {
    padding: 8px;
    border-bottom: 1px solid hsla(36,23%,55%,.2);
  }

  th {
    text-align: start;
  }

  tbody tr:hover {
    cursor: pointer;
    background-color: #f7f5f2;
  }
`

export const EmptyContainer = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  margin-top: 40px;
  color: rgba(82,74,62,.82);
`

export const ContainerFileName = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
    color: #A1C9F7;
  }
`

export const Options = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  button + button {
    margin-left: 16px;
  }
`

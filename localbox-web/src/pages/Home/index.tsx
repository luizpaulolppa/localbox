import Header from "../../components/Header";
import SideMenu from "../../components/SideMenu";
import FilesBody from "../../components/FilesBody";

import * as S from './styles'

const Home = () => {
  return (
    <>
      <Header />
      <S.Body>
        <SideMenu />
        <FilesBody />
      </S.Body>
    </>
  )
}

export default Home
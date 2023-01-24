import { useEffect } from "react";
import Header from "../../components/Header";
import SideMenu from "../../components/SideMenu";
import FilesBody from "../../components/FilesBody";

import * as S from './styles'

const Home = () => {
  useEffect(() => {
    console.log('home')
  }, [])

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
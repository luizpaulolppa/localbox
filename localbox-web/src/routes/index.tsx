import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedPage from '../components/ProtectedPage/ProtectedPage'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NewUser from '../pages/NewUser'

const RoutesApp: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/new" element={<NewUser />} />
      <Route path="/home" element={
        <ProtectedPage>
          <Home />
        </ProtectedPage>
      } />
    </Routes>
  </BrowserRouter>
)

export default RoutesApp

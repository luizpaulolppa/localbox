import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import CreateNewUser from '../pages/CreateNewUser'

const RoutesApp: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/new" element={<CreateNewUser />} />
    </Routes>
  </BrowserRouter>
)

export default RoutesApp

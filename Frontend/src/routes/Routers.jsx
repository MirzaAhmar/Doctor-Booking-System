import React from 'react'
import Home from '../pages/Home/Home'
import SignUp from '../pages/SignUp/SignUp'
import Login from '../pages/Login/Login'
import Services from '../pages/Services/ServicesPage'
import Contact from '../pages/Contact/Contact'
import Doctors from '../pages/Doctors/Doctors'
import DoctorDetails from '../pages/Doctors/DoctorDetails'
import { Routes, Route } from 'react-router-dom'
import ServicesPage from '../pages/Services/ServicesPage'
import Error404 from '../pages/Error404/Error404'
import MyAccount from '../Dashbaord/user-account/MyAccount'
import Dashbaord from '../Dashbaord/doctor-account/Dashbaord'
import ProtectedRoute from './ProtectedRoute'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='home' element={<Home />} />
      <Route path='/doctors' element={<Doctors />} />
      <Route path='/doctors/:id' element={<DoctorDetails />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<SignUp />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<ServicesPage />} />
      <Route path='*' element={<Error404 />} />
      <Route path='/users/profile/me' element={<ProtectedRoute allowedRoles={['patient']}><MyAccount /></ProtectedRoute>} />
      <Route path='/doctors/profile/me' element={<ProtectedRoute allowedRoles={['doctor']}><Dashbaord /></ProtectedRoute>} />
    </Routes>
  )
}

export default Routers
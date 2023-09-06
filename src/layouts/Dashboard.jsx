import React from 'react'
import Navi from './Navi'
import { Route, Routes } from 'react-router-dom'
import SignUp from '../pages/SignUp'
import LogIn from '../pages/LogIn'

export default function Dashboard() {
  return (
    <div>

      <Navi />

      <Routes>
        
        <Route path="signup" Component={SignUp} />
        <Route path="login" Component={LogIn} />
        
      </Routes>

    </div>
  )
}

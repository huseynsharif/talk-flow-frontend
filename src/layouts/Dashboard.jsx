import React from 'react'
import Navi from './Navi'
import { Route, Routes } from 'react-router-dom'
import SignUp from '../pages/SignUp'
import LogIn from '../pages/LogIn'
import Homepage from '../pages/Homepage'
import Messages from '../pages/Messages'

import NotFoundPage from '../pages/NotFoundPage'
import GetAll from '../pages/GetAll'

export default function Dashboard() {
  return (
    <div>

      <Navi />

      <Routes >
        
        <Route path="signup" Component={SignUp} />
        <Route path="login" Component={LogIn} />
        <Route path="homepage" Component={Homepage} />
        <Route path="message" Component={Messages} />
        <Route path="getall" Component={GetAll} />
        
        <Route path="/" Component={Homepage} />
        <Route path="*" Component={NotFoundPage} />
        
        
      </Routes>

    </div>
  )
}

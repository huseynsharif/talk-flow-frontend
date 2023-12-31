import React from 'react'
import Navi from './Navi'
import { Route, Routes } from 'react-router-dom'
import SignUp from '../pages/SignUp'
import LogIn from '../pages/LogIn'
import Homepage from '../pages/Homepage'

import NotFoundPage from '../pages/NotFoundPage'
import Rooms from '../pages/Rooms'
import ChatRoom from '../pages/ChatRoom'
import VerifyEmailWithLink from '../pages/VerifyEmailWithLink'
import ForgotPassword from '../pages/forgotPassword/ForgotPassword'
import NewPassword from '../pages/forgotPassword/NewPassword'

export default function Dashboard() {
  return (
    <div>

      <Navi />
      <Routes >

        <Route path="signup" Component={SignUp} />
        <Route path="login" Component={LogIn} />
        <Route path="homepage" Component={Homepage} />
        <Route path="rooms" Component={Rooms} />
        <Route path="/" Component={Homepage} />
        <Route path="*" Component={NotFoundPage} />
        <Route path="chatroom" Component={ChatRoom} />
        <Route path='/verificate-user-with-link/:userId/:token' Component={VerifyEmailWithLink} />
        <Route path='/forgot-password' Component={ForgotPassword} />
        <Route path='/new-password/:userId/:token' Component={NewPassword} />

      </Routes>

    </div>
  )
}

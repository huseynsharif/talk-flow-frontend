import React from 'react'

export default function Homepage() {
  const username = localStorage.getItem('username');
  return (
    <div>
      
      {username ? <h1>Welcome, {username}!</h1> : <h1>You are not loged in!</h1>}
    </div>
  )
}

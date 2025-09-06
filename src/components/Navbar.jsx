

import React from 'react'
import { logout } from '../services/firebase'

const Navbar = ({user}) => {
  return (
   <nav>
    <h1>Photo Gallery</h1>
    {user && (
        <div>
            <span>{user.email}</span>
            <button onClick={logout}>
                Logout
            </button>
        </div>
    )}
   </nav>
  )
}


export default Navbar



import { useEffect, useState } from 'react'


import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import { auth } from './services/firebase'

function App() {

  const [user, setUser] = useState(null)

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((u)=>setUser(u))
    return ()=> unsubscribe()
  },[])
  

  return user ? <Home user= {user}/> : <Login/>
}



export default App

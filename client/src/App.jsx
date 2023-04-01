import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LoginButton } from './components/Login/login'
import { LogOutButton } from './components/Login/logOut'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>E-Commerce</h1>
      <LoginButton/>
      <LogOutButton/>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { LoginButton } from './components/Login/login'
import { LogOutButton } from './components/Login/logOut'
import { Profile } from './components/Profile/profile'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const [count, setCount] = useState(0)
  const {isAuthenticated} = useAuth0();

  return (
    <div className="App">
      <h1>Tienda Online</h1>
      {isAuthenticated ?(<>
        <Profile/>
        <LogOutButton/>
      </>):<LoginButton/>}
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { LoginButton } from './components/Login/login'
import { LogOutButton } from './components/Login/logOut'
import Home from './views/Home/Home'
import { Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';

function App() {
const [count, setCount] = useState(0)
const {isAuthenticated} = useAuth0();

  
    return (<>
    <div className="App">
      <LoginButton/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/nav" element={<NavBar />} />
      </Routes>
      {isAuthenticated ?(<>
        <Profile/>
        <LogOutButton/>
      </>):<LoginButton/>}
      </div>
  </>);
}

export default App

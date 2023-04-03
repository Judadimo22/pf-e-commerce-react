import { useState } from 'react'
import './App.css'
import { useAuth0 } from '@auth0/auth0-react'
import { Profile } from './components/Profile/profile'
import { LoginButton } from './components/Login/login'
import { LogOutButton } from './components/Login/logOut'
import Home from './views/Home/Home'
import { Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import { Details } from './components/Detail/Detail'
import ProductAdminPage from './components/FormCreate/FormCreate';

function App() {
const [count, setCount] = useState(0)
const {isAuthenticated} = useAuth0();

  
    return (<>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/nav" element={<NavBar />} />
        <Route exact path="/form" element={<ProductAdminPage />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
      {isAuthenticated ?(<>
        <Profile/>
        <LogOutButton/>
      </>):<LoginButton/>}
      </div>
  </>);
}

export default App

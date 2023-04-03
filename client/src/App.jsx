import { useState } from 'react'
import './App.css'
import Home from './views/Home/Home'
import { Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import LandingPage from './views/LandingPage/landingPage';

function App() {
const [count, setCount] = useState(0)
  
    return (<>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/nav" element={<NavBar />} />
        <Route exact path="/form" element={<ProductAdminPage />} />
      </Routes>

      </div>
  </>);
}

export default App

import { useState } from 'react'
import './App.css'
import Home from './views/Home/Home'
import { Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';

function App() {
const [count, setCount] = useState(0)
  
    return (<>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/nav" element={<NavBar />} />
      </Routes>

      </div>
  </>);
}

export default App

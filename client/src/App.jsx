import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LoginButton } from './components/Login/login'
import { LogOutButton } from './components/Login/logOut'
import './App.css';
import Home from './views/Home/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';

function App() {


  return (<>
    <div className="App">
      <LoginButton/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/nav" element={<NavBar />} />
      </Routes>
      <LoginButton/>
      <LogOutButton/>
    </div>
  </>);
}

export default App

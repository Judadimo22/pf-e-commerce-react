import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Home from './views/Home/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/nav" element={<NavBar />} />
      </Routes>
    </div>
  );
}

export default App

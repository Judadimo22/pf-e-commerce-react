import React from 'react'
import "./Filtrers.css"
import ByCategorie from "./ByCategorie"
import ByType from './ByType'
import ByTrademark from './ByTrademark'

const Filtrers = () => {
  return (
    <div className='Filtrers-container'>
        <div className='filters'>
        <ByCategorie/>
        <ByType/>
        <ByTrademark/>
        <a href="/create"><button>Crear</button></a>
        </div>          
    </div>
  )
}

export default Filtrers
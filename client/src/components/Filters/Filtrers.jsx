import React from 'react'
import "./Filtrers.css"
import ByCategorie from "./ByCategorie"
import ByType from './ByType'

const Filtrers = () => {
  return (
    <div className='Filtrers-container'>
        <div className='filters'>
        <ByCategorie/>
        <ByType/>
        </div>          
    </div>
  )
}

export default Filtrers
import React from 'react'
import "./Filtrers.css"
import ByGenre from "./ByGenre"
import ByType from './ByType'

const Filtrers = () => {
  return (
    <div className='Filtrers-container'>
        <div className='filters'>
        <ByGenre/>
        <ByType/>
        </div>          
    </div>
  )
}

export default Filtrers
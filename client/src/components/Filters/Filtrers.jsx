import React from 'react'
import "./Filtrers.css"
import ByActivities from "./ByActivities"
import ByContinent from './ByContinent'

const Filtrers = () => {
  return (
    <div className='Filtrers-container'>
        <div className='filters'>
        <ByActivities/>
        <ByContinent/>
        </div>          
    </div>
  )
}

export default Filtrers
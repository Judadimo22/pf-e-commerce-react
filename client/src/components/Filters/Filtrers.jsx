import React from 'react'
import "./Filtrers.css"
import ByCategorie from "./ByCategorie"
import ByType from './ByType'
import ByTrademark from './ByTrademark'

const Filtrers = () => {
  return (
    <div className='Filters-container'>
        <div>
          <div>
          </div>
          <div>
            <ByCategorie/>
          </div>
          <hr />
          <div>
            <ByTrademark/>
          </div>
        </div>          
    </div>
  )
}

export default Filtrers
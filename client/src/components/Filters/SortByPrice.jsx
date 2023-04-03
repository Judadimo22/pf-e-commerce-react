import React from 'react'
import "./ByType.css"

const SortByPrice = ({sortType,handleSelectChange}) => {
  return (
    <div style={{display:'flex',justifyContent:"center"}}>
        <select onChange={handleSelectChange} value={sortType} style={{marginTop:"10px"}} className='by-continent'>
        <option value="asc" className="option">Menor precio</option>
        <option value="desc" className="option">Mayor precio</option>
      </select>
    </div>
  )
}

export default SortByPrice
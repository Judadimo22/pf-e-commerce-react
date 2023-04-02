import React from 'react'
import "./ByType.css"
//import {filterByContinent,changeInputByContinent} from "../../../../redux/actions"
import { useDispatch } from 'react-redux'

const ByType = () => {
  const type = ["Pantalon","Camiseta","Chaqueta","Suéter"]
  const dispatch = useDispatch()
  const onChange = (e) => {
    /* dispatch(changeInputByContinent(e.target.value))
    dispatch(filterByContinent(e.target.value)) */
  }

  return (
    <div className='select'>
      <select name="continent" className='by-continent' onChange={onChange}>
        <option className='option' value={null}>By Type</option>
        {type.map((a,index)=> <option value={a}  className="option" key={index}>{a}</option>)}
      </select>
    </div>
  )
}

export default ByType
import React from 'react'
import "./ByType.css"
import {filterByType,ChangefilterInputByType} from "../../redux/actions/index"
import { useDispatch } from 'react-redux'

const ByType = () => {
  const type = ["shirts","pants","hoodies","hats"]
  const dispatch = useDispatch()
  const onChange = (e) => {
    dispatch(ChangefilterInputByType(e.target.value))
    dispatch(filterByType(e.target.value))
  }

  return (
    <div className='select'>
      <select name="continent" className='by-continent' onChange={onChange}>
        <option className='option' value="">By Type</option>
        {type.map((a,index)=> <option value={a}  className="option" key={index}>{a}</option>)}
      </select>
    </div>
  )
}

export default ByType
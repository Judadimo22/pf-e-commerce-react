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
        {type.map((a,index)=> <button onClick={onChange} value={a}  className="option" key={index}>{a}</button>)}
    </div>
  )
}

export default ByType
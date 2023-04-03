import React, { useEffect, useState } from 'react'
import "./ByTrademark.css"
import {filterByTrademark,ChangeFilterInputByTradeMark} from "../../redux/actions/index"
import { useDispatch, useSelector } from 'react-redux'

const ByTrademark = () => {
  const dispatch = useDispatch()
  const trademarks = ["ADIDAS","Nike","Vandalia", "Oldtown Polo", "Topper", "Puma"]
  
  const onChange = (e) => {
    dispatch(ChangeFilterInputByTradeMark(e.target.value))
    dispatch(filterByTrademark(e.target.value))
  }
  return (
    <div className='select'>
      <select name="activity" className='by-activity' onChange={onChange}>
        <option className='option' value="">By Trademark</option>
        {trademarks.map((a,index)=><option value={a} className="option" key={index}>{a}</option>)}
      </select>
    </div>
  )
}

export default ByTrademark
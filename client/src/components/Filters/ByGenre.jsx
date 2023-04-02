import React, { useEffect, useState } from 'react'
import "./ByGenre.css"
//import {getActivities,filterByActivity,changeInputByActivity} from "../../../../redux/actions"
import { useDispatch, useSelector } from 'react-redux'

const ByGenre = () => {
  const dispatch = useDispatch()
  const genres = ["Man","Moman","Child"]
  
  const onChange = (e) => {
    //dispatch(changeInputByActivity(e.target.value))
   // dispatch(filterByActivity(e.target.value))
  }
  return (
    <div className='select'>
      <select name="activity" className='by-activity' onChange={onChange}>
        <option className='option' value="">By Genre</option>
        {genres.map((a,index)=><option value={a} className="option" key={index}>{a}</option>)}
      </select>
    </div>
  )
}

export default ByGenre
import React, { useEffect, useState } from 'react'
import "./ByActivities.css"
//import {getActivities,filterByActivity,changeInputByActivity} from "../../../../redux/actions"
import { useDispatch, useSelector } from 'react-redux'

const ByActivities = () => {
  const activities = useSelector(state=> state.activities)
  const dispatch = useDispatch()
  const post = useSelector(state=>state.post)
  useEffect(()=>{
   // dispatch(getActivities())
  },[post])
  const onChange = (e) => {
    //dispatch(changeInputByActivity(e.target.value))
   // dispatch(filterByActivity(e.target.value))
  }
  return (
    <div className='select'>
      <select name="activity" className='by-activity' onChange={onChange}>
        <option className='option' value={null}>By Activities</option>
        {activities.map(a=><option value={a.name} className="option" key={a.id}>{a.name}</option>)}
      </select>
    </div>
  )
}

export default ByActivities
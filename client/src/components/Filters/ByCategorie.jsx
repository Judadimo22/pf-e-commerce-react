import React, { useEffect, useState } from 'react'
import "./ByCategorie.css"
import {filterByCategorie,ChangefilterInputByCategorie} from "../../redux/actions/index"
import { useDispatch, useSelector } from 'react-redux'

const ByCategorie = () => {
  const dispatch = useDispatch()
  const categories = ["men","women","child"]
  
  const onChange = (e) => {
    dispatch(ChangefilterInputByCategorie(e.target.value))
    dispatch(filterByCategorie(e.target.value))
  }
  return (
    <div className='select'>
      <select name="activity" className='by-activity' onChange={onChange}>
        <option className='option' value="">By Categorie</option>
        {categories.map((a,index)=><option value={a} className="option" key={index}>{a}</option>)}
      </select>
    </div>
  )
}

export default ByCategorie
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
    <div className='categorie'>
      <h1>Category</h1>
      <div>
      <button onClick={onChange} value={'men'} className="option" key={'men'}>men</button>
      </div>
      <div>
      <button onClick={onChange} value={'women'} className="option" key={'women'}>women</button>
      </div>
      <div>
      <button onClick={onChange} value={'child'} className="option" key={'child'}>child</button>
      </div>
      


    </div>
  )
}

export default ByCategorie
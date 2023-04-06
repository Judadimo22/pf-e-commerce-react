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
    <div className='trademark'>
      <div>
        <h1>Trademark</h1>
      </div>
      <div>
      <button onClick={onChange} value={"ADIDAS"} className="option" key={"ADIDAS"}>ADIDAS</button>
      </div>
      <div>
      <button onClick={onChange} value={"Nike"} className="option" key={"Nike"}>Nike</button>
      </div>
      <div>
      <button onClick={onChange} value={"Vandalia"} className="option" key={"Vandalia"}>Vandalia</button>
      </div>
      <div>
      <button onClick={onChange} value={"Oldtown Polo"} className="option" key={"Oldtown Polo"}>Oldtown Polo</button>
      </div>
      <div>
      <button onClick={onChange} value={"Topper"} className="option" key={"Topper"}>Topper</button>
      </div>
      <div>
      <button onClick={onChange} value={"Puma"} className="option" key={"Puma"}>Puma</button>
      </div>


    </div>
  )
}

export default ByTrademark
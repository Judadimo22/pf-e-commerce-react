import React from 'react'
import "./ByContinent.css"
//import {filterByContinent,changeInputByContinent} from "../../../../redux/actions"
import { useDispatch } from 'react-redux'

const ByContinent = () => {
  const continents = [
    {
      id: 1,
      name: "Antarctica"
    },
    {
      id: 2,
      name: "South America"
    },
    {
      id: 3,
      name: "Asia"
    },
    {
      id: 4,
      name: "Africa"
    },
    {
      id: 5,
      name: "Europe"
    },
    {
      id: 6,
      name: "North America"
    },
    {
      id: 7,
      name: "Oceania"
    },
  ]
  const dispatch = useDispatch()
  const onChange = (e) => {
    /* dispatch(changeInputByContinent(e.target.value))
    dispatch(filterByContinent(e.target.value)) */
  }

  return (
    <div className='select'>
      <select name="continent" className='by-continent' onChange={onChange}>
        <option className='option' value={null}>By Continents</option>
        {continents.map(a=> <option value={a.name}  className="option" key={a.id}>{a.name}</option>)}
      </select>
    </div>
  )
}

export default ByContinent
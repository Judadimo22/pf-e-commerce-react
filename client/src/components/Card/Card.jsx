import React from 'react'
import style from './CardProduct.module.css'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'


export const ProductCard = (props) => {
  const dispatch = useDispatch()
  const history = useHistory();

  const goToProductDetails = () => {
    // dispatch(getDog(props.dog.id))
    history.push(`/dogs/${props.dog.id}`)
  }
  
  const productPrice = props.product.price ?  '$' + props.product.price  : ''
  const productTitle = props.product.title ? props.dog.height_max : ''

//   const dogWeightMin = props.dog.weight_min ? props.dog.weight_min + ' kg' : ''
//   const dogWeightMax = props.dog.weight_max ? props.dog.weight_max + ' kg' : ''
//   const dogWeight = dogWeightMin + (dogWeightMin && dogWeightMax && ' - ') + dogWeightMax

  return (
    
    <div className={style.productCardContainer} onClick={() => goToProductDetails()}>
      { props.dog.image && <img className={style.productImage} src={props.dog.image}/>}
      <div style={!props.product.image ? {paddingLeft: 20} : {}}>
      <p className={style.productName}>{productTitle}</p>
      <p className={style.productHeight}>{productPrice}</p>
     
      </div>
    </div>
    
  )
}
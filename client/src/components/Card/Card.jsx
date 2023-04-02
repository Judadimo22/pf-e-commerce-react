import React from 'react'
import style from './CardProduct.module.css'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export const ProductCard = (props) => {
  const dispatch = useDispatch()
  const history = useHistory();

  const goToProductDetails = () => {
    dispatch(getProduct(props.product.id))
    history.push(`/products/${props.product.id}`)
  }
  
  const productPrice = props.product.price ?  '$' + props.product.price  : ''
  const productName = props.product.type


  return (
    
    <div className={style.productCardContainer} onClick={() => goToProductDetails()}>
      { props.product.image && <img className={style.productImage} src={props.product.image}/>}
      <div style={!props.product.image ? {paddingLeft: 20} : {}}>
      <p className={style.productName}>{productName}</p>
      <p className={style.productHeight}>{productPrice}</p>
     
      </div>
    </div>
    
  )
}
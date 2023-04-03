import React from 'react'
import style from './CardProduct.module.css'
// import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export const ProductCard = (props) => {
  const dispatch = useDispatch()
  // const history = useHistory();

  const goToProductDetails = () => {
    dispatch(getClothes(props.product.id))
    history.push(`/cloth/${props.product.id}`)
  }
  
  const productPrice = props.product.price ?  '$' + props.product.price  : ''
  const productType = props.product.type
  const productTrademark = props.product.trademark
  const productImage = props.product.image
  const productName = props.product.name


  return (
    
    <div className={style.containerCard}>    
      {/* { props.dog.image && <img className={style.productImage} src={props.dog.image}/>} */}
      {/* <div style={!props.product.image ? {paddingLeft: 20} : {}}> */}
      <img className={style.productImagen} src={productImage} alt="" />
      <p className={style.productName}><strong>{productName}</strong></p>
      <div className={style.containerPrice}>
      <p className={style.productTrademark}><strong>{productTrademark}</strong></p>
      <p className={style.productPrice}>{productPrice}</p>
      </div>

     
      </div>
    // </div>
    
  )
}





// className={style.productCardContainer} onClick={() => goToProductDetails()}
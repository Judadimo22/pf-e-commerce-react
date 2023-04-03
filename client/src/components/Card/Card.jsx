import React from 'react'
import style from './CardProduct.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getClothById } from '../../redux/actions'

export const ProductCard = (props) => {
  const dispatch = useDispatch()

  const goToProductDetails = () => {
    dispatch(getClothById(props.product._id))
  }
  
  const productPrice = props.product.price ?  '$' + props.product.price  : ''
  const productType = props.product.type
  const productTrademark = props.product.trademark
  const productImage = props.product.image
  const productName = props.product.name


  return (
    <Link onClick={goToProductDetails} style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/details/${props.product._id}`}>
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
    </Link>
    // </div>
    
  )
}





// className={style.productCardContainer} onClick={() => goToProductDetails()}
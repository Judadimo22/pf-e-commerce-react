import React from 'react'
import style from './CardProduct.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getClothById } from '../../redux/actions'
import { TbShoppingCartPlus } from "react-icons/tb";


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
      <div>
      <img className={style.productImagen} src={productImage} alt="" />
      <button className={style.cart}><TbShoppingCartPlus/></button>
      </div>
      <div className={style.containerName}>
      <p className={style.productName}><strong>{productName}</strong></p>
      </div>
      <div>
      <p className={style.productPrice}>{productPrice}</p>
      </div>
      </div>
    </Link>
    // </div>
    
  )
}





// className={style.productCardContainer} onClick={() => goToProductDetails()}
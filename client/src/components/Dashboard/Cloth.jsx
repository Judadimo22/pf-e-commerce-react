import React from 'react'
import style from './Cloth.module.css'
import { useDispatch } from 'react-redux'
import { getClothById } from '../../redux/actions'
import { TbShoppingCartPlus } from "react-icons/tb";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete} from "react-icons/ai";
import { Link } from 'react-router-dom';




export const Cloth = (props) => {
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
    <div className={style.containerCard}>  
      {/* { props.dog.image && <img className={style.productImage} src={props.dog.image}/>} */}
      {/* <div style={!props.product.image ? {paddingLeft: 20} : {}}> */}
      <div>
      <img className={style.productImagen} src={productImage} alt="" />
      <button className={style.cart}><AiFillEdit/></button>
      <button className={style.cart}><AiFillDelete/></button>
      </div>
      <div className={style.containerName}>
      <p className={style.productName}><strong>{productName}</strong></p>
      </div>
      <div className={style.containerPrice}>
      <p className={style.productPrice}>{productPrice}</p>
      </div>
      </div>

    // </div>
    
  )
}
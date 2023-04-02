import React from 'react'
import style from './CardProduct.module.css'
// import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export const ProductCard = (props) => {
  const dispatch = useDispatch()
  // const history = useHistory();

  // const goToProductDetails = () => {
  //   dispatch(getDog(props.dog.id))
  //   // history.push(`/dogs/${props.dog.id}`)
  // }
  
  const productPrice = props.product.price ?  '$' + props.product.price  : ''
  const productName = props.product.type


  return (
    
    <div>    
      {/* { props.dog.image && <img className={style.productImage} src={props.dog.image}/>} */}
      {/* <div style={!props.product.image ? {paddingLeft: 20} : {}}> */}
      <p className={style.productName}>{productName}</p>
      <p className={style.productHeight}>{productPrice}</p>
     
      </div>
    // </div>
    
  )
}





// className={style.productCardContainer} onClick={() => goToProductDetails()}
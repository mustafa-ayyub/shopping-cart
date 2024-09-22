import React from 'react'
const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
  return (
    <div className='product'>
    <img src={productImage}></img>
    <div className='description'>
        <p><b>{productName}</b></p>
        <p><b>${price}</b></p>
    </div>
    </div>
  )
}

export default Product

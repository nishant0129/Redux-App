import React from 'react'
import Phone from '../assets/phone.jpg'

const Product = () => {
  return (
    <div className='card'>
      <img src={Phone} alt="demo"></img>
      <h3>i-phone 14</h3>
      <button type= "button">Add to Cart</button>
    </div>
  )
}

export default Product


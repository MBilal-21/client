import React from 'react'
import { Link } from 'react-router-dom'
const Cart = (props) => {
  return (
    <div className='cart'>
      <h2>{props.item.cart}</h2>
      <img src={props.item.image} alt="" />
      <p>{props.item.text}</p>
    </div>
  )
}

const HomeSection3Cart = (props) =>{
  return(
    <div className='cart cart-2'>
      <Link to={props.item.link} className='link'>
      <img src={props.item.image} alt="Hatha Yoga"/>
      <h2>
       {props.item.title}
      </h2>
    </Link>
    </div>
  )
}

export default Cart
export {HomeSection3Cart};

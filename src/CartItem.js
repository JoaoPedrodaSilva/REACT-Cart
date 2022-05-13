import React from 'react'
import {FaArrowUp, FaArrowDown} from 'react-icons/fa'
import { useGlobalContext } from './context'

const CartItem = ({id, img, title, price, amount}) => {
  const {removeItem, increaseAmount, decreaseAmount, toggleAmount} = useGlobalContext()

  return (
    <article className='cart-item'>
        <img src={img} alt={title} />
        <div className='cart-item-info'>
            <h4 className='info-title'>{title}</h4>
            <h4 className='info-price'>${price}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
        </div>
        <div className='cart-item-controls'>
            <button onClick={() => toggleAmount(id, 'inc')}><FaArrowUp /></button>
            <p>{amount}</p>
            <button onClick={() => toggleAmount(id, 'dec')}><FaArrowDown /></button>
        </div>
    </article>
  )
}

export default CartItem
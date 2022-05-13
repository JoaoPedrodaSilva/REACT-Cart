import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'

const CartContainer = () => {
  const {cart, total, clearCart} = useGlobalContext()

  if(cart.length === 0) {
    return (
      <section className='cart-empty'>
        <header>
          <h2 className='your-bag'>Your  Bag is currently empty</h2> 
        </header>
      </section>
    )
  }

  return (
    <section className='cart'>
      <header>
        <h2 className='your-bag'>Your Bag</h2>
      </header>
      <div>
        {cart.map(item => <CartItem key={item.id} {...item} />)}
      </div>
      <footer>
        <hr />
        <h4 className='total'>Total <span>${total}</span></h4>
        <button
          className='clear-cart'
          onClick={clearCart}
        >CLEAR CART</button>
      </footer>
    </section>
  )
}

export default CartContainer
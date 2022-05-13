import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const {amount} = useGlobalContext()

  return (
    <nav>
      <h3 className='nav-title'>useReducer</h3>
      <div className='nav-counter'>        
        <FaShoppingBag className='bag'/>
        <p className='nav-amount'>{amount}</p>
      </div>
    </nav>
  )
}

export default Navbar
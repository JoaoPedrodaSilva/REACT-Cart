import React from "react"
import {useGlobalContext} from './context'
import Navbar from './Navbar'
import CartContainer from './CartContainer'

function App() {
  const {loading} = useGlobalContext()

  if (loading) {
    return (
      <main className="app">
        <h1>Loading...</h1>
      </main>
    ) 
  }  

  return (
    <main className="app">
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
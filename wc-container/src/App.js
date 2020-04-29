import React, { useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import Navigation from "./components/Navigation"
require("./webComponents/wc-products.js")
require("./webComponents/wc-cart.js")

function App() {
  const [products, setProducts] = useState([])
  const [cartToggle, setCartToggle] = useState(false)

  const handleCartToggle = (cartState) => {
    setCartToggle(cartState)
  }

  return (
    <Router>
      <div className="App">
        <Navigation
          products={products}
          cartToggle={cartToggle}
          onCartToggleChange={handleCartToggle}
        />
        <section className="h-full flex relative pt-24">
          <wc-products></wc-products>
          <wc-cart></wc-cart>
        </section>
      </div>
    </Router>
  )
}

export default App

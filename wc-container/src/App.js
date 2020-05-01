import React, { useState, useEffect } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import Navigation from "./components/Navigation"
import "./webComponents/wc-products.js"
import "./webComponents/wc-cart.js"

function App() {
  const [products, setProducts] = useState([])
  const [cartToggle, setCartToggle] = useState(false)
  useEffect(() => {
    const handleItemRemoved = (e) => {
      const item = e.detail.product
      setProducts((products) => products.filter((p) => p.id !== item.id))
    }
    const handleItemAdded = (e) => {
      setProducts((products) => [...products, e.detail.product])
    }
    window.addEventListener("addToCart", handleItemAdded)
    window.addEventListener("cartItemRemoved", handleItemRemoved)
  }, [])

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
          <wc-products class="productcomponent"></wc-products>
          <div className={cartToggle ? "" : "hidden"}>
            <wc-cart cart-items={JSON.stringify(products)}></wc-cart>
          </div>
        </section>
      </div>
    </Router>
  )
}

export default App

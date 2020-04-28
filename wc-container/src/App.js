import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "./App.css"
import Navigation from "./components/Navigation"
require("./wc-products.js")

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
        </section>
      </div>
    </Router>
  )
}

export default App

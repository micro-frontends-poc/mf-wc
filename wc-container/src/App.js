import React, { useState, useEffect } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import Navigation from "./components/Navigation"
import "./webComponents/wc-products.js"
import "./webComponents/wc-cart.js"

function App() {
  const [products, setProducts] = useState([])
  const [cartToggle, setCartToggle] = useState(false)
  const [colorMode, setColorMode] = useState("light")
  const [username, setUsername] = useState("")

  useEffect(() => {
    const handleItemAdded = (e) => {
      setProducts((products) => [...products, e.detail.product])
    }
    const handleItemRemoved = (e) => {
      let productsCopy = [...products]
      productsCopy.splice(e.detail.index, 1)
      setProducts(productsCopy)
    }
    const handlePaid = (e) => {
      setProducts([])
    }
    const handleModeChanged = (e) => {
      if (e.data.type === "theme") setColorMode(e.data.value)
      else if (e.data.type === "user") setUsername(e.data.value)
    }

    window.addEventListener("message", handleModeChanged)
    window.addEventListener("addToCart", handleItemAdded)
    window.addEventListener("cartItemRemoved", handleItemRemoved)
    window.addEventListener("paid", handlePaid)
    return () => {
      window.removeEventListener("message", handleModeChanged)
      window.removeEventListener("addToCart", handleItemAdded)
      window.removeEventListener("cartItemRemoved", handleItemRemoved)
      window.removeEventListener("paid", handlePaid)
    }
  }, [products])

  const handleCartToggle = (cartState) => {
    setCartToggle(cartState)
  }

  return (
    <Router>
      <div
        className={`App h-full flex flex-col ${
          colorMode === "dark" ? "bg-gray-900" : ""
        }`}
      >
        <Navigation
          user={username}
          products={products}
          cartToggle={cartToggle}
          onCartToggleChange={handleCartToggle}
        />
        <section className="relative flex-grow">
          <wc-products class="w-full" mode={colorMode}></wc-products>

          <wc-cart
            style={{ height: "96%" }}
            class={
              cartToggle ? "absolute top-0 right-0 w-full md:w-1/2" : "hidden"
            }
            cart-items={JSON.stringify(products)}
            mode={JSON.stringify(colorMode)}
          ></wc-cart>
        </section>
      </div>
    </Router>
  )
}

export default App

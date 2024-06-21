import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Animrouts from "./components/Animrouts";
import Header from "./components/Header";
import ScrollTop from "./components/ScrollTop";

const App = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [shippingCost, setShippingCost] = useState(50); // Assuming a fixed shipping cost
  const [vat, setVat] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const total = calculateTotal();
    const calculatedVat = total * 0.2; // Assuming 20% VAT
    const grandTotal = total + shippingCost + calculatedVat;

    setVat(calculatedVat);
    setGrandTotal(grandTotal);

    localStorage.setItem("total", JSON.stringify(total));
    localStorage.setItem("shippingCost", JSON.stringify(shippingCost));
    localStorage.setItem("vat", JSON.stringify(calculatedVat));
    localStorage.setItem("grandTotal", JSON.stringify(grandTotal));
  }, [cart, shippingCost]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prevCart, product];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === productId);
      if (existingProduct && existingProduct.quantity > 1) {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return prevCart.filter((item) => item.id !== productId);
    });
  };

  const getTotalCartQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
    localStorage.removeItem("total");
    localStorage.removeItem("shippingCost");
    localStorage.removeItem("vat");
    localStorage.removeItem("grandTotal");
  };

  return (
    <div className="overflow-y-hidden">
      <Router>
        <ScrollTop />
        <Header
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
          cartQuantity={getTotalCartQuantity()}
        />
        <Animrouts
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          cart={cart}
          total={calculateTotal()}
          shippingCost={shippingCost}
          vat={vat}
          grandTotal={grandTotal}
        />
      </Router>
    </div>
  );
};

export default App;

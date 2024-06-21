import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import Cart from "./components/Cart/Cart";
import ProductDetailsHeadphoneOne from "./components/Pages/Headphones/ProductDetailsHeadphoneOne";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prevItems, item];
    });
  };

  const handleIncrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemove = () => {
    setCartItems([]);
  };

  const toggleCartVisibility = () => {
    setIsCartVisible((prevVisible) => !prevVisible);
  };

  return (
    <div>
      <div className="relative">
        <IoCartOutline
          onClick={toggleCartVisibility}
          className="cursor-pointer"
          size={25}
        />
        <span className="bg-primary p-1 rounded-full w-6 h-6 flex items-center justify-center absolute -right-2 -top-2">
          {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        </span>
        {isCartVisible && (
          <Cart
            cartItems={cartItems}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleRemove={handleRemove}
          />
        )}
      </div>
      <ProductDetailsHeadphoneOne handleAddToCart={handleAddToCart} />
    </div>
  );
};

export default App;

import React from "react";
import { Link } from "react-router-dom";

const Cart = ({
  orderPop,
  handlePopUp,
  cartItems,
  addToCart,
  removeFromCart,
  clearCart,
}) => {
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return; // Prevent checkout if cart is empty

    // Perform checkout actions here, e.g., navigate to checkout page
    // For demonstration, simply log a message
    console.log("Performing checkout...");

    // Close the cart popup
    handlePopUp();
  };

  return (
    <div
      className={`fixed inset-0 z-40 transition-opacity duration-300 ${
        orderPop ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className={`h-full w-full bg-secondary/30 backdrop-blur-[1px] absolute ${
          orderPop ? "block" : "hidden"
        }`}
        onClick={handlePopUp}
      ></div>
      <div
        className={`cart-popup z-50 transition-transform duration-300 ${
          orderPop
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-4"
        }`}
      >
        <div className="relative font-primary text-secondary">
          <div className="flex flex-col gap-6 justify-center px-6 pt-12 pb-6 absolute w-[280px] drop-shadow-md bg-white right-20 top-20 rounded-lg">
            <button
              onClick={handlePopUp}
              className="font-extrabold flex justify-center absolute top-3 right-4 w-6 h-6 bg-primary items-center rounded-full text-white text-sm hover:bg-hoverPrimary"
            >
              X
            </button>
            <div className="flex justify-between">
              <h1 className="font-bold">
                CART{cartItems.length > 0 && <span>({cartItems.length})</span>}
              </h1>
              <button
                onClick={clearCart}
                className="text-secondary/70 underline hover:text-hoverPrimary duration-300"
              >
                Remove
              </button>
            </div>
            {/* Cart item list */}
            <div>
              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center my-3 gap-5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover"
                    />
                    <div>
                      <h1 className="font-bold text-sm">{item.name}</h1>
                      <p className="text-sm">${item.price.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 py-1 px-4 bg-secondary/10 rounded-sm">
                    <button
                      className="hover:text-hoverPrimary duration-300"
                      onClick={() => removeFromCart(item.id)}
                    >
                      -
                    </button>
                    <h1>{item.quantity}</h1>
                    <button
                      className="hover:text-hoverPrimary duration-300"
                      onClick={() => addToCart({ ...item, quantity: 1 })}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <button className="text-secondary/70">TOTAL</button>
              <h1 className="font-bold">
                <span>${calculateTotal().toLocaleString()}</span>
              </h1>
            </div>
            <Link to={cartItems.length > 0 ? "/FormValidation" : "#"}>
              <button
                onClick={handleCheckout}
                className={`text-sm w-full py-3 rounded-sm ${
                  cartItems.length > 0
                    ? "bg-primary text-gray hover:bg-hoverPrimary"
                    : "bg-gray-400 text-gray-700 cursor-not-allowed"
                }`}
                disabled={cartItems.length === 0}
              >
                CHECKOUT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

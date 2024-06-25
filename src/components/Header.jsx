import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import Mobile from "./Mobile";
import Cart from "./Cart/Cart";

const Header = ({
  cart,
  cartQuantity,
  clearCart,
  addToCart,
  removeFromCart,
}) => {
  const [orderPop, setOrderPop] = useState(false);

  const handlePopUp = () => {
    setOrderPop(!orderPop);
  };

  return (
    <>
      <header className="font-primary w-full text-gray fixed top-0 right-0 left-0 bg-black z-40">
        <section className="w-full h-[70px] py-8 container flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Mobile />
            <NavLink
              to="/"
              className="text-xl hidden md:block font-bold"
              aria-label="Home"
            >
              Logo
            </NavLink>
          </div>
          <nav className="hidden lg:flex">
            <ul className="flex gap-10 uppercase font-bold tracking-widest text-sm md:text-base">
              <li>
                <NavLink
                  to="/"
                  smooth="true"
                  duration={800}
                  offset={-50}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary"
                      : " duration-500 hover:text-primary"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Headphones"
                  smooth="true"
                  duration={800}
                  offset={-50}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary"
                      : " duration-500 hover:text-primary"
                  }
                >
                  Headphones
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Speakers"
                  smooth="true"
                  duration={800}
                  offset={-50}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary"
                      : " duration-500 hover:text-primary"
                  }
                >
                  Speakers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Earphones"
                  smooth="true"
                  duration={800}
                  offset={-50}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary"
                      : " duration-500 hover:text-primary"
                  }
                >
                  Earphones
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="relative">
            <button onClick={handlePopUp}>
              <IoCartOutline className="cursor-pointer" size={25} />
              {cartQuantity > 0 && (
                <span className="bg-primary p-1 rounded-full w-6 h-6 flex items-center justify-center absolute -right-2 -top-2">
                  {cartQuantity}
                </span>
              )}
            </button>
            <Cart
              orderPop={orderPop}
              handlePopUp={handlePopUp}
              cartItems={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
            />
          </div>
        </section>
        <div className="container w-full h-[1px] bg-gray/15 z-50" />
      </header>
    </>
  );
};

export default Header;

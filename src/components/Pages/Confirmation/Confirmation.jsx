import React, { useState } from "react";
import { Link } from "react-router-dom";
import confirmationImg from "../../../assets/checkout/icon-order-confirmation.svg";

const Confirmation = ({ cartItems, grandTotal, handleClose }) => {
  const [showAllItems, setShowAllItems] = useState(false);

  const handleToggleItems = () => {
    setShowAllItems((prevState) => !prevState);
  };

  return (
    <div className=" fixed inset-0 z-50 flex items-center justify-center backdrop-blur-[1px] bg-black bg-opacity-50">
      <div className="font-primary bg-white p-6 rounded-md relative">
        <div className="flex flex-col justify-center items-left gap-6">
          <img
            className="w-full max-w-16 lg:max-w-20"
            src={confirmationImg}
            alt="Order Confirmation"
          />
          <h1 className="tracking-wider text-3xl sm:text-4xl md:text-[32px] lg:text-[30px] text-secondary uppercase font-bold">
            THANK YOU <br /> FOR YOUR ORDER
          </h1>
          <p className="text-secondary text-md md:text-lg">
            You will receive an email confirmation shortly.
          </p>
          <div className="rounded-lg grid md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <div className="bg-gray-200 rounded-lg flex justify-between items-center p-4">
                <div className="flex gap-4 items-center">
                  <img
                    src={cartItems[0].image}
                    className="w-12 h-12 object-cover"
                    alt={cartItems[0].name}
                  />
                  <div className="flex flex-col">
                    <h1 className="font-bold">{cartItems[0].name}</h1>
                    <p>${cartItems[0].price.toLocaleString()}</p>
                  </div>
                </div>
                <p>x{cartItems[0].quantity}</p>
              </div>
              {cartItems.length > 1 && (
                <>
                  <button
                    onClick={handleToggleItems}
                    className="bg-gray-200 py-2 px-4 text-secondary font-bold rounded-md"
                  >
                    {showAllItems
                      ? "Show Less"
                      : `and ${cartItems.length - 1} other item(s)`}
                  </button>
                  {showAllItems && (
                    <div className="grid gap-4">
                      {cartItems.slice(1).map((item, index) => (
                        <div
                          key={index}
                          className="bg-gray-200 rounded-lg flex justify-between items-center p-4"
                        >
                          <div className="flex gap-4 items-center">
                            <img
                              src={item.image}
                              className="w-12 h-12 object-cover"
                              alt={item.name}
                            />
                            <div className="flex flex-col">
                              <h1 className="font-bold">{item.name}</h1>
                              <p>${item.price.toLocaleString()}</p>
                            </div>
                          </div>
                          <p>x{item.quantity}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
            <div className="bg-secondary rounded-lg text-gray flex  justify-center flex-col p-4">
              <h1 className="font-normal text-gray/50 lg:text-lg mb-3">
                GRAND TOTAL
              </h1>
              <p className=" text-2xl font-semibold text-white">
                ${grandTotal.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <Link to="/">
          <button
            onClick={handleClose}
            className="bg-primary py-3 px-8 text-gray text-lg hover:bg-hoverPrimary duration-300 mt-4 w-full"
          >
            Go back home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Confirmation;

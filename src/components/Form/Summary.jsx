import React, { useState } from "react";
import Confirmation from "../Pages/Confirmation/Confirmation";

const Summary = ({
  cartItems,
  total,
  shippingCost,
  vat,
  grandTotal,
  handleSubmit,
}) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleContinue = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setShowConfirmation(true);
    handleSubmit(); // Call handleSubmit after setting the state
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <div>
      <div className="bg-white rounded-md w-[350px] p-6">
        <h1 className="tracking-wider text-2xl sm:text-3xl md:text-[22px] lg:text-[20px] text-secondary uppercase font-bold">
          Summary
        </h1>
        {cartItems.map((item, index) => (
          <div key={index} className="flex justify-between my-4">
            <div className="flex gap-4 items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-cover"
              />
              <div className="flex flex-col">
                <h1 className="font-bold">{item.name}</h1>
                <p>${item.price}</p>
              </div>
            </div>
            <p>x{item.quantity}</p>
          </div>
        ))}
        <div className="flex flex-col">
          <div className="flex items-center text-md lg:text-lg justify-between">
            <p className="text-secondary/70">TOTAL</p>
            <p className="font-bold">${total}</p>
          </div>
          <div className="flex items-center my-2 text-md lg:text-lg justify-between">
            <p className="text-secondary/70">SHIPPING</p>
            <p className="font-bold">${shippingCost}</p>
          </div>
          <div className="flex items-center my-2 text-md lg:text-lg justify-between">
            <p className="text-secondary/70">VAT (INCLUDED)</p>
            <p className="font-bold">${vat}</p>
          </div>
          <div className="flex items-center my-6 text-md lg:text-lg justify-between">
            <p className="text-secondary/70">GRAND TOTAL</p>
            <p className="font-bold text-primary">${grandTotal}</p>
          </div>

          <button
            onClick={handleSubmit}
            className="bg-primary py-3 text-gray text-lg hover:bg-hoverPrimary duration-300"
          >
            CONTINUE
          </button>
        </div>
      </div>
      {showConfirmation && (
        <Confirmation
          cartItems={cartItems}
          grandTotal={grandTotal}
          handleClose={handleCloseConfirmation}
        />
      )}
    </div>
  );
};

export default Summary;

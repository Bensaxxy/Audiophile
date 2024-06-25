import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cashDeliveryIcon from "../../assets/checkout/icon-cash-on-delivery.svg";
import Footer from "../Pages/Home/Footer";
import Summary from "./Summary";
import Confirmation from "../Pages/Confirmation/Confirmation";
import Notification from "../Form/Notification"; // Import the notification component

const FormValidation = ({
  cartItems,
  total,
  shippingCost,
  vat,
  grandTotal,
}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    paymentMethod: "e-money",
    eMoneyNumber: "",
    eMoneyPin: "",
  });

  const [errors, setErrors] = useState({});
  const [showSummary, setShowSummary] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showNotification, setShowNotification] = useState(false); // State for notification visibility

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Wrong format";
    }
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.zip) newErrors.zip = "ZIP is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (formData.paymentMethod === "e-money") {
      if (!formData.eMoneyNumber) {
        newErrors.eMoneyNumber = "e-Money Number is required";
        setShowNotification(true);
      }
      if (!formData.eMoneyPin) {
        newErrors.eMoneyPin = "e-Money PIN is required";
        setShowNotification(true);
      }
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data Submitted: ", formData);
      setShowSummary(false);
      setShowConfirmation(true);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleCloseConfirmation = () => {
    setShowSummary(true);
    setShowConfirmation(false);
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  return (
    <>
      <div className="font-primary py-12 bg-gray">
        <div className="my-20 mx-auto container">
          <button
            onClick={() => navigate("/")}
            className="mb-12 text-secondary hover:text-hoverPrimary"
          >
            Go Back
          </button>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className=" col-span-2 bg-white px-6 py-8 rounded-md">
              <h1 className="tracking-wider text-3xl sm:text-4xl md:text-[32px] lg:text-[30px] text-secondary uppercase font-bold">
                CHECKOUT
              </h1>
              <div>
                <form id="checkout-form" onSubmit={handleSubmit}>
                  <p className="text-primary font-bold my-10 text-xl">
                    BILLING DETAILS
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col">
                      <label className="font-bold my-2 text-md md:text-md">
                        Name
                      </label>
                      <input
                        className="hover:border-primary py-2 bg-transparent border-secondary/20 rounded-md border-2"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Alexei Ward"
                      />
                      {errors.name && (
                        <span className="text-red-500 text-sm">
                          {errors.name}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <label className="font-bold my-2 text-md md:text-md">
                        Email Address
                      </label>
                      <input
                        className="hover:border-primary py-2 bg-transparent border-secondary/20 rounded-md border-2"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="alexei@mail.com"
                      />
                      {errors.email && (
                        <span className="text-red-500 text-sm">
                          {errors.email}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <label className="font-bold my-2 text-md md:text-md">
                        Phone Number
                      </label>
                      <input
                        className="hover:border-primary py-2 bg-transparent border-secondary/20 rounded-md border-2"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 202-555-0136"
                      />
                      {errors.phone && (
                        <span className="text-red-500 text-sm">
                          {errors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="uppercase text-primary font-bold my-10 text-xl">
                    SHIPPING INFO
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col md:col-span-2">
                      <label className="font-bold my-2 text-md md:text-md">
                        Address
                      </label>
                      <input
                        className="hover:border-primary py-2 bg-transparent border-secondary/20 rounded-md border-2"
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="1137 Williams Avenue"
                      />
                      {errors.address && (
                        <span className="text-red-500 text-sm">
                          {errors.address}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <label className="font-bold my-2 text-md md:text-md">
                        ZIP Code
                      </label>
                      <input
                        className="hover:border-primary py-2 bg-transparent border-secondary/20 rounded-md border-2"
                        type="text"
                        name="zip"
                        value={formData.zip}
                        onChange={handleInputChange}
                        placeholder="10001"
                      />
                      {errors.zip && (
                        <span className="text-red-500 text-sm">
                          {errors.zip}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <label className="font-bold my-2 text-md md:text-md">
                        City
                      </label>
                      <input
                        className="hover:border-primary py-2 bg-transparent border-secondary/20 rounded-md border-2"
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="New York"
                      />
                      {errors.city && (
                        <span className="text-red-500 text-sm">
                          {errors.city}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <label className="font-bold my-2 text-md md:text-md">
                        Country
                      </label>
                      <input
                        className="hover:border-primary py-2 bg-transparent border-secondary/20 rounded-md border-2"
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        placeholder="United States"
                      />
                      {errors.country && (
                        <span className="text-red-500 text-sm">
                          {errors.country}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-primary font-bold my-10 text-xl">
                    PAYMENT DETAILS
                  </p>
                  <div className="flex flex-col md:flex-row md:justify-between">
                    <p className="font-bold text-lg">Payment Method</p>
                    <div className="flex flex-col gap-4 mt-4">
                      <div className="flex items-center gap-2 border-2 py-3 border-secondary/10 hover:border-primary rounded-lg pr-28 duration-300">
                        <input
                          className="w-20 h-5 accent-primary"
                          type="radio"
                          name="paymentMethod"
                          value="e-money"
                          checked={formData.paymentMethod === "e-money"}
                          onChange={handleInputChange}
                        />
                        <label>e-Money</label>
                      </div>
                      <div className="flex items-center gap-2 border-2 py-3 border-secondary/10 hover:border-primary rounded-lg  pr-28 duration-300">
                        <input
                          className="w-20 h-5 accent-primary"
                          type="radio"
                          name="paymentMethod"
                          value="cash-on-delivery"
                          checked={
                            formData.paymentMethod === "cash-on-delivery"
                          }
                          onChange={handleInputChange}
                        />
                        <label>Cash on Delivery</label>
                      </div>
                    </div>
                  </div>

                  {formData.paymentMethod === "e-money" && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                      <div className="flex flex-col">
                        <label className="font-bold my-2 text-md md:text-md">
                          e-Money Number
                        </label>
                        <input
                          className="hover:border-primary py-2 bg-transparent border-secondary/20 rounded-md border-2"
                          type="text"
                          name="eMoneyNumber"
                          value={formData.eMoneyNumber}
                          onChange={handleInputChange}
                          placeholder="238521993"
                        />
                        {errors.eMoneyNumber && (
                          <span className="text-red-500 text-sm">
                            {errors.eMoneyNumber}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <label className="font-bold my-2 text-md md:text-md">
                          e-Money PIN
                        </label>
                        <input
                          className="hover:border-primary py-2 bg-transparent border-secondary/20 rounded-md border-2"
                          type="text"
                          name="eMoneyPin"
                          value={formData.eMoneyPin}
                          onChange={handleInputChange}
                          placeholder="6891"
                        />
                        {errors.eMoneyPin && (
                          <span className="text-red-500 text-sm">
                            {errors.eMoneyPin}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {formData.paymentMethod === "cash-on-delivery" && (
                    <div className="flex gap-8 my-8">
                      <img src={cashDeliveryIcon} alt="Cash on Delivery Icon" />
                      <p className="text-secondary text-sm md:text-md lg:text-lg">
                        The ‘Cash on Delivery’ option enables you to pay in cash
                        when our delivery courier arrives at your residence.
                        Just make sure your address is correct so that your
                        order will not be cancelled.
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
            {showSummary && (
              <Summary
                cartItems={cartItems}
                total={total}
                shippingCost={shippingCost}
                vat={vat}
                grandTotal={grandTotal}
                handleSubmit={handleSubmit}
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
      {showConfirmation && (
        <Confirmation
          cartItems={cartItems}
          grandTotal={grandTotal}
          handleClose={handleCloseConfirmation}
        />
      )}
      {showNotification && (
        <Notification
          message="SOMETHING IS WRONG"
          onClose={handleCloseNotification}
          duration={2000} // Auto-dismiss after 3 seconds
        />
      )}
    </>
  );
};

export default FormValidation;

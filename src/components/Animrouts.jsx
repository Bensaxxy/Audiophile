import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./Pages/Home/Home";
import Headphones from "./Pages/Headphones/Headphones";
import Speakers from "./Pages/Speakers/Speakers";
import Earphones from "./Pages/Earphones/Earphones";
import ProductDetailsHeadphoneOne from "./Pages/Headphones/ProductDetailsHeadphoneOne";
import ProductDetailsHeadphoneTwo from "./Pages/Headphones/ProductDetailsHeadphoneTwo";
import ProductDetailsHeadphoneThree from "./Pages/Headphones/ProductDetailsHeadphoneThree";
import ProductDetailsSpeakerOne from "./Pages/Speakers/ProductDetailsSpeakerOne";
import ProductDetailsSpeakerTwo from "./Pages/Speakers/ProductDetailsSpeakerTwo";
import ProductDetailsEarphone from "./Pages/Earphones/ProductDetailsEarphone";
import FormValidation from "./Form/FormValidation";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const Animrouts = ({
  addToCart,
  removeFromCart,
  clearCart,
  cart,
  total,
  shippingCost,
  vat,
  grandTotal,
}) => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnterF>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/headphones"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Headphones />
            </motion.div>
          }
        />
        <Route
          path="/speakers"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Speakers />
            </motion.div>
          }
        />
        <Route
          path="/earphones"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Earphones />
            </motion.div>
          }
        />
        <Route
          path="/ProductDetailsHeadphoneOne"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <ProductDetailsHeadphoneOne addToCart={addToCart} />
            </motion.div>
          }
        />
        <Route
          path="/ProductDetailsHeadphoneTwo"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <ProductDetailsHeadphoneTwo addToCart={addToCart} />
            </motion.div>
          }
        />
        <Route
          path="/ProductDetailsHeadphoneThree"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <ProductDetailsHeadphoneThree addToCart={addToCart} />
            </motion.div>
          }
        />
        <Route
          path="/ProductDetailsSpeakerOne"
          element={<ProductDetailsSpeakerOne addToCart={addToCart} />}
        />
        <Route
          path="/ProductDetailsSpeakerTwo"
          element={<ProductDetailsSpeakerTwo addToCart={addToCart} />}
        />
        <Route
          path="/ProductDetailsEarphone"
          element={<ProductDetailsEarphone addToCart={addToCart} />}
        />
        <Route
          path="/FormValidation"
          element={
            <FormValidation
              cartItems={cart}
              total={total}
              shippingCost={shippingCost}
              vat={vat}
              grandTotal={grandTotal}
            />
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default Animrouts;

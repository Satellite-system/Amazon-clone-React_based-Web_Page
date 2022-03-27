import React from "react";
import "./Styles/Checkout.css";
import Subtotal from "./Subtotal.js";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL_HMT/FDFO/Untitled-21.jpg"
          alt=""
        />

        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {/* <BasketItem /> */}
          {/* <BasketItem /> */}
          {/* <BasketItem /> */}
          {/* <BasketItem /> */}
          {/* <BasketItem /> */}
          {/* <BasketItem /> */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

import React, { useState } from "react";
import { useStateValue } from "../Redux/Stateprovider";
import "./Styles/Payment.css";
import Basketitem from "./Basketitem";

const Payment = () => {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="payment">
      <h1>
        Your Orders({basket.length} item{basket.length <= 1 ? "" : "s"}) :{" "}
      </h1>
      <div className="payment__container">
        {/* Payment Section - Delivary Address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivary Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 ding Dong</p>
            <p>Change it</p>
          </div>
        </div>

        {/* Payment Section - Review Items */}
        <div className="payment__section">
           <div className="payment__title">
              <h3> Review Items and Delivery</h3>
           </div>
           <div className="payment__items">
           {basket.map(item=>(
            <Basketitem
            id = {item.id}
            title = {item.title}
            image = {item.image}
            price = {item.price}
            rating = {item.rating}
            />
          ))}
           </div>
        </div>

        {/* Payment Section - Payment Method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe Maze dilayega yaha */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

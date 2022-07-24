import React ,{ useEffect } from 'react';
import { useStateValue } from '../Redux/Stateprovider';
import Basketitem from './Basketitem';
import "./Styles/Checkout.css";
import Subtotal from "./Subtotal.js";


function Checkout() {
  const [{basket}] = useStateValue();

  useEffect(() => {
    document.title = "Fake Shopping Cart"
    window.scrollTo(0,0);
  })
  

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL_HMT/FDFO/Untitled-21.jpg"
          alt="Ad Here............."
        />

        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>

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

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

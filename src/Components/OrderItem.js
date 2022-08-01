import React, { useEffect, useState } from "react";
import Basketitem from "./Basketitem";
import Items from "./Styles/Items/Items";
import "./Styles/Order.css";

const OrderItem = ({ item }) => {
  const [tithi, setTithi] = useState();
  const [milliSec, setMilliSec] = useState(0);
  useEffect(() => {
    console.log("In Order Component");
    const curr = new Date(item.data.date);
    setTithi(curr.toDateString());
     setMilliSec(item.data.date)
    //  console.log(curr.getTime(), new Date(curr.getTime()))
    console.log("Order Items=> ", item);
  });

  return (
    <div style={{ backgroundColor: "#ffffff",margin:'5px' }}>
      <div className="orderItem__topRow">
        <div className="orderItem__title">
          <span> Order Placed </span> <span>{tithi} </span>
        </div>
        <div className="orderItem__title">
          <span> Total </span>
          <span> ₹ {item.data.price}</span>
        </div>
        <div className="orderItem__title">
          <span> Order #{item.id} </span>
        </div>
      </div>

      <Items
        key={item.id}
        id={item.id}
        title={item.data.title}
        image={item.data.image}
        price={item.data.price}
        rating={item.data.rating}
      />
      {/* ))} */}
    </div>
  );
};

export default OrderItem;

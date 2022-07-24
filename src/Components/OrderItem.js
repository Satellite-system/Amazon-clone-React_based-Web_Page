import moment from 'moment';
import React,{useEffect, useState} from 'react'
import Basketitem from './Basketitem'
import ListOrder from './ListOrder';
import Product from './Product';

const OrderItem = ({order}) => {
   const [tithi, setTithi] = useState()
   const [milliSec, setMilliSec] = useState(0)
   useEffect(() => {
     console.log('In Order Component');
     const curr = new Date(order[0].data.date);
     setTithi(curr.toDateString())
     setMilliSec(order[0].data.date)
     console.log(curr.getTime(), new Date(curr.getTime()))
   })
   

  return (
    <div style={{flex:1}}>
      <div className="title">Order</div>
         <p>{tithi}</p>
      {order && order.map(item => (
         <Basketitem
         key = {item.id}
         id = {item.data.id}
         title = {item.data.title}
         image = {item.data.image}
         price = {item.data.price}
         rating = {item.data.rating}
         />  
      ))}
    </div>
  )
}

export default OrderItem;
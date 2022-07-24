import React,{useEffect, useState} from 'react'
import './Styles/Order.css'
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { useStateValue } from '../Redux/Stateprovider';
import { db } from '../firebase';
import Basketitem from './Basketitem';
import OrderItem from './OrderItem';

const Order = () => {
  const [list, setList] = useState([])
  const [updated, setUpdated] = useState(false);
  const [{user}] = useStateValue();
  
  useEffect(async() => {
    if(user){
      console.log('Fetching Orders......');
      const ref = collection(db,'users',user.uid,'orders');
      
      // TODO: get Data in Desc Order of their Creation

      console.log("user: ",user.uid)
      // used Docs to get multiple data
      const orders = await getDocs(ref);
      const tmp = [];
      console.log(orders)
      orders.forEach((doc)=>{
        tmp.push({id:doc.id,data:doc.data()});
      })

      setList(tmp);
    }else{
      setList([]);
    }
  },[user])

  // useEffect(() => {
  //   console.log('Orders: ',list);
  // }, [list])
  
  return (
    <div>
      <h1>Your Orders</h1>
      {list.length>0 && <OrderItem order={list} /> }

    </div>
  )

}

export default Order
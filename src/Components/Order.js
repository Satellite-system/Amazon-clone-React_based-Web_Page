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
      console.log(orders)
      
      var tmpList = []
      orders.forEach((element)=>{
        tmpList.push({id:element.id,data:element.data()})
        // console.log(element.data())
        // setList(list=>[...list,...element.data()])
      })
      setList(tmpList);

      // setList(orders);
    }else{
      setList([]);
    }
  },[user])

  useEffect(() => {
    console.log('Orders: ',list);
    // const tmp = [];
    // list.forEach((element) => {
    //   console.log('data: ',element);
    // });
  }, [list])
  
  return (
    <div className='order'>
      <h1>Your Orders</h1>

      <div >
      {list.length>0 && list.map(item=>(
        <OrderItem key={item.id} item={item} />
        ))
      }
      </div>
      {/* <OrderItem order={list} /> 
       {list.length>0 && list.map(item => (
         <Basketitem
         key = {item.id}
         id = {item.data.id}
         title = {item.data.title}
         image = {item.data.image}
         price = {item.data.price}
         rating = {item.data.rating}
         />  
      ))} */}

    </div>
  )

}

export default Order
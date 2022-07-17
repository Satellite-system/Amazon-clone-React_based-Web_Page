import React, { useState, useEffect} from "react";
import { useStateValue } from "../Redux/Stateprovider";
import "./Styles/Payment.css";
import CurrencyFormat from "react-currency-format";
import Basketitem from "./Basketitem";
import { useNavigate } from "react-router-dom";
import { getBasketTotal } from "../Redux/Reducer";
import { CardElement, useStripe, useElements, Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import { db } from "../firebase";
import { doc, setDoc, addDoc, collection } from "firebase/firestore"; 

const Payment = () => {
  const [{ basket, user },dispatch] = useStateValue();
  const history = useNavigate();

  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [secreat, setSecreat] = useState('true')
  const [paymentIntent, setPaymentIntent] = useState()

  const stripe = useStripe();
  const element = useElements();

  const getClientSecret = async ()=>{
    await axios.post(`http://localhost:5001/clone-f6b6a/us-central1/api/payment/create?total=${getBasketTotal(basket)*100 }`
    ).then(response=>{
      const data = response.data.clientSecret.client_secret
      setSecreat(data);
      setPaymentIntent(response.data.clientSecret)
      console.log(response.data.clientSecret)
    }).catch(err=> console.log((err)));  
  }

  useEffect(() => {
    document.title = "Place Your Order";
    if(user==null){
      history('/');
    }
    if(basket.length>0){    
      getClientSecret();
    }
  },[basket]);

  const handleSubmit = async (event) => {
    // Runs On Order Placed Btn hitted
    event.preventDefault();
    setProcessing(true);

    await stripe.confirmCardPayment(secreat,{
      payment_method: {
        card: element.getElement(CardElement)
      }
    }).then(async result=>{
      // paymentIntent = payment confirmation
      console.log(' >>> ',secreat);
      console.log('<<<<<<< ',result)
      saveToFirebase();
        
      setSucceeded(true);
      setProcessing(false);
      setError(null);

      dispatch({
        type: 'EMPTY_BASKET'
      })

      history('/orders',{replace: true});
      // }
    }).catch(err=> console.log(err));
    
  };

  const saveToFirebase = async ()=>{
    // console.log(basket)
    // console.log(user.uid);
    const date = new Date();
    const currentDate = `${date.getDate()<10?'0'+(date.getDate()):(date.getDate())}/${date.getMonth()+1<10?'0'+(date.getMonth()+1):date.getMonth()+1}/${date.getFullYear()}`;
    const time = date.getTime();
    

    const ref = collection(db,'users',user?.uid,'orders');
    // Add orders in collection "user"
    basket.forEach(async order => {
      order['date'] = currentDate ;
      order['time'] = time;
      await addDoc(ref, order);
    });

  }

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

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
            {basket.map((item) => (
              <Basketitem
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
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
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <button disabled={processing || disabled || succeeded} >
                  <span>
                    {processing ? "Processing...." : "Place Your Order"}
                  </span>{" "}
                </button>
              </div>

              {/* If Error Present Only Then Show This */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

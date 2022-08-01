import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import Order from "./Components/Order";
import { auth } from "./firebase";
import { useEffect, useState } from "react";
import { useStateValue } from "./Redux/Stateprovider";
import Footer from "./Components/Footer";
import Payment from "./Components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useModal } from 'react-hooks-use-modal';

const promise = loadStripe(
  "pk_test_51L2MmISA6prU56u8k31i3AY4QP1I9TwvvliOLBXSgpaGHmJ8mg6T4cl6TJ1Gtcg6RYQKbQ73yagc9Raybxo0FXXO00GHVZC2fT"
);

function App() {
  const [{user}, dispatch] = useStateValue();
  const [Modal, open, close, isOpen] = useModal('root', {
    preventScroll: true,
    closeOnOverlayClick: true
  });

  const SignOut = ()=>{
    auth.signOut();
    close();
  }

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("USer Logged is >>>", authUser);

      if (authUser) {
        // User Exists
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // none User Exists
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
      {/* <button onClick={open}>OPEN</button> */}
      <Modal  >
        <div className="signOutBx">
          <span className="signOutBx__title">Confirm Sign Out</span>
          <p className="signOutBx__content">{user?`${user.email},`:''} you will be signed out of the Cloned Amazon.</p>
          <div className="btnView">
            <button className="btn" onClick={SignOut}>SIGN OUT</button>
            <button className="btn" onClick={close}>CANCEL</button>
          </div>
        </div>
      </Modal>
        

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header open={open}/> <Home />
                <Footer />
              </>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="orders" element={
            <>
            <Header open={open}/>
            <Order />
          </>} />
          <Route
            path="checkout"
            element={
              <>
                <Header open={open}/>
                <Checkout />
                <Footer />
              </>
            }
          />
          <Route
            path="payment"
            element={
              <>
                <Header open={open}/>
                <Elements stripe={promise}>
                <Payment />
                </Elements>
              </>
            }
          />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;

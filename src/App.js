import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import Order from "./Components/Order";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useStateValue } from "./Redux/Stateprovider";
import Footer from "./Components/Footer";
import Payment from "./Components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51L2MmISA6prU56u8k31i3AY4QP1I9TwvvliOLBXSgpaGHmJ8mg6T4cl6TJ1Gtcg6RYQKbQ73yagc9Raybxo0FXXO00GHVZC2fT"
);

function App() {
  const [{}, dispatch] = useStateValue();

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
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header /> <Home />
                <Footer />
              </>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="orders" element={
            <>
            <Header/>
            <Order />
          </>} />
          <Route
            path="checkout"
            element={
              <>
                <Header />
                <Checkout />
                <Footer />
              </>
            }
          />
          <Route
            path="payment"
            element={
              <>
                <Header />
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

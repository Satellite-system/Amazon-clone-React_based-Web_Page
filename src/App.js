import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import Slider from './Components/Slider'
import {auth} from './firebase';
import { useEffect } from 'react';
import { useStateValue } from './Redux/Stateprovider';
import Footer from './Components/Footer';

function App() {
  const [{},dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser =>{
      console.log('USer Logged is >>>', authUser );
      
      if(authUser){ // User Exists
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{ // none User Exists
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }

    })
  },[])
  

  return (
    <BrowserRouter>
    <div className="app">
      
      <Routes>
        <Route path='/' element={<><Header/> <Home /><Footer/></>}/>
        <Route path='login' element={<Login />} />
        <Route path='checkout' element={<><Header/><Checkout/><Footer/></>} />
        <Route path='slider' element={<><Slider/><Footer/></>} />
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;

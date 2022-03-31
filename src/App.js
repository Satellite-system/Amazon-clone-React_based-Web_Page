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

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      
      <Routes>
        <Route path='/' element={<><Header/> <Home /></>}/>
        <Route path='login' element={<Login />} />
        <Route path='checkout' element={<><Header/><Checkout/></>} />
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;

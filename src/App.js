import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Checkout from './Components/Checkout';

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='checkout' element={<Checkout />} />
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;

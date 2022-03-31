import React from 'react'
import './Styles/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import {
   Link
 } from "react-router-dom";
import { useStateValue } from '../Redux/Stateprovider';

function Header() {
   const [{basket},dispatch] = useStateValue();
  return (
    <div className='header'>
       <Link to='/' style={{textDecoration: 'none'}}>
       <img className='header_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
       </Link>
       <div className="header__search">
          {/* DropDown */}
          <input className='header__searchInput' type='text'/>
          <SearchIcon className='header__searchIcon' />
       </div>

       <div className="header__nav">
       <Link to='/login'  style={{textDecoration: 'none',color:'white'}}>
          <div className="header__options">
             <span className="option_lineOne">Hello Guest</span>
             
             <span className="option_lineTwo">Sign In</span>
          </div>
             </Link>
          <div className="header__options">
             <span className="option_lineOne">Returns</span>
             <span className="option_lineTwo">& Orders</span>
          </div>
          <div className="header__options">
             <span className="option_lineOne">Your</span>
             <span className="option_lineTwo">Prime</span>
          </div>
          <Link to='checkout'  style={{textDecoration: 'none'}}>
          <div className="header__optionBasket">
             <ShoppingCartCheckoutIcon fontSize='large' />
             <span className="option_lineTwo header__basketCount">{basket?.length}</span>
          </div>
          </Link>
       </div>
    </div>
  )
}

export default Header
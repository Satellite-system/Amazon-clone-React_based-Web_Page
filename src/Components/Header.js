import React, { useState } from 'react'
import './Styles/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import {
   Link, useNavigate
 } from "react-router-dom";
import { useStateValue } from '../Redux/Stateprovider';
import { auth } from '../firebase';
import Location from './Location';
import LocationOnIcon from '@mui/icons-material/LocationOnOutlined';
import { render } from 'react-dom';

function Header(props) {
   const [{basket,user},dispatch] = useStateValue();
   const navigate = useNavigate();
   const {open} = props;
   const handleAuth = ()=>{
      if(user){
         // alert('Do you Want to Sign Out??');
         console.log('btn Pressedd')
         open();

         // auth.signOut();
      }else{
         navigate('/login');
      }
   }

  return (
    <div className='header'>
       <Link to='/' style={{textDecoration: 'none'}}>
       <img className='header_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon" />
       </Link>
       <div className="header__nav">
          <LocationOnIcon sx={{ color:'white'}} style={{alignItems:'center',margin:"5px 0px" }}/>
          <div className="header__options" style={{marginLeft:"0px"}}>
             <span className="option_lineOne">Deliver to </span>
             
             <span className="option_lineTwo">{user?user.email:'Select your address'}</span>
          </div>
          </div>
       <div className="header__search">
          {/* DropDown */}
          <input className='header__searchInput' type='text'/>
          <SearchIcon className='header__searchIcon' />
       </div>
       <Location/>
       <div className="header__nav">
          <div className="header__options" onClick={handleAuth} >
             <span className="option_lineOne">Hello {user?'':'Guest'}</span>
             
             <span className="option_lineTwo">{user?user.email:'Sign In'}</span>
          </div>
          <div className="header__options" onClick={()=> navigate('/orders')}>
             <span className="option_lineOne">Returns</span>
             <span className="option_lineTwo">& Orders</span>
          </div>
          <div className="header__options">
             <span className="option_lineOne">Your</span>
             <span className="option_lineTwo">Prime</span>
          </div>
          <Link to='/checkout'  style={{textDecoration: 'none'}}>
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
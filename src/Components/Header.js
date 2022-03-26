import React from 'react'
import './Styles/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

function Header() {
  return (
    <div className='header'>
       <img className='header_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
       <div className="header__search">
          {/* DropDown */}
          <input className='header__searchInput' type='text'/>
          <SearchIcon className='header__searchIcon' />
       </div>

       <div className="header__nav">
          <div className="header__options">
             <span className="option_lineOne">Hello Guest</span>
             <span className="option_lineTwo">Sign In</span>
          </div>
          <div className="header__options">
             <span className="option_lineOne">Returns</span>
             <span className="option_lineTwo">& Orders</span>
          </div>
          <div className="header__options">
             <span className="option_lineOne">Your</span>
             <span className="option_lineTwo">Prime</span>
          </div>
          <div className="header__optionBasket">
             <ShoppingCartCheckoutIcon fontSize='large' />
             <span className="option_lineTwo header__basketCount">0</span>
          </div>
       </div>
    </div>
  )
}

export default Header
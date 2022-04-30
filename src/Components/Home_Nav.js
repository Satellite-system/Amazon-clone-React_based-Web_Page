import React from 'react'
import './Styles/Home_nav.css'
import MenuIcon from '@mui/icons-material/Menu';

const Home_Nav = () => {
  return (
  <div className="homeNav">
      <div className="homeNav__options ijkw__option1">
         <MenuIcon fontSize='medium' />
         All
      </div>
      <div className="homeNav__options">Best Sellers</div>
      <div className="homeNav__options">Mobiles</div>
      <div className="homeNav__options">Customer Service</div>
      <div className="homeNav__options">Today's deal</div>
      <div className="homeNav__options">Fashion</div>
      <div className="homeNav__options">Electronics</div>
      <div className="homeNav__options">Home & Kitchen</div>
      <div className="homeNav__options">New Release</div>
      <div className="homeNav__options">Amazon Pay</div>
      <div className="homeNav__options">Computers</div>
      <div className="homeNav__options">Books</div>
      <div className="homeNav__options">Clearance store</div>
    </div>
  )
}

export default Home_Nav
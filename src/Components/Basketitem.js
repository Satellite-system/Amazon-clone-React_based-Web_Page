import React from 'react'
import CurrencyFormat from 'react-currency-format'
import StarIcon from "@mui/icons-material/Star";
import './Styles/Basketem.css'
import { useStateValue } from '../Redux/Stateprovider';

function Basketitem({id, title, image, price, rating}) {
  const [{basket},dispatch] = useStateValue();

  const removeFromBasket = ()=>{
    // IT removes the saved item from the Basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id : id
    })
  }

  return (
    <div className='basketem'>
      <img className='basketem__image' src={image} alt="img" />
       <div className="basketem__info">
            <p className='basketem__title'>{title}</p>

          <strong className='basketem__price'>
            <CurrencyFormat 
            decimalScale={2}
            value={price}
            displayType={'text'}
            thousandSeparator={true}
            prefix = {'₹'}
            /></strong>

          <div className="basketem__rating">
            {Array(rating).fill().map((_,i)=>(
                        <p> <StarIcon sx={{ color: "#F49620" }} /> </p>
            ))}
          </div>
          <button onClick={removeFromBasket}>Remove from Basket</button>

       </div>

    </div>
  )
}

export default Basketitem
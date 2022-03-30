import React from 'react'
import './Styles/Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../Redux/Stateprovider';
import { getBasketTotal } from '../Redux/Reducer';

function Subtotal() {
  const [{basket}] = useStateValue();
  
  return (
    <div className='subtotal'>
      <CurrencyFormat 
      renderText={(value)=>(
        <>
        <p>
          Subtotal({basket.length} items):
          <strong className='subtotal__val'>{value}</strong>
        </p>
        <small className="Subtotal__gift">
          <input type="checkbox"/>This Order contains a gift
        </small>
        </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={'text'}
      thousandSeparator={true}
      prefix = {'₹'}
      />

      <button>Proceed to Buy</button>
    </div>
  )
}

export default Subtotal
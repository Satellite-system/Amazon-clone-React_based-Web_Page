import React from 'react'
import './Styles/Subtotal.css'
import CurrencyFormat from 'react-currency-format'

function Subtotal() {
  
  return (
    <div className='subtotal'>
      <CurrencyFormat 
      renderText={(value)=>(
        <>
        <p>
          Subtotal(0 items):
          <strong>{value}</strong>
        </p>
        <small className="Subtotal__gift">
          <input type="checkbox"/>This Order contains a gift
        </small>
        </>
      )}
      decimalScale={2}
      value={0}
      displayType={'text'}
      thousandSeparator={true}
      prefix = {'₹'}
      />

      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
import React, { useEffect } from 'react'

function ListOrder({id, title, imag, price, rating }) {
   useEffect(()=>{
      console.log('ListOrder Called')
   })
  return (
    <div>
      <h3>ListOrder Display</h3>

      id: {id}
      title: {title}


    </div>
  )
}

export default ListOrder
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import "./Styles/Product.css";
import { useStateValue } from "../Redux/Stateprovider";

function Product({id, title, imag, price, rating }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = ()=>{
    //Dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: imag,
        price: price,
        rating: rating
      }
    });
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarIcon sx={{ color: "#F49620" }} />
              </p>
            ))}
        </div>
      </div>
      <img src={imag} alt="" />

      <button onClick={addToBasket} >Add to Cart</button>
    </div>
  );
}

export default Product;

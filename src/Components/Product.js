import React from "react";
import StarIcon from "@mui/icons-material/Star";
import "./Styles/Product.css";

function Product({ title, imag, price, rating }) {

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

      <button>Add to Cart</button>
    </div>
  );
}

export default Product;

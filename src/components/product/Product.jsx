import React from "react";
import "../../sass/__product.scss";
const Product = () => {
  return (
    <div className="prodact__wrapper">
      <div className="container">
        <div className="prodact__section">
          <div className="prodact__card">
            <h3>Everyday Fresh & Clean with Our Products</h3>
            <button>Shop Now</button>
          </div>
          <div className="prodact__card">
            <h3>Make your Breakfast Healthy and Easy</h3>
            <button>Shop Now</button>
          </div>
          <div className="prodact__card">
            <h3>The best Organic Products Online</h3>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

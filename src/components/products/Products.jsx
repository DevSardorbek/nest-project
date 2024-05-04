import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "../skeleton/Skeleton";
import star from "../../assets/star.png";
import "./produt.css";
import cardShop from "../../assets/card-shop.png";
import Button from "@mui/material/Button";

const Products = ({ data, loading }) => {
  let products = null;
  if (!loading && data) {
    products = data.map((el) => (
      <div className="card" key={el.id}>
        <span className="new_s">new</span>
        <Link to={`/product/${el.id}`}>
          <img src={el.image} alt={el.title} />
        </Link>
        <h4>{el.category}</h4>
        <h2>{el.title}</h2>
        <p>{el.description}</p>
        <div className="rating">
          <img src={star} alt="" />
          <p>({el.rating.rate})</p>
        </div>
        <h3>
          By <article>Stouffer</article>
        </h3>
        <div className="price">
          <div>
            <h3>${el.price}</h3>
            <del>${el.price + 100}</del>
          </div>
          <button>
            <img src={cardShop} alt="" />
            Add
          </button>
        </div>
      </div>
    ));
  }

  return (
    <>
      {loading ? <Skeleton count={10} /> : null}
      <div className="wrapper">{products}</div>
    </>
  );
};

export default Products;

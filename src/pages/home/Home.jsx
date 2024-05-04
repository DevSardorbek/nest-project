import React, { useState } from "react";
import axios from "../../api";
import Banner from "../../components/banner/Banner";
import Products from "../../components/products/Products";
import { useFetch } from "../../hooks/useFetch";
import Footer from "../../components/footer/Footer";
import Featured from "../../components/featured/Featured";
import Product from "../../components/product/Product";
import Skeleton from "../../components/skeleton/Skeleton";
import Daily from "../../components/daily/Daily";
import Delivery from "../../components/delivery/Delivery";

function Home() {
  const [count, setCount] = useState(1);
  const [categoryName, setCategoryName] = useState("all");

  const { data: categories } = useFetch("/products/categories");
  let url = `/products/${
    categoryName === "all" ? "" : `category/${categoryName}`
  }?limit=${count * 10}`;
  const { data, loading } = useFetch(url, count, categoryName);
  let btns = categories?.data.map((category, index) => (
    <button
      key={index}
      value={category}
      onClick={() => setCategoryName(category)}
      className={categoryName === category ? "active" : ""}
    >
      {category}
    </button>
  ));

  return (
    <div className="home">
      <Banner />
      <Featured />
      <Product />
      <div className="container">
        <div className="card_title">
          <h1>Popular Products</h1>
          <div className="category_btn">
            <button
              value="all"
              onClick={() => setCategoryName("all")}
              className={categoryName === "all" ? "active" : ""}
            >
              All
            </button>
            {btns}
          </div>
        </div>
      </div>
      {loading && <Skeleton count={10} />}

      {!loading && data && <Products data={data?.data} />}
      <div className="btn">
        <button onClick={() => setCount(count + 0.5)}>Learn more</button>
      </div>
      <Daily />
      <Delivery />
      <Footer />
    </div>
  );
}

export default Home;

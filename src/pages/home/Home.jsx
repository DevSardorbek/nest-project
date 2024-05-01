import React, { useState } from "react";
import axios from "../../api";
import Banner from "../../components/banner/Banner";
import Products from "../../components/products/Products";
import { useFetch } from "../../hooks/useFetch";
import Footer from "../../components/footer/Footer";

function Home() {
  const [count, setCount] = useState(1);
  const [categoryName, setCategoryName] = useState("all");

  const { data: categories } = useFetch("/products/categories");
  let url = `/products/${
    categoryName === "all" ? "" : `category/${categoryName}`
  }?limit=${count * 5} `;
  const { data, loading } = useFetch(url, count, categoryName);
  let options = categories?.data.map((e, inx) => (
    <option key={inx} value={e}>
      {e}
    </option>
  ));
  console.log(options);
  return (
    <div className="home">
      <Banner />
      <select
        name=""
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      >
        <option value="all">All</option>
        {options}
      </select>
      <Products loading={loading} data={data?.data?.products} />
      <div className="btn">
        <button onClick={() => setCount(count + 1)}>Learn more</button>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

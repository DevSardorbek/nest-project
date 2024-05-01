import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BiSolidShoppingBag } from "react-icons/bi";
import "./singleRoute.css";
import axios from "../../api";

const SingleRoute = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((res) => console.log(res));
  }, [id]);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="single_route">
      <div className="container">
        <div className="single_card">
          <img
            src={selectedImage || (product?.images && product.images[0])}
            alt=""
          />
          <div className="mini_img">
            {product?.images &&
              product.images.slice(0, 4).map(
                (
                  image,
                  index // 4 ta kichik rasmni ochirish
                ) => (
                  <img
                    key={index}
                    className="img"
                    src={image}
                    alt=""
                    onClick={() => handleImageSelect(image)}
                  />
                )
              )}
          </div>
          <div className="single_card_info">
            <h1>{product?.category}</h1>
            <h2>{product?.title}</h2>
            <p>{product?.description}</p>
            <div className="buy">
              <span>${product?.price}</span>
              <button>
                <BiSolidShoppingBag />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRoute;

import React from "react";
import "../../sass/__delivery.scss";
import delImg1 from "../../assets/deliveryImg.png";
import delImg2 from "../../assets/deliveryImg2.png";
import delImg3 from "../../assets/deliveryImg3.png";
import delImg4 from "../../assets/deliveryImg4.png";
import delImg5 from "../../assets/deliveryImg5.png";

const data = [
  {
    id: 1,
    img: delImg1,
    title: "Best prices & offers",
    desc: "Orders $50 or more",
  },
  {
    id: 2,
    img: delImg2,
    title: "Free delivery",
    desc: "24/7 amazing services",
  },
  {
    id: 3,
    img: delImg3,
    title: "Great daily deal",
    desc: "When you sign up",
  },
  {
    id: 4,
    img: delImg4,
    title: "Wide assortment",
    desc: "Mega Discounts",
  },
  {
    id: 5,
    img: delImg5,
    title: "Easy returns",
    desc: "Within 30 days",
  },
];

const Delivery = () => {
  let card = data?.map((e) => (
    <div key={e.id} className="delivery_card">
      <img src={e.img} alt="" />
      <div>
        <h3>{e.title}</h3>
        <p>{e.desc}</p>
      </div>
    </div>
  ));
  return (
    <div className="delivery_wrapper">
      <div className="container">
        <div className="delivery_cards">{card}</div>
      </div>
    </div>
  );
};

export default Delivery;

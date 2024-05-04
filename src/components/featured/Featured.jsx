import React from "react";
import "../../sass/__featured.scss";
import fImg1 from "../../assets/featuredimg1.png";
import fImg2 from "../../assets/featuredimg2.png";
import fImg3 from "../../assets/featuredimg3.png";
import fImg4 from "../../assets/featuredimg4.png";
import fImg5 from "../../assets/featuredimg5.png";
import fImg6 from "../../assets/featuredimg6.png";
import fImg7 from "../../assets/featuredimg7.png";
import fImg8 from "../../assets/featuredimg8.png";
import fImg9 from "../../assets/featuredimg9.png";
import fImg10 from "../../assets/featuredimg10.png";
const data = [
  {
    id: 1,
    img: fImg1,
    title: "Cake & Milk",
    desc: "26 items",
  },
  {
    id: 2,
    img: fImg2,
    title: "Oganic Kiwi",
    desc: "28 items",
  },
  {
    id: 3,
    img: fImg3,
    title: "Peach",
    desc: "14 items",
  },
  {
    id: 4,
    img: fImg4,
    title: "Red Apple",
    desc: "54 items",
  },
  {
    id: 5,
    img: fImg5,
    title: "Snack",
    desc: "56 items",
  },
  {
    id: 6,
    img: fImg6,
    title: "Vegetables",
    desc: "72 items",
  },
  {
    id: 7,
    img: fImg7,
    title: "Strawberry",
    desc: "36 items",
  },
  {
    id: 8,
    img: fImg8,
    title: "Black plum",
    desc: "123 items",
  },
  {
    id: 9,
    img: fImg9,
    title: "Custard apple",
    desc: "34 items",
  },
  {
    id: 10,
    img: fImg10,
    title: "Coffe & Tea",
    desc: "89 items",
  },
];
const Featured = () => {
  let card = data?.map((e) => (
    <div key={e.id} className="featured_card">
      <img src={e.img} alt={e.title} />
      <h2>{e.title}</h2>
      <p>{e.desc}</p>
    </div>
  ));
  return (
    <div className="featured_wrapper">
      <div className="container">
        <div className="featured_title">
          <h2>Featured Categories</h2>
          <p>Cake & Milk</p>
          <p>Coffes & Teas</p>
          <p>Pet Foods</p>
          <p>Vegetables</p>
        </div>
        <div className="featured_cards">{card}</div>
      </div>
    </div>
  );
};

export default Featured;

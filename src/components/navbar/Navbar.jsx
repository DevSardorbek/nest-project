import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { IoMenu, IoSearch } from "react-icons/io5";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import logo from "../../assets/Header.png";
import { useFetch } from "../../hooks/useFetch";
import compare from "../../assets/compare.png";
import bot from "../../assets/bottom.png";
import botw from "../../assets/bottomW.png";
import vek from "../../assets/vek.png";
import deal from "../../assets/deal.png";
import naav from "../../assets/naav.png";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  let { pathname } = useLocation();
  if (pathname.includes("/register")) {
    return <></>;
  }
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [name, setName] = useState("");
  const location = useLocation();

  useEffect(() => {
    setName("");
  }, [location]);

  let url = `/products/search?q=${name} `;
  const { data, loading } = useFetch(url, name);

  return (
    <header className="navbar__wrapper">
      <div className="container">
        <nav className="navbar_top">
          <div className="navbar_top-left">
            <p>About Us</p>
            <span></span>
            <p>My Account</p>
            <span></span>
            <p>Wishlist</p>
            <span></span>
            <p>Order Tracking</p>
          </div>
          <div className="navbar_top-right">
            <p>
              Need help? Call Us: <span>+ 1800 900</span>
            </p>
            <span className="line"></span>
            <p>
              English
              <img src={bot} alt="" />
            </p>
            <span className="line"></span>
            <p>
              USD
              <img src={bot} alt="" />
            </p>
          </div>
        </nav>
        <nav className="navbar">
          <NavLink to={"/"} className="navbar__logo">
            <img src={logo} alt="" />
          </NavLink>
          <div className="navbar__search">
            <button className="navbar__category-btn">
              <span>All Categories</span>
            </button>
            <input
              type="text"
              placeholder="Search…"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button className="s_btn">
              <IoSearch />
            </button>
          </div>
          <div className="navbar__collection">
            <NavLink to={"/"} className="navbar__item">
              <IoHome />
              <span>Bosh Sahifa</span>
            </NavLink>
            <NavLink className="navbar__item card_n">
              <article>3</article>
              <img src={compare} alt="" />
              <span>Card</span>
            </NavLink>
            <NavLink className="navbar__item">
              <article>6</article>
              <FaRegHeart />
              <span>Sevimlilar</span>
            </NavLink>
            <NavLink to={"/cart"} className="navbar__item">
              <article>2</article>
              <FiShoppingCart />
              <span>Savat</span>
            </NavLink>
            <NavLink to={"/login"} className="navbar__item">
              <FaRegUser />
              <span>Login</span>
            </NavLink>
          </div>
        </nav>
        <nav className="navbar_bottom">
          <button className="burger" onClick={toggleMenu}>
            <GiHamburgerMenu />
          </button>
          <div className={`navbar_bottom-left ${isOpen ? "active" : ""}`}>
            <button>
              <img src={vek} alt="" />
              <p>Browse All Categories</p>
              <img src={botw} alt="" />
            </button>
            <p>
              <img src={deal} alt="" />
              Deal
            </p>
            <p>
              Home
              <img src={bot} alt="" />
            </p>
            <p>About</p>
            <p>
              Shop
              <img src={bot} alt="" />
            </p>
            <p>
              Vendors
              <img src={bot} alt="" />
            </p>
            <p>
              Mega menu
              <img src={bot} alt="" />
            </p>
            <p>
              Blog
              <img src={bot} alt="" />
            </p>
            <p>
              Pages
              <img src={bot} alt="" />
            </p>
            <p>
              Contact
              <img src={bot} alt="" />
            </p>
          </div>
          <div className="navbar_bottom-right">
            <img src={naav} alt="" />
            <div>
              <h1>1900 - 888</h1>
              <p>24/7 Support Center</p>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

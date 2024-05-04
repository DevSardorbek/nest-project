import React, { Component } from "react";
import "./footer.css";
import insta from "../../assets/insta.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import logo from "../../assets/logo.png";
import app from "../../assets/app.png";
import payment from "../../assets/payment.png";
import playmarket from "../../assets/playmarket.png";
import loc from "../../assets/loc.png";
import con from "../../assets/con.png";
import tele from "../../assets/tele.png";
import clock from "../../assets/clock.png";
import tel from "../../assets/tel.png";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer__wrapper">
        <div className="container">
          <div className="footer__section">
            <div className="footer_logo">
              <img src={logo} alt="" />
              <p>Awesome grocery store website template</p>
              <p>
                <img src={loc} alt="" />
                Address: 5171 W Campbell Ave undefined <br /> Kent, Utah 53127
                United States
              </p>
              <p>
                <img src={con} alt="" />
                companyname@gmail.com
              </p>
              <p>
                <img src={tele} alt="" />
                Phone: +7 485-118-03-25
              </p>
              <p>
                <img src={clock} alt="" />
                Phone: +7 485-118-03-25
              </p>
            </div>
            <div className="footer_home">
              <h5>Company</h5>
              <p>About Us</p>
              <p>Delivery Information</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
              <p>Contact Us</p>
              <p>Support Center</p>
              <p>Careers</p>
            </div>
            <div className="footer_menu">
              <h3>Account</h3>
              <p>Sign In</p>
              <p>Documentation</p>
              <p>My Wishlist</p>
              <p>Track My Order</p>
              <p>Help Ticket</p>
              <p>Shipping Details</p>
              <p>Compare products</p>
            </div>
            <div className="footer_menu">
              <h3>Corporate </h3>
              <p>Become a Vendor</p>
              <p>Affiliate Program</p>
              <p>Farm Business</p>
              <p>Farm Careers</p>
              <p>Our Suppliers</p>
              <p>Accessibility</p>
              <p>Promotions</p>
            </div>
            <div className="footer_menu">
              <h3>Popular </h3>
              <p>Milk & Flavoured Milk</p>
              <p>Eggs Substitutes</p>
              <p>Marmalades</p>
              <p>Sour Cream and Dips</p>
              <p>Tea & Kombucha</p>
              <p>Cheese</p>
            </div>
            <div className="footer_company">
              <h3>Install App</h3>
              <p>From App Store or Google Play</p>
              <div className="media">
                <img src={app} alt="" />
                <img src={playmarket} alt="" />
              </div>
              <p>Secured Payment Gateways</p>
              <img src={payment} alt="" />
            </div>
          </div>
          <div className="footer_bottom">
            <div className="fotter_bottom-one">
              <p>
                © 2022, <span>Nest</span> - HTML Ecommerce Template
              </p>
              <p>All rights reserved</p>
            </div>
            <div className="fotter_bottom-two">
              <div className="f_call">
                <img src={tel} alt="" />
                <div>
                  <h1>1900 - 6666</h1>
                  <p>Working 8:00 - 22:00</p>
                </div>
              </div>
              <div className="f_call">
                <img src={tel} alt="" />
                <div>
                  <h1>1900 - 8888</h1>
                  <p>24/7 Support Center</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./footer.css";
import insta from "../../assets/insta.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer__wrapper">
        <div className="container">
          <div className="footer__section">
            <div className="footer_logo">
              <h2>LOGO</h2>
              <p>www.company name.com</p>
              <p>companyname@gmail.com</p>
              <p>Phone: +7 485-118-03-25</p>
            </div>
            <div className="footer_home">
              <h3>Home</h3>
              <p>Landingpage</p>
              <p>Documentation</p>
              <p>Referral Program</p>
              <p>UI & UX Design</p>
              <p>Web Design</p>
            </div>
            <div className="footer_menu">
              <h3>Menu</h3>
              <p>Landingpage</p>
              <p>Documentation</p>
              <p>Referral Program</p>
              <p>UI & UX Design</p>
              <p>Web Design</p>
            </div>
            <div className="footer_company">
              <h3>Company</h3>
              <p>Landingpage</p>
              <p>Documentation</p>
              <p>Referral Program</p>
              <div className="media">
                <img src={insta} alt="" />
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={youtube} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

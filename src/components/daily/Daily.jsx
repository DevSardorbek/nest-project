import React from "react";
import "../../sass/__daily.scss";
import dailyImg from "../../assets/dailyimg.png";

const Daily = () => {
  return (
    <div className="daily_wrapper">
      <div className="container">
        <div className="daily_sectrion">
          <div className="daily_section-left">
            <h1>Stay home & get your daily needs from our shop</h1>
            <p>
              Start You'r Daily Shopping with <span>Nest Mart</span>
            </p>
            <div className="daily_input">
              <input type="email" placeholder="Your emaill address" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="daily_section-right">
            <img src={dailyImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Daily;

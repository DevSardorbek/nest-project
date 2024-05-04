import React from "react";
import "../admin/Admin.css";
import { NavLink } from "react-router-dom";
import adminhome from "../../assets/adminhome.png";
import right from "../../assets/right.png";
import location from "../../assets/location.png";
import contactimg from "../../assets/contactimg.png";
import Daily from "../../components/daily/Daily";
import Footer from "../../components/footer/Footer";

const Admin = () => {
  return (
    <div className="admin_wrapper">
      <div className="container">
        <div className="admin__section">
          <div className="admin_line">
            <NavLink to={"/"}>
              <img src={adminhome} alt="" />
              Home
            </NavLink>
            <img src={right} alt="" />
            <p>Admin</p>
          </div>
          <div className="admin_panel">
            <h3>How can help you ?</h3>
            <div className="admin__panel-wrapper">
              <div className="admin_panel-one">
                <h1>Admin panel</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
              <div className="admin_panel-two">
                <h3>01. Visit Feedback</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <h4>03. Billing Inquiries</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
              <div className="admin_panel-three">
                <h3>02. Employer Services</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <h3>04.General Inquiries</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
          </div>
          <div>
            <iframe
              src="https://yandex.uz/map-widget/v1/?ll=69.345655%2C41.311151&z=12"
              width="100%"
              height="400"
              style={{ border: "none", borderRadius: "15px" }}
            ></iframe>
          </div>
        </div>
        <div className="admin_info">
          <div className="admin_info-one">
            <h3>Office</h3>
            <div>
              <p>205 North Michigan Avenue, Suite 810</p>
              <p>Chicago, 60601, USA</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: contact@Evara.com</p>
            </div>
            <button>
              <img src={location} alt="" />
              View map
            </button>
          </div>
          <div className="admin_info-one">
            <h3>Studio</h3>
            <div>
              <p>205 North Michigan Avenue, Suite 810</p>
              <p>Chicago, 60601, USA</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: contact@Evara.com</p>
            </div>
            <button>
              <img src={location} alt="" />
              View map
            </button>
          </div>
          <div className="admin_info-one">
            <h3>Shop</h3>
            <div>
              <p>205 North Michigan Avenue, Suite 810</p>
              <p>Chicago, 60601, USA</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: contact@Evara.com</p>
            </div>
            <button>
              <img src={location} alt="" />
              View map
            </button>
          </div>
        </div>
        <div className="admin_contact">
          <div className="admin_content-login">
            <h4>Contact form</h4>
            <h1>Drop Us a Line</h1>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
            <form>
              <input type="text" placeholder="First Name" />
              <input type="email" placeholder="Your Email" />
            </form>
            <form>
              <input type="tel" placeholder="Your Phone" />
              <input type="text" placeholder="Subject" />
            </form>
            <textarea cols="30" rows="10"></textarea>
            <button>Send message</button>
          </div>
          <div className="admin_content-img">
            <img src={contactimg} alt="" />
          </div>
        </div>
        <Daily />
        <Footer />
      </div>
    </div>
  );
};

export default Admin;

import React from "react";
import "./Styles/Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="footer_top" onClick={scrollToTop}>
        Back to top
      </div>
      <div className="footer">
        <div className="row">
          <div className="colum">
            <h4>Get to Know Us</h4>
            <h7>About Us</h7>
            <h7>Careers</h7>
            <h7>Press Releases</h7>
            <h7>Gift a Smile</h7>
          </div>
          <div className="colum">
            <h4>Connect with Us</h4>
            <h7>Facebook</h7>
            <h7>Twitter</h7>
            <h7>Instagram</h7>
          </div>
          <div className="colum">
            <h4>Make Money with Us</h4>
            <h7>Sell on Clonned</h7>
            <h7>Amazn Global Selling</h7>
            <h7>Become an Affiliate</h7>
            <h7>Advertise Your Products</h7>
            <h7>Clone Pay on Merchants</h7>
          </div>
          <div className="colum">
            <h4>Let Us Help You</h4>
            <h7>COVID-19 and Amazn</h7>
            <h7>Your Account</h7>
            <h7>Return Center</h7>
            <h7>100% Purchase Protection</h7>
            <h7>Help</h7>
          </div>
        </div>
        <hr className="footer_rule" />
        <div className="footer_lower">
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="logo"
            className="footer_image"
          />
          <select name="country" className="footer_dropdown">
            <option value="English" selected="true">
              English
            </option>
            <option value="English" selected="true">
              हिंदी
            </option>
          </select>
        </div>
        <div className="footer_bottom">
          <div className="items">
            <div className="r1">Conditions of Use & Sale</div>
            <div className="r1">Privacy Notice</div>
            <div className="r1">
              © 2022-2023, Amzon.com, Inc. or its affiliates{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

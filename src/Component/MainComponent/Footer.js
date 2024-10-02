import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    // <div>
      <section className="footer">
        <div className="footer-row">
          {/* Column 1 - Newsletter Address */}
          <div className="footer-col">
            {/* <h4>Newsletter</h4> */}
            <p>
            <i className="fa-solid fa-location" /> Timbar Market, Rajaram,<br />
              Sambhaji Nagar Rd, opposite Fire Station,<br />
              Kolhapur, Maharashtra 416002
            </p>
          </div>
          
          {/* Column 2 - Info Links */}
          <div className="footer-col">
            {/* <h4>Info</h4> */}
            <ul className="links">
              <li><a href="#">Home</a></li>
              <hr className="h" />
              <li><a href="#">About Us</a></li>
              <hr className="h" />
              <li><a href="#">Track Order</a></li>
              <hr className="h" />
              <li><a href="#">Contact Us</a></li>
              <hr className="h" />
            </ul>
          </div>

          {/* Column 3 - Contact Information */}
          <div className="footer-col">
            <ul className="links">
              <li><a href="#">Get in Touch</a></li>
              <hr className="h" />
              <li>+91 000000000</li>
              <hr className="h" />
              <li>
                <a href="#">Follow Us  <i className="fa-brands fa-instagram" />&nbsp;
                  <i className="fa-brands fa-facebook-f" />&nbsp;
                  
                  <i className="fa-brands fa-youtube" /></a>
               
              </li>
              <hr className="h" />
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <section id="copy-right">
          <div className="footer-row">
          <div className="footer-col copy-right-sec">
            </div>
            <div className="footer-col copy-right-sec">
              {/* <i className="fa-solid fa-copyright" />   */}
              T&C | Privacy Policy | Shipping Policy
            </div>
            <div className="footer-col copy-right-sec">
              {/* <i className="fa-solid fa-copyright" />   */}
              Designed By <a href="#">Kricode Softwares</a>
            </div>
          </div>
        </section>
      </section>
    // </div>
  );
};

export default Footer;

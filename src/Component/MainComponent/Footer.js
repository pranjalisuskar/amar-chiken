import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-light py-5">
  <section className="footer">
    <div className="row footer-row justify-content-between">
      {/* Address Column */}
      <div className="col-lg-4 col-md-6 col-sm-12 footer-col mb-4">
        <h5 className="text-uppercase mb-3">Our Location</h5>
        <h6>
          <i className="fa-solid fa-location text-warning" /> Timbar Market, Rajaram,<br />
          Sambhaji Nagar Rd, opposite Fire Station,<br />
          Pune, Maharashtra 411016
        </h6>
      </div>
      {/* Links Column */}
      <div className="col-lg-4 col-md-6 col-sm-12 footer-col mb-4">
        <h5 className="text-uppercase mb-3">Quick Links</h5>
        <ul className="list-unstyled">
          <li><a href="#" className="text-light footer-link">Home</a></li>
          <hr className="footer-hr" style={{color:"black"}}/>
          <li><a href="#" className="text-light footer-link">About Us</a></li>
          <hr className="footer-hr" style={{color:"black"}}/>
          <li><a href="#" className="text-light footer-link">Track Order</a></li>
          <hr className="footer-hr" style={{color:"black"}}/>
          <li><a href="#" className="text-light footer-link">Contact Us</a></li>
          <hr className="footer-hr" style={{color:"black"}}/>
        </ul>
      </div>
      {/* Contact Column */}
      <div className="col-lg-4 col-md-6 col-sm-12 footer-col mb-4">
        <h5 className="text-uppercase mb-3">Contact Us</h5>
        <ul className="list-unstyled">
          <li><a href="#" className="text-light footer-link">Get in Touch</a></li>
          <hr className="footer-hr" style={{color:"black"}}/>
          <li className="mt-2"><i className="fa-solid fa-phone text-warning" /> +91 000000000</li>
          <hr className="footer-hr" style={{color:"black"}}/>
          <li className="mt-3">
            <a href="#" className="text-light footer-link">Follow Us: 
              <i className="fa-brands fa-instagram mx-2 text-warning" />
              <i className="fa-brands fa-facebook-f mx-2 text-warning" />
              <i className="fa-brands fa-youtube mx-2 text-warning" />
            </a>
          </li>
          <hr className="footer-hr" style={{color:"black"}}/>
        </ul>
      </div>
    </div>
    {/* Copyright Section */}
    <section id="copy-right" className="pt-4">
      <div className="row footer-row">
        <div className="col-12 col-md-4 text-center mb-2">
          <a href="#" className="text-light footer-link">T&amp;C</a> | 
          <a href="#" className="text-light footer-link">Privacy Policy</a> | 
          <a href="#" className="text-light footer-link">Shipping Policy</a>
        </div>
        <div className="col-12 col-md-4 text-center mb-2">
          Designed By <a href="#" className="text-warning">Kricode Software</a>
        </div>
      </div>
    </section>
  </section>
</div>


  
  
  );
};

export default Footer;

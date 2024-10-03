import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Header.css';

const Header = () => {
  const [showCityModal, setShowCityModal] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showregisterModal, setShowregisterModal] = useState(false);

  const handleCloseCity = () => setShowCityModal(false);
  const handleShowCity = () => setShowCityModal(true);

  const handleCloseAccount = () => setShowAccountModal(false);
const handleShowAccount = () => setShowAccountModal(true);

const handleCloseLogin = () => setShowLoginModal(false);

// Updated function to close Account modal and open Login modal
const handleShowLogin = () => {
  setShowAccountModal(false);  // Close Account modal
  setShowLoginModal(true);     // Open Login modal
};


const handleCloseregister = () => setShowregisterModal(false);

// Updated function to close Account modal and open Login modal
const handleShowregister = () => {
  setShowAccountModal(false);  // Close Account modal
  setShowregisterModal(true);     // Open Login modal
};






  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            {/* Logo and Name */}
            <a className="navbar-brand d-flex align-items-center" href="#">
              <img
                src="https://t3.ftcdn.net/jpg/06/55/69/72/360_F_655697217_GclwFgFfhS8Tw1V3dRbplhWKouXgQ9SL.jpg"
                alt="Logo"
                className="logo"
                style={{ alignItems: 'center' }}
              />
              <span className="ms-2">Amir Chicken</span>
            </a>

            {/* Search Bar */}
            <div className="mx-auto d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search For The Products You Love..."
                aria-label="Search"
                style={{ width: "400px", borderRadius: "10px", textAlign: "center" }}
              />
            </div>

            {/* Product and My Account Buttons */}
            <div className="d-flex align-items-center">
              {/* City Button */}
              <button className="btn btn-outline-danger me-2" onClick={handleShowCity}>
                <i className="fa-solid fa-city" /> Location
              </button>

              {/* City Modal */}
              <Modal show={showCityModal} onHide={handleCloseCity}>
                <Modal.Header closeButton>
                  <img
                    src=""
                    alt=""
                    className="circular-image"
                    style={{ display: "block", margin: "0 auto", background: "red", marginLeft: "40%" }}
                  />
                  <br />
                </Modal.Header>
                <Modal.Title className="text-center">Web app name</Modal.Title>
                <Modal.Body>
                  <p className="text-center">Choose delivery location</p>
                  <div className="d-flex justify-content-center">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search your city or pincode..."
                      aria-label="Search"
                      style={{ width: "100%", maxWidth: "400px", borderRadius: "10px", textAlign: "center" }}
                    />
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  {/* <Button variant="secondary" onClick={handleCloseCity}>Close</Button> */}
                  <Button variant="primary" onClick={() => alert("Search performed!")}>Search</Button>
                  <br></br>
                  <br></br>
                </Modal.Footer>
              </Modal>

              {/* Products Button */}
              <a href="/product"> <button className="btn btn-outline-danger me-2">
                <i className="fa-solid fa-box" /> Products
              </button></a>

              {/* My Account Button */}
              <button className="btn btn-outline-danger" onClick={handleShowAccount}>
                <i className="fa-solid fa-user" /> My Account
              </button>

              {/* Account Modal */}
              <Modal show={showAccountModal} onHide={handleCloseAccount}>
                <Modal.Header closeButton>
                  <Modal.Title>Log In/Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="d-flex justify-content-center">
                    <button
                      className="form-control"
                      style={{ background: "#db0e0e", color: "white", borderRadius: "10px", width: "100%", maxWidth: "400px" }}
                      onClick={handleShowLogin}
                    >
                      Log in Existing Account
                    </button>
                  </div>
                  <br />
                  <div className="d-flex justify-content-center">
                    <button
                      className="form-control"
                      style={{ background: "#db0e0e", color: "white", borderRadius: "10px", width: "100%", maxWidth: "400px" }} onClick={handleShowregister}
                    >
                      Create New Account
                    </button>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  {/* <Button variant="secondary" onClick={handleCloseAccount}>Close</Button> */}
                </Modal.Footer>
              </Modal>

              {/* Login Modal */}
              <Modal show={showLoginModal} onHide={handleCloseLogin}>
                <Modal.Header closeButton>
                  <Modal.Title>Log in/Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
   <form action="action_page.php" method="post">
  {/* <div className="imgcontainer">
    <img src="img_avatar2.png" alt="Avatar" className="avatar" />
  </div> */}
  <div className="container">
    {/* <label htmlFor="uname"><b>Username</b></label> */}
    <input
                className="form-control me-2"
                type="search"
                placeholder="Phone Number, Email Address"
                aria-label="Search"
                style={{ width: "400px", borderRadius: "10px", textAlign: "center" }}
              />
    {/* <label htmlFor="psw"><b>Password</b></label> */}
    <br/>
    <input
                className="form-control me-2"
                type="search"
                placeholder="Password"
                aria-label="Search"
                style={{ width: "400px", borderRadius: "10px", textAlign: "center" }}
              />
              {/* <br/> */}
    <div className="container" >
    {/* <button type="button" className="cancelbtn">Cancel</button> */}
    <span className="psw">Forgot <a href="#">password?</a></span>
    <br/>
  </div>
  <button
                      className="form-control"
                      style={{ background: "#db0e0e", color: "white", borderRadius: "10px", width: "100%", maxWidth: "400px" }} onClick={handleShowregister}
                    >
                     Login
                    </button>
    <label>
      <input type="checkbox" defaultChecked="checked" name="remember" /> Remember me
    </label>
  </div>
 
</form>

                </Modal.Body>
                <Modal.Footer>
                  {/* <Button variant="secondary" onClick={handleCloseLogin}>Close</Button> */}
                </Modal.Footer>
              </Modal>



               {/* Login Modal */}
               <Modal show={showregisterModal} onHide={handleCloseregister}>
                <Modal.Header closeButton>
                  <Modal.Title>Please Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form action="action_page.php" method="post">
  <div className="container">
    <div className="form-group">
      <input
        className="form-control"
        type="search"
        placeholder="Name"
        style={{ borderRadius: "10px", textAlign: "center" }}
      />
      <br/>
    </div>
    <div className="form-group">
      <input
        className="form-control"
        type="search"
        placeholder="Pin code"
        aria-label="Search"
        style={{ borderRadius: "10px", textAlign: "center" }}
      />
      <br/>
    </div>
    <div className="form-group">
      <input
        className="form-control"
        type="search"
        placeholder="Location"
        aria-label="Search"
        style={{ borderRadius: "10px", textAlign: "center" }}
      />
      <br/>
    </div>
    <div className="form-group">
      <input
        className="form-control"
        type="search"
        placeholder="Gmail"
        aria-label="Search"
        style={{ borderRadius: "10px", textAlign: "center" }}
      />
      <br/>
    </div>
    <div className="form-group">
      <input
        className="form-control"
        type="search"
        placeholder="Phone Number"
        aria-label="Search"
        style={{ borderRadius: "10px", textAlign: "center" }}
      />
      <br/>
    </div>

    <div className="container text-center" style={{ backgroundColor: '#f1f1f1' }}>
      <span className="psw">Forgot <a href="#">Forgot?</a></span>
      <br/>
    </div>

    <button
      className="btn btn-danger form-control"
      style={{ borderRadius: "10px", width: "100%" }}
      onClick={handleShowregister}
    >
      Next
    </button>
    
    <div className="form-check">
      <input type="checkbox" className="form-check-input" name="remember" defaultChecked="checked" />
      <label className="form-check-label">Remember me</label>
    </div>
  </div>
 
</form>

                </Modal.Body>
                <Modal.Footer>
                  {/* <Button variant="secondary" onClick={handleCloseLogin}>Close</Button> */}
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;

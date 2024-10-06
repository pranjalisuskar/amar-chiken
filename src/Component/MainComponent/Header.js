import React, { useState } from "react";
import { Modal, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Authuser from "./Authuser";

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
    setShowAccountModal(false); // Close Account modal
    setShowLoginModal(true); // Open Login modal
  };

  const handleCloseregister = () => setShowregisterModal(false);

  // Updated function to close Account modal and open Login modal
  const handleShowregister = () => {
    setShowAccountModal(false); // Close Account modal
    setShowregisterModal(true); // Open Login modal
  };



  // Register
  const { http, token, setToken } = Authuser();

  const [FromData, setfromdata] = useState({
    user_name: '',
    user_pincode: '',
    location: '',
    user_Email: '',
    user_phoneno: '',
    
  });

  // Handle form data submission
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(FromData);

    try {
      const response = await fetch('http://localhost:5000/userAPI/register', {
        method: 'POST',
        body: JSON.stringify(FromData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();
      if (response.ok) {
        Alert('Registration Successful:', result);
      } else {
        console.error('Registration Error:', result);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  // Handle input changes (no conditional logic here)
  const oninputChange = (e) => {
    setfromdata({ ...FromData, [e.target.name]: e.target.value });
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
                style={{ alignItems: "center" }}
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
                style={{
                  width: "400px",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
              />
            </div>

            {/* Product and My Account Buttons */}
            <div className="d-flex align-items-center">
              {/* City Button */}
              <button
                className="btn btn-outline-danger me-2"
                onClick={handleShowCity}
              >
                <i className="fa-solid fa-city" /> Location
              </button>

              {/* City Modal */}
              <Modal show={showCityModal} onHide={handleCloseCity}>
  <Modal.Header closeButton>
    {/* <div className="text-center w-100"> */}
      {/* <img
        src=""
        alt=""
        className="circular-image"
        style={{
          width: "90px", // Adjust size for mobile screens
          height: "90px",
          background: "#9A292F",
          borderRadius: "50%", // Ensures image stays circular
          objectFit: "cover", // Scales image while keeping aspect ratio
        }}
      /> */}
    {/* </div> */}
  </Modal.Header>

  <Modal.Title className="text-center mt-3">Amir chicken</Modal.Title>

  <Modal.Body>
    <p className="text-center">Choose Your location</p>
    <div className="d-flex justify-content-center">
      <input
        className="form-control"
        type="search"
        placeholder="Search your city or pincode..."
        aria-label="Search"
        style={{
          // width: "100%",
          // maxWidth: "400px",
          // borderRadius: "10px",
          textAlign: "center",
          width: "80%",
          height:"8vh", 
          maxWidth: "400px",
          borderRadius:"20px"
        }}
      />
    </div>
  </Modal.Body>

  <Modal.Footer>
    <div className="d-flex justify-content-center w-100">
      <Button
        style={{ backgroundColor: "#9A292F", width: "80%",height:"8vh", maxWidth: "400px",borderRadius:"20px" }}
        onClick={() => alert("Search performed!")}
      >
        Submit
      </Button>
    </div>
  </Modal.Footer>
</Modal>

              {/* Products Button */}
              <div className="d-flex align-items-center">
                {/* Product Button with Link */}
                <a href="/product" className="text-decoration-none">
                  <button className="btn btn-outline-danger me-2 d-flex align-items-center">
                    <i className="fa-solid fa-box me-1"></i> Products
                  </button>
                </a>

                {/* My Account Button with custom class */}
                <button
                  className="btn btn-outline-danger d-flex align-items-center custom-width"
                  onClick={handleShowAccount}
                >
                  <i className="fa-solid fa-user me-1"></i> My Account
                </button>
              </div>

              {/* Account Modal */}
              <Modal show={showAccountModal} onHide={handleCloseAccount}>
                <Modal.Header closeButton>
                  <Modal.Title>Log In/Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="d-flex justify-content-center">
                    <button
                      className="form-control"
                      style={{
                        background: "#9A292F",
                        color: "white",
                       width: "80%",
                       height:"9vh", 
                       maxWidth: "400px",
                       borderRadius:"20px"
                      }}
                      onClick={handleShowLogin}
                    >
                      Log in Existing Account
                    </button>
                  </div>
                  <br />
                  <div className="d-flex justify-content-center">
                    <button
                      className="form-control"
                      style={{
                        background: "#9A292F",
                        color: "white",
                        width: "80%",
                       height:"9vh", 
                       maxWidth: "400px",
                       borderRadius:"20px"
                      }}
                      onClick={handleShowregister}
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
                <form action="" method="post">
  <div className="container">
    <input
      className="form-control me-2"
      type="search"
      placeholder="Phone Number, Email Address"
      aria-label="Search"
      style={{
        // width: "100%",
        // borderRadius: "10px",
        textAlign: "center",
        // background: "#9A292F",
        color: "white",
        width: "100%",
       height:"9vh", 
       maxWidth: "400px",
       borderRadius:"20px",
       boxShadow:"black",
       padding:"6px"
      }}
    />
    <br />
    <input
        className="form-control me-2"
        type="search"
        placeholder="Password"
        aria-label="Search"
        style={{
          // width: "100%",
          // borderRadius: "10px",
          textAlign: "center",
          color: "white",
          width: "100%",
         height:"9vh", 
         maxWidth: "400px",
         borderRadius:"20px",
         boxShadow:"black",
         padding:"6px"
        }}
    />
    <div className="container mt-2">
      <span className="psw">
        Forgot <a href="#">password?</a>
      </span>
      <br />
      <label>
        <input type="checkbox" defaultChecked="checked" name="remember" />{" "}
        Remember me
      </label>
      <br />
    </div>
    <button
      className="form-control mt-3"
      style={{
        background: "#9A292F",
        color: "white",
        width: "80%",
       height:"9vh", 
       maxWidth: "400px",
       borderRadius:"20px",
       marginLeft:"50px"
      }}
    >
      Login
    </button>
  </div>

  
</form>

                </Modal.Body>
                <Modal.Footer>
                  {/* <Button variant="secondary" onClick={handleCloseLogin}>Close</Button> */}
                </Modal.Footer>
              </Modal>

              {/* Register Modal */}
              <Modal show={showregisterModal} onHide={handleCloseregister}>
                <Modal.Header closeButton>
                  <Modal.Title>Please Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form onSubmit={onSubmit} method="post">
      <div className="container">
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="user_name"
            placeholder="Name"
            onChange={oninputChange}
            // value={FromData.name}
            
          />
          <br />
        </div>

        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="user_pincode"
            placeholder="Pin code"
            onChange={oninputChange}
            
            
          />
          <br />
        </div>

        {/* Additional input fields like gender, mobile_no, etc. go here */}

        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="location"
            placeholder="Location"
            onChange={oninputChange}
           
           
          />
          <br />
        </div>

        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="user_Email"
            placeholder="user_Email"
            onChange={oninputChange}
            
            
          />
          <br />
        </div>

        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="user_phoneno"
            placeholder="Phone_number"
            onChange={oninputChange}
           
           
          />
          <br />
        </div>
        <div className="container mt-2">
      <span className="psw">
        Forgot <a href="#">Forgot?</a>
      </span>
      <br />
      <label>
        <input type="checkbox" defaultChecked="checked" name="remember" />{" "}
        Remember me
      </label>
      <br />
    </div>
        <button
          type="submit"
          className="btn btn-danger form-control"
          style={{
            background: "#9A292F",
            color: "white",
            width: "80%",
            height: "9vh",
            maxWidth: "400px",
            borderRadius: "20px",
            marginLeft: "50px",
          }}
        >
          Register
        </button>
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

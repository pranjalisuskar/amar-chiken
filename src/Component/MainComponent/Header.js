import React, { useState } from "react";
import { Modal, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Authuser from "./Authuser";
import { Navigate } from "react-router";
// import { toast } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";


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

  const [formData, setformData] = useState(
    {
        user_Name: '',
    user_Email: '',
    user_Password: '',
    user_phoneno: '',
    user_pincode: ''
    
    }
);
// const notify = () => toast("Notification message!");
console.log(formData)
const onInputchanges = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });

};

const onSubmit = (e) => {
  e.preventDefault();
  
  fetch('http://localhost:5000/userAPI/register', {
    method: 'POST',
    body: JSON.stringify(formData),  // Convert formData to JSON string
    headers: {
      'Content-Type': 'application/json',  // Specify content type as JSON
      // You can add Authorization headers here if needed
    },
  })
  .then((response) => {
    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();  // Parse the JSON response
  })
  .then((data) => {
    console.log("User registered successfully!", data);
    alert("User has registered successfully!");
  })
  .catch((error) => {
    console.error("Error in registration:", error);  // Log the error for debugging
  });
};




  // const { http, token, setToken } = Authuser();

  const [Login, SetLogin] = useState({user_Email: '',user_password: '' });
  const [btnDiseble, setDisebale] = useState(0);

  const notify = () => toast("Notification message!");


// Then use it
toast('Your notification message');

  const OninputChange = (e) => {
    SetLogin({ ...Login, [e.target.name]: e.target.value });
  }
  const onSubmits=(e) => {
    e.preventDefault();
   
  
      http.post("http://localhost:5000/userAPI/login", Login)
        .then((res) => {
          console.log(res.data.user_data);
          if (res.data.token) {
            setToken(res.data.user_data, res.data.token);
            
            Navigate("/dash");
          } else {
            notify (res.data.message);
            console.log("login",Login);
            
          }
          setDisebale(0);
        })
        .catch((error) => {
          // notify("The provided credentials are invalid");
          setDisebale(0);
        });
  };


  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            {/* Logo and Name */}
            <Link className="navbar-brand d-flex align-items-center" to="#">
              <img
                src="https://t3.ftcdn.net/jpg/06/55/69/72/360_F_655697217_GclwFgFfhS8Tw1V3dRbplhWKouXgQ9SL.jpg"
                alt="Logo"
                className="logo"
                style={{ alignItems: "center" }}
              />
              <span className="ms-2">Amir Chicken</span>
            </Link>

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
            <div>
            <button
                className="btn btn-outline-danger me-2"
                // onClick={handleShowCity}
              >
                <i className="fa-solid fa-card" /> AddCard
              </button>
            </div>&nbsp;
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
                      className="form-control sty"
                     
                      onClick={handleShowLogin}
                    >
                      Log in Existing Account
                    </button>
                  </div>
                  <br />
                  <div className="d-flex justify-content-center">
                    <button
                      className="form-control sty"
                      
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
        <div >
          <div className="container">
          <input
  className="form-control me-2"
  type="text"
  placeholder="Phone Number, Email Address"
// Ensure this is correctly connected to the state
  name="user_Email"
  onChange={(e) => OninputChange(e)}// Updates state as the user types
  
/>

            <br />
            <br/>
            <input
              className="form-control me-2"
              type="password"
              placeholder="Password"
              name="user_password"
              // value={userPassword}
              onChange={(e) => OninputChange(e)}
              // aria-label="Password"
             
          
            />
            <div className="container mt-2">
              <span className="psw">
                Forgot <a href="#">password?</a>
              </span>
              <br />
              <label>
                <input type="checkbox" name="remember" /> Remember me
              </label>
              <br />
            </div>
            <Button
              type="submit"
              className="form-control mt-3 sty"
              onClick={(e) => onSubmits(e)}
            >
              Login
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>

              {/* Register Modal */}
              <Modal show={showregisterModal} onHide={handleCloseregister}>
                <Modal.Header closeButton>
                  <Modal.Title>Please Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div>
      <div className="container">
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="user_name"
            placeholder="Name"
            onChange={(e) => onInputchanges(e)}
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
            onChange={(e) => onInputchanges(e)}
            
            
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
            onChange={(e) => onInputchanges(e)}
           
           
          />
          <br />
        </div>

        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="user_Email"
            placeholder="user_Email"
            onChange={(e) => onInputchanges(e)}
            
            
          />
          <br />
        </div>

        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="user_phoneno"
            placeholder="Phone_number"
            onChange={(e) => onInputchanges(e)}
           
           
          />
          <br />
        </div>
        <div className="container mt-2">
      <span className="psw">
        Forgot <Link to="#">Forgot?</Link>
      </span>
      <br />
      <label>
        <input type="checkbox" defaultChecked="checked" name="remember" />{" "}
        Remember me
      </label>
      <br />
    </div>
        <Button
          type="submit"
          className="btn btn-danger form-control sty"
          onClick={(e) => onSubmit(e)}
        >
          Register
        </Button>
      </div>
    </div>
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

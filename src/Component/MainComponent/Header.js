import React from "react";

const Header = () => {
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
              />
              <span className="ms-2">My Website</span>  
            </a>
            {/* Search Bar and City Input */}
            <div className="mx-auto d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search For The Products You Love..."
                aria-label="Search"
                style={{ width: "400px", borderRadius: "10px", textAlign:"center"}} // Adjust width and border-radius
              />
            </div>

            {/* Product and My Account Buttons */}
            <div className="d-flex align-items-center">
              <button className="btn btn-outline-danger me-2">
                <i className="fa-solid fa-city" /> City
              </button>
              {/* Product Button */}
              <button className="btn btn-outline-danger me-2">
                <i className="fa-solid fa-box" /> Products
              </button>
              {/* My Account Dropdown Button */}
              <div className="dropdown">
                <button
                  className="btn btn-outline-danger dropdown-toggle"
                  type="button"
                  id="accountDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-user" /> My Account
                </button>
                <ul className="dropdown-menu" aria-labelledby="accountDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Login
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Create Account
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;

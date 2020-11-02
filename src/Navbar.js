import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="main">
      <div className="container">
        <div className="branding">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/559px-Spotify_logo_with_text.svg.png"
            alt="logo"
            className="branding_logo"
          />
        </div>
        <div className="list">
          <ul>
            <li>
              <a href="#">Premium</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Download</a>
            </li>
            <li>|</li>
          </ul>
          <a href="#" className="profile-link">
            <ul>
              <li>
                <AccountCircleIcon
                  fontSize="large"
                  className="profile"
                ></AccountCircleIcon>
              </li>
              <li>Profile</li>
            </ul>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

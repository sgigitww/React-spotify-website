import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="grid">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/559px-Spotify_logo_with_text.svg.png"
          alt="logo"
          className="branding_logo"
        />
        <ul className="footer-ul">
          <li className="list-heading">COMPANY</li>
          <li>About</li>
          <li>Jobs</li>
          <li>For the Record</li>
        </ul>

        <ul className="footer-ul">
          <li className="list-heading">COMMUNITIES</li>
          <li>For Artists</li>
          <li>Developers</li>
          <li>Advertising</li>
          <li>Investors</li>
          <li>Vendors</li>
        </ul>

        <ul className="footer-ul">
          <li className="list-heading">USEFUL LINKS</li>
          <li>Help</li>
          <li>Web Player</li>
          <li>Free Mobile App</li>
          <li>2020 Wrapped</li>
        </ul>
      </div>

      <div className="flex">
        <ul>
          <li>Legal</li>
          <li>Privacy Center</li>
          <li>Privacy Policy</li>
          <li>Cookies</li>
          <li>About Ads</li>
        </ul>
        <p>© 2020 Spotify AB</p>
      </div>
    </div>
  );
}

export default Footer;

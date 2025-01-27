import React from "react";
import { FaInstagram } from "react-icons/fa";
import { BsFacebook, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <div className="footer-text">
        <span>Created with ❤ by Usama Ashraf</span>
      </div>
      <div className="social-icons">
        <a href="https://www.instagram.com/usamaashraf23/" target="_blank">
          <div className="social-link">
            <FaInstagram size={20} />
          </div>
        </a>
        <a href="https://www.facebook.com/innoxent.usama.10/" target="_blank">
          <div className="social-link">
            <BsFacebook size={20} />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/usama-ashraf-30464126a/"
          target="_blank">
          <div className="social-link">
            <BsLinkedin size={20} />
          </div>
        </a>
      </div>
    </footer>
  );
}

export default Footer;

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button className="hamburger-btn" onClick={toggleSidebar}>
        {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2>SideBar</h2>
        <ul>
          <NavLink
            to="/"
            className="nav-links"
            activeClassName="active"
            onClick={() => setIsOpen(false)}>
            <li>
              <FiEdit size={20} />
              Form
            </li>
          </NavLink>
          <NavLink
            to="/form-data"
            className="nav-links"
            activeClassName="active"
            onClick={() => setIsOpen(false)}>
            <li>
              <FaUser size={20} />
              User Data
            </li>
          </NavLink>
        </ul>
      </aside>
    </div>
  );
}

export default SideBar;

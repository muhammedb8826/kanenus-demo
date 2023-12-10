import { NavLink } from "react-router-dom"
import logoImage from '../assets/logo.png'
import { CgClose, CgMenuRight } from "react-icons/cg";
import { useState } from "react";

const NavBar = () => {
  const [toggle, setToggle] = useState(true)
  const toggleMenu = () => {
    setToggle(!toggle)
  }
  return (
    <nav>
        <div className="logo">
      <NavLink to="/">
        <img src={logoImage} alt="logo" />
      </NavLink>
      </div>
      <button className="nav-toggle" onClick={toggleMenu}>
      {toggle ? <CgMenuRight />: <CgClose /> }  
      </button>

      <ul className={`nav-links ${toggle? "": "active"} `}>
        <li>
          <from>
            <input type="text" placeholder="Search" />
          </from>
        </li>
        <li>
          <NavLink to="/projects" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            About Bureau
          </NavLink>
          <ul>
            <li>
              <NavLink to="/contact" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Our Structure
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Our Departments
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/">
           News
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
           Blogs
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
           Documents
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
           Announcements
          </NavLink>
          <ul>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Vacancies
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Bids
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/">
           Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
           Login
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar

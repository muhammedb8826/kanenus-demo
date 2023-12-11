import { NavLink } from "react-router-dom"
import logoImage from '../assets/logo.png'
import { CgClose, CgMenuRight } from "react-icons/cg";
import { LiaSearchSolid } from "react-icons/lia";
import { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";

const NavBar = () => {
  const [toggle, setToggle] = useState(true)
  const [collapseBureau, setCollapseBureau] = useState(true);
  const [collapseAnnouncement, setCollapseAnnouncement] = useState(true);
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
            <input type="text" placeholder="Search" className="search-input" />
            <button className="search-btn">
            <LiaSearchSolid />
            </button>
          </from>
        </li>
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <button onClick={()=>setCollapseBureau(prev=>!prev)} className="collapsible">
             <span>About Bureau</span> <span><IoIosArrowUp /></span> 
          </button>
          <ul className={`collapsible-items ${collapseBureau ? "": "close"} `}>
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
        <button onClick={()=>setCollapseAnnouncement(prev=>!prev)} className="collapsible">
             <span>Announcements</span> <span><IoIosArrowUp /></span> 
          </button>
          <ul className={`collapsible-items ${collapseAnnouncement ? "": "close"} `}>
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
          <NavLink to="/" className="login">
           Login
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar

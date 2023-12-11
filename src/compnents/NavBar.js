import { NavLink } from "react-router-dom"
import logoImage from '../assets/logo.png'
import { CgClose, CgMenuRight } from "react-icons/cg";
import { LiaSearchSolid } from "react-icons/lia";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

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
          <form>
            <input type="text" placeholder="Search" className="search-input" />
            <button className="search-btn">
            <LiaSearchSolid />
            </button>
          </form>
        </li>
        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li>
          <button onClick={()=>setCollapseBureau(prev=>!prev)} className="collapsible">
             <span>About Bureau</span> <span>{collapseBureau?<IoIosArrowUp />: <IoIosArrowDown />}</span> 
          </button>
          <ul className={`collapsible-items ${collapseBureau ? "": "close"} `}>
            <li>
              <NavLink to="/contact" >
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" >
                Our Structure
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" >
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
             <span>Announcements</span> <span>{collapseAnnouncement?<IoIosArrowUp />: <IoIosArrowDown />}</span> 
          </button>
          <ul className={`collapsible-items ${collapseAnnouncement ? "": "close"} `}>
            <li>
              <NavLink to="/contact" >
                Vacancies
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
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

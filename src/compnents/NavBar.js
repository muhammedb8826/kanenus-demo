import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
        <div className="logo">
      <NavLink to="/">
        <img src="../assets/logo.png" alt="logo" />
      </NavLink>
      </div>
    </nav>
  )
}

export default NavBar

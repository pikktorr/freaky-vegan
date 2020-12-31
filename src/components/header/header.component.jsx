import React from "react"
import {Link} from "react-router-dom";

import { ReactComponent as Logo} from "../../assets/green-leaf-vegan-icon-by-Vexels.svg"


import "./header.styles.scss"

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"/>
    </Link>
    <div className="navbar">
      <Link className="nav-item" to="/shop">Shop</Link>
      <Link className="nav-item" to="/contact">Contact</Link>
      <Link className="nav-item" to="/signin">Sign In</Link>
    </div>
  </div>
)

export default Header;
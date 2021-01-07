import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/green-leaf-vegan-icon-by-Vexels.svg";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="navbar">
      <Link className="nav-item" to="/">
        Home
      </Link>
      <Link className="nav-item" to="/shop">
        Shop
      </Link>
      <Link className="nav-item" to="/contact">
        Contact
      </Link>
      {currentUser ? (
        <div className="nav-item sign-out" onClick={() => auth.signOut()}>
          Sign Out
        </div>
      ) : (
        <Link className="nav-item" to="/signin">
          Sign In
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

// returns state from user reducer via root reducer
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

// connect is HIGHER ORDER COMPONENT
// pass props into header component from state
export default connect(mapStateToProps)(Header);

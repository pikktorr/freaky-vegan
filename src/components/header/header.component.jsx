import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/green-leaf-vegan-icon-by-Vexels.svg";

import "./header.styles.scss";

// FIREBASE AUTHENTICATION LOGOUT
const signOut = () => auth.signOut();

const Header = ({ currentUser }) => (
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
        <div className="nav-item sign-out" onClick={signOut}>
          Sign Out
        </div>
      ) : (
        <Link className="nav-item" to="/signin">
          Sign In
        </Link>
      )}
    </div>
  </div>
);

// returns state from user reducer via root reducer
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

// connect is HIGHER ORDER COMPONENT
// pass props into header component from state
export default connect(mapStateToProps)(Header);

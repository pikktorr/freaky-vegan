import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, GoogleSignIn, addToCart, ...otherProps }) => (
  <button
    className={`${addToCart ? "add-to-cart" : ""}
    ${GoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;

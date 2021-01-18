import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
// import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.action";

import "./cart-dropdown.styles.scss";
import CheckoutItemComponent from "../checkout-item/checkout-item.component";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CheckoutItemComponent key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <p className="empty-message">Your cart is empty</p>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      Go to Checkout
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

// mapDispatchToProps nélkül is megy, ha használjuk a dispatch-et fent

export default withRouter(connect(mapStateToProps)(CartDropdown));

import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.action";
import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {
  const { id, name, price, imageUrl, location, page } = item;

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="collection-item" key={id}>
      <div
        className={`image ${location ? "location" : ""}`}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        {location ? (
          <span className="city">{location}</span>
        ) : (
          <span className="price">{price} Ft</span>
        )}
      </div>
      {page ? (
        <CustomButton onClick={() => openInNewTab(page)}>
          Visit Page
        </CustomButton>
      ) : (
        <CustomButton addToCart onClick={() => addItem(item)}>
          Add to cart
        </CustomButton>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

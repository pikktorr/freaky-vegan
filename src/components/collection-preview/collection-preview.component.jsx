import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";


const CollectionPreview = ({ title, items }) => {
  const itemsInRow = 4;
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < itemsInRow)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;

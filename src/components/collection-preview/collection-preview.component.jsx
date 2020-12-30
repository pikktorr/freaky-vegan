import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";


/*
items: [
      {
        id: 1,
        name: "Brown Brim",
        imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
        price: 25,
      },
      ...
]
*/

const CollectionPreview = ({title, items}) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {
        items
        .filter( (item, index) => index < 4)
        .map( ({id, ...otherItemProps}) => (
        <CollectionItem key={id} {...otherItemProps}/>        
      ))}
    </div>
  </div>
);

export default CollectionPreview;

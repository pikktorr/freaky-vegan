import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const Directory = () => (
  <div className="directory-menu">
    <MenuItem title="Hats" />
    <MenuItem title="Jackets" />
    <MenuItem title="Sneakers" />
    <MenuItem title="Women's" />
    <MenuItem title="Men's" />
  </div>
);

export default Directory;

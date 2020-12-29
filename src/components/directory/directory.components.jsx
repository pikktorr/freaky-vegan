import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Ingredients",
          subtitle: "Order Now",
          imageUrl:
            "https://images.unsplash.com/photo-1593759608363-fde2fa65f5d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1410&q=80",
          id: 1,
          linkUrl: "shop/ingredients",
        },
        {
          title: "Confectionery",
          subtitle: "Order Now",
          imageUrl:
            "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
          id: 2,
          linkUrl: "shop/cakes",
        },
        {
          title: "Main Dishes",
          subtitle: "Order Now",
          imageUrl:
            "https://images.unsplash.com/photo-1535923633864-cbf229ad891c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
          id: 3,
          linkUrl: "shop/dishes",
        },
        {
          title: "Restaurants",
          subtitle: "Search",
          imageUrl:
            "https://images.unsplash.com/photo-1571649425823-e0f27d67d0bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1575&q=80",
          size: "large",
          id: 4,
          linkUrl: "search/restaurants",
        },
        {
          title: "Cafes",
          subtitle: "Search",
          imageUrl:
            "https://images.unsplash.com/photo-1598515502237-ee975b5a6e03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1533&q=80",
          size: "large",
          id: 5,
          linkUrl: "search/cafe",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => {
          return <MenuItem key={id} {...otherSectionProps} />;
        })}
      </div>
    );
  }
}

export default Directory;

import React from "react";
import { SHOP_DATA } from "./shop.data";

import CollectionPreview from "../../components/collection-preview/collection-preview.component"

/*
  {
    id: 1,
    title: "Hats",
    routeName: "hats",
    items: [
      {
        id: 1,
        name: "Brown Brim",
        imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
        price: 25,
*/

class ShopPage extends React.Component {
  constructor(props){
    super(props);

    this.state= {
      collections: SHOP_DATA
    }
  }

  render(){
    const {collections} = this.state;
    return(
      <div className="shop-page">
        {
          collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps}/>
          ))
        }
      </div>
    )
  }
}

export default ShopPage;
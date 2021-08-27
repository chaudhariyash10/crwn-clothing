import React from "react";

import SHOP_DATA from "./Shop.data";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";
class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        <div>
          {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))}
        </div>
      </div>
    );
  }
}

export default ShopPage;

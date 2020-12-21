import React from "react";
import { connect } from "react-redux";

import {
  CollectionItemContainer,
  CollectionFooter,
} from "./collection-item.styles";

import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <CollectionFooter>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </CollectionFooter>
      <CustomButton inverted onClick={() => addItem(item)}>
        ADD TO CART
      </CustomButton>
    </CollectionItemContainer>
  );
};

export default connect(null, { addItem })(CollectionItem);

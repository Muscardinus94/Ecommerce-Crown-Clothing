import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCount,
} from "./cart-icon.styles";

import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIconContainer />
    <ItemCount>{itemCount}</ItemCount>
  </CartIconContainer>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);

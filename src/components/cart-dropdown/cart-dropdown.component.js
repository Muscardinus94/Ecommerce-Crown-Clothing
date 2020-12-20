import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  CartDropDownContainer,
  CartItemsContainer,
  EmptyMessage,
} from "./cart-dropdown.styles";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropDownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} {...item} />)
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )}
    </CartItemsContainer>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </CartDropDownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

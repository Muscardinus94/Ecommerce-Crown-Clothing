import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { clearCart } from "../../redux/cart/cart.actions";

const StripeCheckoutButton = ({ price, clearCart, history }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HLsgfIQDrcRAe6SE4HUIs5PxgUHO4XKNlJGzfJ9fUSlHDvARveNclIvj3FzdzfYmdPSHvNTZV3tRGkg7MUKhHME001wqO3maB";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment Success");
        clearCart();
        history.push("/");
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        alert(
          "There was an issue with your payment. Please make sure you use the provided Credit Card"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      despcription={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default connect(null, { clearCart })(withRouter(StripeCheckoutButton));

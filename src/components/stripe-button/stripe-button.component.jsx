import React from "react";
import StripeCheckout from "react-stripe-checkout";

import VeganLogo from "../../assets/green-leaf-vegan-icon-by-Vexels.svg";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IHs62KwBsxDqgrxOQcqFt8T4Ki4oSa1pQbBO1fHJi51x4tHPp7UXfAR0xtFeGr6IKe5niYdDtSfptR3T44u57P300jqLiRW5d";

  const handleToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Freaky Vegan"
      image={VeganLogo}
      description={`Your total is ${price} Ft`}
      amount={priceForStripe}
      currency="huf"
      panelLabel="Pay Now"
      token={handleToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

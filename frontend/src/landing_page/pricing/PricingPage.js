import React from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import OpenAccount from "../OpenAccount";
import Charges from "./charges";

function PricingPage() {
  return (
    <>
      <Hero />
      <Charges />
      <Brokerage />
    </>
  );
}

export default PricingPage;

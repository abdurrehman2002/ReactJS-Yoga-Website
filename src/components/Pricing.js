import React from "react";
import Card from "./Card";

function Pricing() {
  return (
    <div className="PricingBg">
      <div className="PricingText">
        <h1>Pricing</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisc- <br />
          ing elit. Vivamuslacinia odio vitae vestibulum ves- <br />
          tibulum.
        </p>
      </div>

      <div className="row">
        <div className="col-4"> <Card/> </div>
        <div className="col-4"> <Card/> </div>
        <div className="col-4"> <Card/> </div>
      </div>

    </div>
  );
}

export default Pricing;

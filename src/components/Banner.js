import React from "react";
import Button from "./Button";
import Banner_img from "../assets/images/Banner_img.png";
function Banner() {
  return (
        <div className="bannerWrapper">
            
    <div className="row d-flex p-4">
      <div className="col-6">
        <div className="bannerImg">
          <img src={Banner_img} />
          
        </div>
      </div>

      <div className="col-6">
        <div className="bannerText">
        <h1>YOGA CLASS</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipi- <br/>
          scing elit. Donec fringilla neque euismod volut- <br/>
          pat cursus. Vestibulum ac pretium orci,
        </p>
        <Button  />
        </div>
        
      </div>
      </div>
    </div>
  );
}

export default Banner;

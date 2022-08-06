import React from "react";
import Button from "./Button";

function Instractor() {
  return (
    <div>
      <div className="row">
        <div className="col-6 p-0">
          <div className="InstructorText">
            <h1>BEST</h1>
            <h2>INSTRUCTOR</h2>
            <p>
              Lorem ipsum dolor sit amet, consecte- <br/> tur adipiscing elit. Vivamus
              lacinia <br/> odio vitae vestibulum vestibulum.
            </p>
            <Button />
          </div>
        </div>

        <div className="col-6 p-0">
            <div className="InstructorImg"></div>
        </div>
      </div>
    </div>
  );
}

export default Instractor;

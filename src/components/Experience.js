import React from "react";
import Button from "./Button";

function Experience() {
  return (
    <div className="ExperienceBg">
      <div className="row">
        <div className="col-6">
          <div className="ExperienceImg"></div>
        </div>

        <div className="col-6">
          <div className="ExperienceText">
            <h1>NEW</h1>
            <h2>EXPERIENCE</h2>
            <p>
              Lorem ipsum dolor sit amet, consecte- <br/> tur adipiscing elit.
              Vivamus lacinia <br/> odio vitae vestibulum vestibulum.
            </p>
            <Button />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Experience;

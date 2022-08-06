import React from "react";
import logo from "../assets/images/logo.png";

function Header() {
  return (
    <div className="headerWrapper">
    <div className="row">
      <div className="col-1 d-flex justify-content-start">
      <div className="bg-logo">
        <div className="logo">
          <img src={logo} />
        </div>
      </div>
      </div>

      <div className="col-11 p-0 pt-5 pb-5 ">
        <div className="navWrapper ">
          <div className="row mt-3 d-flex justify-content-end fw-bold pt-2 pb-2 ">
            <div className="col-2">
              <a className="text-decoration-none text-black" href="#">
                HOME
              </a>
            </div>
            <div className="col-2">
              <a className="text-decoration-none text-black" href="#">
                ABOUT US
              </a>
            </div>
            <div className="col-2">
              <a className="text-decoration-none text-black" href="#">
                SERVICE
              </a>
            </div>
            <div className="col-2">
              <a className="text-decoration-none text-black" href="#">
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Header;

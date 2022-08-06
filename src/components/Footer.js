import React from "react";

function Footer() {
  return (
    <div className="FooterBg">
      <div className="FooterWrapper">
      <div className="row">
        <div className="col-4">
          <div className="FooterTitle">
          <h2>Title Here</h2>
          <p>
            Lorem ipsum dolor sit amet, consecte-
            <br />
            tur adipiscing elit. Aliquam at dignis-
            <br />
            sim nunc, id maximus ex. Etiam nec <br /> dignissim elit, at
            dignissim enim.
          </p>
          </div>
        </div>

        <div className="col-8 p-0">
          <div className="row ">
            <div className="col-4">
              <div className="FooterAbout">
                <h2>About</h2>
                <ul>
                  <li>History</li>
                  <li>Our Team</li>
                  <li>Brand Guidelines</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>

            <div className="col-4">
              <div className="FooterServices">
                <h2>Services</h2>
                <ul>
                  <li>How to Order</li>
                  <li>Our Products</li>
                  <li>Order Status</li>
                  <li>Promo</li>
                  <li>Payment Method</li>
                </ul>
              </div>
            </div>

            <div className="col-4">
              <div className="FooterFollow">
                <h2>Follow</h2>
                <ul>
                  <li><i class="fa fa-facebook-square"></i>Facebook</li>
                  <li><i class="fa fa-twitter-square"></i>Twitter</li>
                  <li><i class="fa fa-instagram"></i>Instagram</li>
                  <li><i class='fa fa-whatsapp'></i>Whatsapp</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;

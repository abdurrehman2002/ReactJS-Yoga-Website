import React from "react";
import Chooseclass1 from "../assets/images/Chooseclass1.png";
import Chooseclass2 from "../assets/images/Chooseclass2.png";
import Chooseclass3 from "../assets/images/Chooseclass3.png";

function ChooseClass() {
  return (
    <div className="chooseclassWrapper">

      <div className="row">
        <div className="chooseclassText">
          <h1>CHOOSE CLASS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisc- <br />
            ing elit. Vivamus lacinia odio vitae vestibulum ves- <br />
            tibulum.
          </p>
        </div>
      </div>


      <div className="ChooseClassImgWrapper">
        <div className="row">
          <div className="col-4">
            <div className="ChooseClassImg">
              <img src={Chooseclass1} />
            </div>
            <div className="ChooseClassImgText">
                <h1>NEWBIE CLASS</h1>
                <p>Lorem ipsum dolor sit amet, con- <br/>
                    sectetur adipiscing elit.</p>
            </div>
          </div>

          <div className="col-4">
            <div className="ChooseClassImg">
              <img src={Chooseclass2} />
            </div>
            <div className="ChooseClassImgText">
                <h1>ADVANCED CLASS</h1>
                <p>Lorem ipsum dolor sit amet, con- <br/>
                    sectetur adipiscing elit.</p>
            </div>
            
          </div>

          <div className="col-4">
            <div className="ChooseClassImg">
              <img src={Chooseclass3} />
            </div>
            <div className="ChooseClassImgText">
                <h1>EXPERT CLASS</h1>
                <p>Lorem ipsum dolor sit amet, con- <br/>
                    sectetur adipiscing elit.</p>
            </div>
          </div>

        </div>

        
      </div>


    </div>
  );
}

export default ChooseClass;

import React from 'react';
import TrainerImg from '../assets/images/TrainerImg.png'

function Trainer() {
    return (
        <div className='row'>
        <div className='TrainerBg'>
            <div className='TrainerImgWraper'>
            <div className="TrainerImg">
              <img src={TrainerImg} />
            </div>
            
        </div>

        <div className='TrainerText'>
            <p>Lorem ipsum dolor sit amet, consecte- <br/> 
            tur adipiscing elit. Vivamus lacinia odio <br/> vitae vestibulum vestibulum. </p>
            <h1>TRAINER DEVANDRA</h1>
        </div>

        </div>
        </div>
    );
}

export default Trainer; 
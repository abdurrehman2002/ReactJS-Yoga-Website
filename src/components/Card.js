import React from 'react';
import PricingCardImg from '../assets/images/PricingCardImg.png'
import Button from './Button';

function Card() {
    return (
        <div className='CardBg'>
            <h1>NEWBIE CLASS</h1>
            <h2>$00.00</h2>
            <img src={PricingCardImg} />
            <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit.</p>
            <Button/>
        </div>
    );
}

export default Card;
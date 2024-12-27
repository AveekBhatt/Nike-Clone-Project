import React from 'react';
import './Featcss.css'
import GIF from '../Assets/giphy.gif'
import shoe from '../Assets/nike-air-fear-of-god-1-light-bone-black-release-date.webp'
const Featured = () => {
        return (  
            <div className='feat'>
             <div class="dont-miss-div">
            <div class="dont-miss-div-intro">
            <h2>Don't Miss</h2>
        </div>
        <div class="dont-miss-div-media">
          <div class="dont-miss-div-media-Medias left">
          <img src={shoe} />
          </div>
          <div class="dont-miss-div-media-Medias right">
          <img src={GIF} alt="FOD" id="FOD" />
          </div>
        </div>
    </div>

    <div class="intro-second">
        <h3>Air Jordan 4 RM</h3>
        <h1 id="Banner">RIDE EASY</h1> 
        <h4>With this new spin on the AJ4 icon , tomorrow will be even faster</h4>
        <button class="Shop">Shop</button>
        </div>
            </div>
        );
}
 
export default Featured;
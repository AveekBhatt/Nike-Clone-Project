import React, { useState } from 'react';
import './Herocss.css'
import slide1 from "../Assets/c14b54178110309.64e2ae053449b(1).jpg"
import slide2 from "../Assets/newshoes.jpg"
import slide3 from "../Assets/NEWSHOE.jpg"

import prod1 from "../Assets/GODFEAR.jpg"
import prod2 from "../Assets/LB17NEWSHOE.jpg"
import prod3 from "../Assets/mds-5-min.jpg"

const Hero  = () => {
        const [currentSlideban , setCurrentSlideban] = useState(0);
        const slideban = [slide1,slide2,slide3]
        const nextSlide = () => {
            setCurrentSlideban((prevIndex) => (prevIndex + 1) % slideban.length);
          };
        
          const prevSlide = () => {
            setCurrentSlideban((prevIndex) =>
              prevIndex === 0 ? slideban.length - 1 : prevIndex - 1
            );
          };
        return (
            <div className='hero'>
            <div className="slideshow-container">
            {slideban.map((slide, index) => (
            <div
             key={index}
             className="mySlides"
             style={{
              display: currentSlideban === index ? "block" : "none",
             }}
            >
             <img src={slide}/>
            </div>
      ))}

      <a className="prev" onClick={prevSlide}>
        &#10094;
      </a>
      <a className="next" onClick={nextSlide}>
        &#10095;
      </a>
    </div>

           <div class="intro">
           <h3><b>Just In</b></h3>
           <h1 id="Banner">NOTHING BEATS THE CITY</h1> 
           <h4>Built to overcome anything that the city throws your way.</h4>
           <button class="Shop">Shop</button>
           </div>
           
        <div class="latest">
        <h2 class="latestval">The Latest</h2>
        <div class="latest-models">
        <div class="latest-prod">
            <img src={prod1}/>
            <div class="descrip-1">
                <h3>Elevate Your Essence</h3>
                <h2>NIKE X FEAR OF GOD</h2>
                <button class="Shop">Shop</button>
            </div>
        </div>
        <div class="latest-prod">
            <img src={prod2} />
            <div class="descrip-1">
                <h3>Have The Courage</h3>
                <h2>NIKE X LEBRON JAMES 17</h2>
                <button class="Shop">Shop</button>
            </div>
        </div>
        <div class="latest-prod">
            <img id="thirdimg" src={prod3} />
            <div class="descrip-1">
                <h3>Step Into Greatness</h3>
                <h2>NIKE X ZOOM MERCURIAL SUPERFLY 9</h2>
                <button class="Shop">Shop</button>
            </div>
        </div>
    </div>
    </div>



            </div>
        );
    
}
 
export default Hero;
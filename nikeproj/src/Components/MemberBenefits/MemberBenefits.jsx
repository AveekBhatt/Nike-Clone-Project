import React, { useRef } from 'react';
import './Benefits.css'
import ben1 from '../Assets/carousal3/Snapinsta.app_428584639_389936420614760_2474255392217429846_n_1080.jpg';
import ben2 from '../Assets/carousal3/Snapinsta.app_449678589_841562350773204_4623635708292426645_n_1080.jpg';
import ben3 from '../Assets/carousal3/Snapinsta.app_449678590_1660990577779369_5695811606740563463_n_1080.jpg';
import ben4 from '../Assets/carousal3/Snapinsta.app_449695796_782278504062897_7542958470270362894_n_1080.jpg';
import ben5 from '../Assets/carousal3/Snapinsta.app_449682049_365545979888145_6412408034349173644_n_1080.jpg';
import ben6 from '../Assets/carousal3/ZM+SUPERFLY+10+ELITE+KM+FG.jpeg';
const MemberBenefits = () => {
    const scrollableDivRef = useRef(null);

    const scrollLeft = () => {
      if (scrollableDivRef.current) {
        scrollableDivRef.current.scrollBy({ left: -800, behavior: "smooth" });
      }
    };
  
    const scrollRight = () => {
      if (scrollableDivRef.current) {
        scrollableDivRef.current.scrollBy({ left: 800, behavior: "smooth" });
      }
    };

    return (
        <div className='membenefits'>
              <div class="shows-info-small">
        <div class="shows-info-small-data left">
          <h2>Member Benefits</h2>
        </div>
        <div class="shows-info-small-data right">
            <button type="button" id="BtnBen1" onClick={scrollLeft}>⬅</button>
            <button type="button" id="BtnBen2" onClick={scrollRight}>➡</button>
          </div>
    </div>
      <div class="shows-benefits">
        <div id="contents-benefits" ref={scrollableDivRef}>
        <div class="element-benefits">
        <img id="imgs-benefits" src={ben1} />
        <div class="contents-details-benefits">
             <h3>Member Product</h3>
             <h2>Your Exclusive Access</h2>
            <button class="CatBtnFot"><b>Shop</b></button>
        </div>
        </div>
        <div class="element-benefits">
        <img id="imgs-benefits" src={ben2} />
        <div class="contents-details-benefits">
             <h3>Member Product</h3>
             <h2>Your Exclusive Access</h2>
           <button class="CatBtnFot"><b>Shop</b></button>
        </div>
        </div>
        <div class="element-benefits">
        <img id="imgs-benefits" src={ben3} />
        <div class="contents-details-benefits">
             <h3>Member Product</h3>
             <h2>Your Exclusive Access</h2>
            <button class="CatBtnFot"><b>Shop</b></button>
        </div>
        </div>
        <div class="element-benefits">
        <img id="imgs-benefits" src={ben4} />
        <div class="contents-details-benefits">
             <h3>Member Product</h3>
             <h2>Your Exclusive Access</h2>
            <button class="CatBtnFot"><b>Shop</b></button>
        </div>
        </div>
        <div class="element-benefits">
        <img id="imgs-benefits" src={ben5} />
        <div class="contents-details-benefits">
             <h3>Member Product</h3>
             <h2>Your Exclusive Access</h2>
            <button class="CatBtnFot"><b>Shop</b></button>
        </div>
        </div>
        <div class="element-benefits">
        <img id="imgs-benefits" src={ben6} />
        <div class="contents-details-benefits">
             <h3>Member Product</h3>
             <h2>Your Exclusive Access</h2>
            <button class="CatBtnFot"><b>Shop</b></button>
        </div>
        </div>
        </div>
    </div>
        </div>
      );
}
 
export default MemberBenefits;
import React, { useRef } from 'react';
import cat1 from '../Assets/nike-soccer.jpg';
import cat2 from '../Assets/basket.jpg';
import cat3 from '../Assets/run.jpg';
import cat4 from '../Assets/gym.jpg';
import cat5 from '../Assets/tennis.jpg';
import cat6 from '../Assets/yoga.jpg';
import cat7 from '../Assets/skate.jpg';
import cat8 from '../Assets/dance.jpg';

import { Link } from 'react-router-dom';

const ShopBySport = () => {
  const refreshPage = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      window.location.reload(false);
    },500);
    console.log("Page")
 }
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
        <div className='shopsport'>
        <div class="shows-info-small">
          <div class="shows-info-small-data left">
            <h2>Shop By Sport</h2>
          </div>
          <div class="shows-info-small-data right">
              <button type="button" id="BtnCat1" onClick={scrollLeft}>⬅</button>
              <button type="button" id="BtnCat2" onClick={scrollRight}>➡</button>
            </div>
      </div>
        <div class="shows-category">
          <div id="contents-category" ref={scrollableDivRef}>
          <div class="element-category">
          <img id="imgs-category" src={cat1} />
          <div class="contents-details-category">
          <Link to={`/Shop/Football/Shoes`} onClick={refreshPage}><button class="CatBtnFot"><b>Football</b></button></Link>
          </div>
          </div>
          <div class="element-category">
          <img id="imgs-category" src={cat2} />
          <div class="contents-details-category">
          <Link to={`/Shop/Basketball/Shoes`} onClick={refreshPage}><button class="CatBtnFot"><b>Basketball</b></button></Link>
          </div>
          </div>
          <div class="element-category">
          <img id="imgs-category" src={cat3} />
          <div class="contents-details-category">
          <Link to={`/Shop/Running/Shoes`} onClick={refreshPage}><button class="CatBtnFot"><b>Running</b></button></Link>
          </div>
          </div>
          <div class="element-category">
          <img id="imgs-category" src={cat4} />
          <div class="contents-details-category">
          <Link to={`/Shop/Gym/Shoes`} onClick={refreshPage}><button class="CatBtnFot"><b>Gym & Training</b></button></Link>
          </div>
          </div>
          <div class="element-category">
          <img id="imgs-category" src={cat5} />
          <div class="contents-details-category">
          <Link to={`/Shop/Tennis/Shoes`} onClick={refreshPage}><button class="CatBtnFot"><b>Tennis</b></button></Link>
          </div>
          </div>
          <div class="element-category">
          <img id="imgs-category" src={cat6} />
          <div class="contents-details-category">
          <Link to={`/Shop/Yoga/Shoes`} onClick={refreshPage}><button class="CatBtnFot"><b>Yoga</b></button></Link>
          </div>
          </div>
          <div class="element-category">
          <img id="imgs-category" src={cat7} />
          <div class="contents-details-category">
          <Link to={`/Shop/Skateboarding/Shoes`} onClick={refreshPage}><button class="CatBtnFot"><b>Skateboarding</b></button></Link>
          </div>
          </div>
          <div class="element-category">
          <img id="imgs-category" src={cat8} />
          <div class="contents-details-category">
          <Link to={`/Shop/Athletics/Shoes`} onClick={refreshPage}><button class="CatBtnFot"><b>Athletics</b></button></Link>
          </div>
          </div>
          </div>
      </div>
        </div>
    );
    
}
 
export default ShopBySport;
import React  , {useRef} from 'react';
import './Spotscss.css'
import data from './datalatest'
import { Link } from 'react-router-dom';
const Spotlights = () => {
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
      <div className='spots'>
         <div class="shows-info-small">
        <div class="shows-info-small-data left">
          <h2>Classic Spotlights</h2>
        </div>
        <div class="shows-info-small-data right">
            <button type="button" id="BBtn1" onClick={scrollLeft}>⬅</button>
            <button type="button" id="BBtn2" onClick={scrollRight}>➡</button>
          </div>
    </div>
    <div class="shows-small">
        <div id="contents-small" ref={scrollableDivRef}>
        {data.map((item) => (  
        <div class="element-small">
        <Link to={`/Product/${item.id}`} style={{textDecoration: 'none' ,  color : 'black'}} onClick={refreshPage}>
        <img id="imgs-small" src={item.imageurl[0]} />
        <div class="contents-details-small">
            <p><b>{item.Name}</b></p>
        </div>
        </Link>
        </div>
        ))};
        </div>
    </div>
      </div>
    );
    
}
 
export default Spotlights;
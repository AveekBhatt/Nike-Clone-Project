import React , {useRef} from 'react';
import './NewArrivalscss.css'
import data from './datanewarrivals'
import { Link } from 'react-router-dom';

const NewArrivals = () => {
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
    const refreshPage = () => {
      setTimeout(() => {
        window.scrollTo(0, 0);
        window.location.reload(false);
      },500);
      console.log("Page")
   }
    return (
        <div className='NA'>
             <div class="shows-info">
        <div class="shows-info-data left">
          <h2>New Arrivals Just Landed</h2>
        </div>
        <div class="shows-info-data right">
            <button type="button" id="Btn1" onClick={scrollLeft}>⬅</button>
            <button type="button" id="Btn2" onClick={scrollRight}>➡</button>
          </div>
    </div>

    <div class="shows">
        <div id="contents" ref={scrollableDivRef}>
        {data.map((item) => (  
         <div class="element" key={item.id}>
          <Link to={`/Product/${item.id}`} style={{textDecoration: 'none' ,  color : 'black'}} onClick={refreshPage}>
         <img id="imgs" src={item.imageurl[0]} />
         <div class="contents-details">
            <p><b>{item.Name}</b></p>
            <p><b>{item.Category}</b></p>
            <p><b>Rs {item.Price}</b></p>
         </div>
         </Link>
         </div>
        ))}
        </div>
    </div>
        </div>
    )
    
}
 
export default NewArrivals;
import React, { useContext , useRef } from 'react';
import './ShopCatCss.css'
import { ShopContext } from '../Context/ShopContext';
import data from '../Components/Assets/maincont'
import cats from '../Components/Assets/catgeoryimgs';
import benefits from '../Components/Assets/membersimage';
import products from '../Components/Assets/allshoes';
import products2 from '../Components/Assets/allshoes';
import { Link } from 'react-router-dom';

const ShopCategory = (props) => {

  const refreshPage = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      window.location.reload(false);
    },500);
    console.log("Page")
 }
       window.scrollTo({top : 0 , behavior : 'smooth'})
       const {all_product} = useContext(ShopContext)
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


       const scrollableDivCats = useRef(null);

       const scrollLeftCats = () => {
         if (scrollableDivCats.current) {
           scrollableDivCats.current.scrollBy({ left: -800, behavior: "smooth" });
         }
       };
     
       const scrollRightCats = () => {
         if (scrollableDivCats.current) {
           scrollableDivCats.current.scrollBy({ left: 800, behavior: "smooth" });
         }
       };

       const scrollableDivfits = useRef(null);

       const scrollLeftfits = () => {
         if (scrollableDivfits.current) {
           scrollableDivfits.current.scrollBy({ left: -800, behavior: "smooth" });
         }
       };
     
       const scrollRightfits = () => {
         if (scrollableDivfits.current) {
           scrollableDivfits.current.scrollBy({ left: 800, behavior: "smooth" });
         }
       };

       const scrollableDivshows = useRef(null);

       const scrollLeftshows = () => {
         if (scrollableDivshows.current) {
           scrollableDivshows.current.scrollBy({ left: -800, behavior: "smooth" });
         }
       };
     
       const scrollRightshows = () => {
         if (scrollableDivshows.current) {
           scrollableDivshows.current.scrollBy({ left: 800, behavior: "smooth" });
         }
       };

       const scrollableDivsecond = useRef(null);

       const scrollLeftsecond = () => {
         if (scrollableDivsecond.current) {
           scrollableDivsecond.current.scrollBy({ left: -800, behavior: "smooth" });
         }
       };
     
       const scrollRightsecond = () => {
         if (scrollableDivsecond.current) {
           scrollableDivsecond.current.scrollBy({ left: 800, behavior: "smooth" });
         }
       };
       let productstypelist=[];


        return (
            <div className='shopcategory'>
                <div className='Banner-Container'>
                <img src={props.banner} />
                </div>
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
        {data.map((item) =>
          item.category === props.category ? (
    <div className="element-benefits" key={item.id}>
      <img id="imgs-exclusives" src={item.imageurl} alt="Benefit" />
    </div>
  ) : null
)}
            </div>
            </div>



            <div class="shows-info">
        <div class="shows-info-data left">
          <h2>Categories in {props.category}</h2>
        </div>
        <div class="shows-info-data right">
            <button type="button" id="Btn1" onClick={scrollLeftshows}>⬅</button>
            <button type="button" id="Btn2" onClick={scrollRightshows}>➡</button>
          </div>
    </div>

    <div class="shows">
        <div id="contents" ref={scrollableDivshows}>
        {[...new Set(products.filter(item => item.Category === props.category) .map(item => item.Type))].map((type, index) => {
           const matchingItem = products.find(
           item => item.Type === type && item.Category === props.category 
        );
           return matchingItem ? (
           <Link style={{textDecoration : 'none' , color : 'black'}} to={`/Shop/Types/${props.category}/${type}`} onClick={refreshPage}>
           <div className="element" key={index}>
           <img id="imgs" src={matchingItem.imageurl[0]} alt={type} />
           <div className="contents-details">
           <p><b>{type}</b></p>
           </div>
           </div>
           </Link>
    ) : null; 
  })}


        </div>
    </div>



            <div class="shows-info-small">
          <div class="shows-info-small-data left">
            <h2>Shop By Sport</h2>
          </div>
          <div class="shows-info-small-data right">
              <button type="button" id="BtnCat1" onClick={scrollLeftCats}>⬅</button>
              <button type="button" id="BtnCat2" onClick={scrollRightCats}>➡</button>
            </div>
      </div>
        <div class="shows-category">
          <div id="contents-category" ref={scrollableDivCats}>
          {cats.map((item) => 
           item.category === props.category ? (
          <div class="element-category" key={item.id}>
          <Link to={`/Shop/${item.activity}/${item.category}`} >
          <img id="imgs-category" src={item.imageurl} />
          <div class="contents-details-category">
              <button class="CatBtnFot"><b>{item.activity}</b></button>
          </div>
          </Link>
          </div>
           ):null
          )}
          </div>
      </div>


      <div class="shows-info">
        <div class="shows-info-data left">
          <h2>Shoes For {props.category}</h2>
        </div>
        <div class="shows-info-data right">
            <button type="button" id="Btn1" onClick={scrollLeftsecond}>⬅</button>
            <button type="button" id="Btn2" onClick={scrollRightsecond}>➡</button>
          </div>
    </div>

    <div class="shows">
        <div id="contents" ref={scrollableDivsecond}>
        {products2.map((item) =>   
          item.Category===props.category ? (
         <div class="element" key={item.id}>
         <Link to={`/Product/${item.id}`} style={{textDecoration: 'none' ,  color : 'black'}} onClick={refreshPage}>
         <img id="imgs" src={item.imageurl[0]} />
         <div class="contents-details">
            <p><b>{item.Name}</b></p>
            <p><b>{item.Game}</b></p>
            <p><b>Rs {item.Price}</b></p>
         </div>
         </Link>
         </div>
        ): null 
      )}
        </div>
    </div>

      <div class="shows-info-small">
        <div class="shows-info-small-data left">
          <h2>Member Benefits</h2>
        </div>
        <div class="shows-info-small-data right">
            <button type="button" id="BtnBen1" onClick={scrollLeftfits}>⬅</button>
            <button type="button" id="BtnBen2" onClick={scrollRightfits}>➡</button>
          </div>
    </div>
      <div class="shows-benefits">
        <div id="contents-benefits" ref={scrollableDivfits}>
        {benefits.map((item) => 
        item.category === props.category ? (
        <div class="element-benefits" key={item.id}>
        <img id="imgs-benefits" src={item.imageurl} />
        <div class="contents-details-benefits">
             <h3>Member Product</h3>
             <h2>Your Exclusive Access</h2>
            <button class="CatBtnFot"><b>Shop</b></button>
        </div>
        </div>
        ) : null
        )}
        </div>
    </div>

    <div class="experience-wrap">
     <div class="experience-wrap-menu">
      <div class="experience-wrap-column">
         <ul>
          <li><b>{props.category}'s Shoes</b></li>
          <li>Air Force 1</li>
          <li>Air Force 1</li>
          <li>Air Force 1</li>
          <li>Air Force 1</li>
         </ul>
      </div>
      <div class="experience-wrap-column">
        <ul>
         <li><b>{props.category}'s Clothing</b></li>
         <li>Air Force 1</li>
         <li>Air Force 1</li>
         <li>Air Force 1</li>
         <li>Air Force 1</li>
        </ul>
     </div>
     <div class="experience-wrap-column">
      <ul>
       <li><b>Icons</b></li>
       <li>Air Force 1</li>
       <li>Air Force 1</li>
       <li>Air Force 1</li>
       <li>Air Force 1</li>
      </ul>
   </div>
   <div class="experience-wrap-column">
    <ul>
     <li><b>Icons</b></li>
     <li>Air Force 1</li>
     <li>Air Force 1</li>
     <li>Air Force 1</li>
     <li>Air Force 1</li>
    </ul>
 </div>
     </div>
    </div>

            </div>
        );
    
}
 
export default ShopCategory;
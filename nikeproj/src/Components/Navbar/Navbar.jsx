import React, { useState, useEffect , useContext, useRef } from 'react';
import './Navcss.css'
import Slider from "react-slick";
//import '../Assets/NV.js'
import logojordan from '../Assets/Screenshot from 2024-11-07 10-25-25.png'
import logomenu from "../Assets/nike-4-logo-svg-vector.svg"
import { Link } from 'react-router-dom';
import carticon from '../Assets/shopping-bag(1).png'
import { ShopContext } from '../../Context/ShopContext';
import wishicon from '../Assets/love.png'
import warner from '../Assets/warner-bros-pictures-logo-update-they-brought-the-banner-v0-vci3di7cp19c1.webp';
import sws from '../Assets/warner-bros-pictures-logo-update-they-brought-the-banner-v0-vci3di7cp19c1.jpg';
import marvs from '../Assets/warner-bros-pictures-logo-update-they-brought-the-banner-v0-vci3di7cp19c1(1).jpg';
import barcaimg from '../Assets/barca.jpg'
import Searchbar from '../searchbar/seachbar';

import menimg1 from '../Assets/warner-bros-pictures-logo-update-they-brought-the-banner-v0-vci3di7cp19c1(2).jpg'
import menimg2 from '../Assets/warner-bros-pictures-logo-update-they-brought-the-banner-v0-vci3di7cp19c1(3).jpg'
import menimg3 from '../Assets/warner-bros-pictures-logo-update-they-brought-the-banner-v0-vci3di7cp19c1(4).jpg'
import menimg4 from '../Assets/warner-bros-pictures-logo-update-they-brought-the-banner-v0-vci3di7cp19c1(3)(1).jpg'

import womenimg1 from '../Assets/warner-bros-pictures-logo-update-they-brought-the-banner-v0-vci3di7cp19c1(3)(2).jpg'
import womenimg2 from '../Assets/warner-bros-pictures-logo-update-they-brought-the-banner-v0-vci3di7cp19c1(3)(3).jpg'
import womenimg3 from '../Assets/warner-bros-pictures-logo-update-they-brought-the-banner-v0-vci3di7cp19c1(3)(4).jpg'



const Navbar = () => {

 
  const {gettotalelements , gettotalamount , all_shoes , cartItems , addToCart , removeFromCart} = useContext(ShopContext);
  const slides = [
    "Move, Shop, Customise & Celebrate With Us Move, Shop, Customise & Celebrate With Us",
    "New Styles On Sale: Up To 40% Off",
  ];
  const [helpmenu,sethelpmenu] = useState(false); 
  const handlehelp = () => {
    sethelpmenu(!helpmenu)
  }
  const [showmegamemenu,setshowmegamemenu] = useState(false); 
 
  
  const handleshowmegamemenu = () => {
      setshowmegamemenu(!showmegamemenu);
  }
  



  const [showmegamemenuw,setshowmegamemenuw] = useState(false); 
  const handleshowmegamemenuw = () => {
    setshowmegamemenuw(!showmegamemenuw)
  }
  const [showmegamemenuk,setshowmegamemenuk] = useState(false); 
  const handleshowmegamemenuk = () => {
    setshowmegamemenuk(!showmegamemenuk)
  }

  const [showmegamemenus,setshowmegamemenus] = useState(false); 
  const handleshowmegamemenus = () => {
    setshowmegamemenus(!showmegamemenus)
  }
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval); // Cleanup interval
  }, [slides.length]);
  return(
     <div className="NAV">
      <div className='navscroll'>
     <nav class="prehome">
     <div class="PREHOME-beta">   
     <div class="jordan-prehome jordan-prehome-logo">
      <a class="jordon-logo-png">
        <img src={logojordan} alt='jordan' />
      </a>
     </div>
     <div class="jordan-prehome">
       <ul class="list-info-data">
        <li>Find a Store</li>
        <li class="HelpDrop"  id="hd" onMouseEnter={handlehelp} onMouseLeave={handlehelp}>Help
          {helpmenu ? 
          <ul class="helpdrop" id="hdul">
            <li><h2>Help</h2></li>
            <li>Order Status</li>
            <li>Order Status</li>
            <li>Order Status</li>
            <li>Order Status</li>
            <li>Order Status</li>
            <li>Order Status</li>
            <li>Order Status</li>
            <li>Order Status</li>
          </ul> : null
         }
        </li>
        <li>Join Us</li>
        <li>Sign In</li>
       </ul>
     </div>
     </div>
    </nav>

    <div class="HEAD">
    <div class="nav-container">
    <nav class="homenav">
      <div class="menu-container">
        <div className='navbar-elements left'>
         <div class="menu">
         <div class="item-menu">
          <ul class="item-menu-data">
            <li class="mencat" id="mc" onMouseEnter={handleshowmegamemenu} onMouseLeave={handleshowmegamemenu}><b><Link style={{textDecoration: 'none' ,  color : 'black'}} to='/Men'>Men</Link></b>
            {showmegamemenu ?
            <div class="MenCats" id="MC">
               <div class="MenCatsMenu" >
                 <ul>
                  <li>Featured</li>
                  <li><img src={menimg1} /></li>
                  <li>Bestsellers</li>
                  <li>Shop All Sale</li>
                 </ul>
                 <ul>
                  <li>Shoes</li>
                  <li><img src={menimg2}/></li>
                  <li>Bestsellers</li>
                  <li>New Arrivals</li>
                  <li>Check Them Out</li>
                 </ul><ul>
                  <li>Clothing</li>
                  <li><img src={menimg3}/></li>
                  <li>Bestsellers</li>
                  <li>Exclusives</li>
                  <li>End Of Season Sale</li>
                 </ul><ul>
                  <li>Shop by Sport</li>
                  <li><img src={menimg4}/></li>
                  <li>Bestsellers</li>
                  <li>Best Buy</li>
                  <li>Customize Nike</li>
            
                 </ul><ul>
                  <li>Member Benefits</li>
                  <li>New Arrivals</li>
                  <li>Bestsellers</li>
                  <li>Shop All Sale</li>
                 </ul>
               </div>
            </div> : null
            }
            </li>
            
            <li class="womcat" id="wc" onMouseEnter={handleshowmegamemenuw} onMouseLeave={handleshowmegamemenuw}><b><Link style={{textDecoration: 'none' ,  color : 'black'}} to='/Women'>Women</Link></b>
            {showmegamemenuw ?
              <div class="WomenCats" id="WC">
                <div class="WomenCatsMenu">
                  <ul>
                   <li>Featured</li>
                   <li>New Arrivals</li>
                   <li>Bestsellers</li>
                   <li>Shop All Sale</li>
                  </ul>
                  <ul>
                   <li>Shoes</li>
                   <li><img src={womenimg1} /></li>
                   <li>Bestsellers</li>
                   <li>Choose Your Shoes</li>
                   <li>Exclusives</li>
                   <li>Trending</li>
                  </ul><ul>
                   <li>Clothing</li>
                   <li><img src={womenimg2} /></li>
                   <li>Bestsellers</li>
                   <li>Be At Your Best Shoes</li>
                  </ul><ul>
                   <li>Shop by Sport</li>
                   <li><img src={womenimg3} /></li>
                   <li>Bestsellers</li>
                   <li>Shop All Sale</li>
                   <li>Create Your Sneaks</li>
                   <li>Favourites</li>
                  </ul><ul>
                   <li>Member Benefits</li>
                   <li>New Arrivals</li>
                   <li>Bestsellers</li>
                   <li>Shop All Sale</li>
                   <li>Shop All Sale</li>
                   <li>Shop All Sale</li>
                  </ul>
                </div>
             </div> : null
            }
            </li>
          </ul>
         </div>
         <div class="item-menu item-menu-logo">
          
            <Link className='logo-menu' style={{textDecoration: 'none'}} to='/' ><img class="logo-menu-img" src={logomenu} alt='logomenu' /></Link>
          
         </div>
         <div class="item-menu">
            <ul class="item-menu-data">
            <li class="kidcat" id="kc" onMouseEnter={handleshowmegamemenuk} onMouseLeave={handleshowmegamemenuk}><b><Link style={{textDecoration: 'none' ,  color : 'black'}} to='/Kids'>Kids</Link></b>
            {showmegamemenuk ?
              <div class="KidCats" id="KC">
                <div class="KidCatsMenu">
                  <ul>
                   <li>Featured</li>
                   <li>New Arrivals</li>
                   <li>Bestsellers</li>
                   <li>Shop All Sale</li>
                  </ul>
                  <ul>
                   <li>Shoes</li>
                   <li><img src={warner} /></li>
                   <li>Bestsellers</li>
                   <li>Shop All Sale</li>
                   <li>Season Specials</li>
                   <li>Spotlights</li>
                  </ul><ul>
                   <li>Clothing</li>
                   <li><img src={sws} /></li>
                   <li>Bestsellers</li>
                   <li>Shop All Sale</li>
                   <li>Categories</li>
                   <li>Shirts Sale</li>
                  </ul><ul>
                   <li>Shop by Sport</li>
                   <li><img src={marvs} /></li>
                   <li>Bestsellers</li>
                   <li>Shop All Sale</li>
                   <li>Old School Nikes</li>
                   <li>Explore Them All</li>
                  </ul><ul>
                   <li>Member Benefits</li>
                   <li><img src={barcaimg} /></li>
                   <li>Bestsellers</li>
                   <li>Jerseys</li>
                  </ul>
                </div>
             </div> :null
             }
            </li>
            <li class="salecat" id="sc" onMouseEnter={handleshowmegamemenus} onMouseLeave={handleshowmegamemenus}><b><Link style={{textDecoration: 'none' ,  color : 'black'}} to='/Shop'>Shop</Link></b>
            </li>
           </ul>
         </div>
         </div>
       </div>
       <div className='navbar-elements right'>
      <Searchbar />
       <Link to='/Wishlist' style={{textDecoration: 'none' ,  color : 'black'}} className='cartsbutt' >
       <div className='wishbutton'>
         <img src={wishicon} />
       </div>
       </Link>
       <Link to='/Cart' style={{textDecoration: 'none' ,  color : 'black'}} className='cartsbutt' >
       <div className='cartbutton'>
        
        <img src={carticon} />
        <div className='cartnumber'>
           <p>{gettotalelements()}</p>
        </div>
       </div>
       </Link>
       </div>
      </div>
   
    
    </nav>
     </div>
     

     </div>
     </div>
     <div className="slideshow-container-quote">
      {slides.map((quote, index) => (
      
        <div key={index} className="Slidequote">
          <p key={index} className='Slides scroll' style={{
            display: currentSlide === index ? "block" : "none",
          }}>{quote}</p>
        </div>
      ))}
    </div>


     </div>
   )  
}
 
export default Navbar;
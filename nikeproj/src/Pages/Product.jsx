import React , {useContext, useRef, useState} from 'react';

import './productcss.css'
import testimg from '../Components/Assets/airjordan1/WMNS+AIR+JORDAN+1+MID.jpeg'
import products from '../Components/Assets/allshoes';
import reviews from '../Components/Assets/allreviews';
import { ShopContext } from '../Context/ShopContext';
import { WishlistContext } from '../Context/WishlistContext';
import { Link } from 'react-router-dom';
import tickimg from '../Components/Assets/Eo_circle_green_checkmark.svg.png'
import wishimg from '../Components/Assets/360_F_743466913_L1UF39XRnPbNDB2z5Pt7rh2DY12ZxNJq.jpg'

const Product = () => {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  const addcartfunc = (Id) =>{
    toggleModal();
    addToCart(Id);
  }



  const [wishmodal, setwishModal] = useState(false);

  const togglesishModal = () => {
    setwishModal(!wishmodal);
  };

  if(wishmodal) {
    document.body.classList.add('active-wishmodal')
  } else {
    document.body.classList.remove('active-wishmodal')
  }
  const addwishfunc = (Id) =>{
    togglesishModal();
    addToWish(Id)
  }





     let count=0;
     let counttotalrevs = 0;
     let countsum = 0;

     const refreshPage = () => {
      setTimeout(() => {
        window.scrollTo(0, 0);
        window.location.reload(false);
      },500);
      console.log("Page")
   }


    
    console.log("PRODS : " + reviews)
    const { gettotalelements , gettotalamount , cartItems, addToCart, removeFromCart } = useContext(ShopContext)
    const {
      wishItems,
      addToWish,
      removeFromWish,
      getTotalAmount,
      getTotalElements,
    } = useContext(WishlistContext)


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
        const Params = window.location.href;
        let arr = Params.split('/')
        console.log(arr[arr.length-1])
        let finalupdateprods = products.filter((fp)=>{
            return JSON.stringify(fp.id) === arr[arr.length-1] ? true :  false;
        })
        console.log(finalupdateprods[0].imageurl)
        products.map((item) => {
            if(item.Type === finalupdateprods[0].Type){
               count+=1;
            }
        })
        reviews.map((item) =>{
          if(Number(item.id) === finalupdateprods[0].id){
             counttotalrevs+=1;
             countsum+=item.rating
          }
      })
        const [currentimage , setcurrentimage] = useState(finalupdateprods[0].imageurl[0])
        const funcs = (val) =>{
            setcurrentimage(val)
        }

        const [menu , setmenu] = useState("desc");
        const [showdesc , setshowdesc] = useState(true);
        const [showreviews , setshowreviews] = useState(false);
        const [showsupport , setshowsupport] = useState(false);
        const handledesc = (prop) =>{
            setmenu(prop)
            setshowdesc(true)
            setshowreviews(false);
            setshowsupport(false)
        }
        const handlerev = (prop) =>{
          setmenu(prop)
          setshowreviews(true)
          setshowdesc(false)
          setshowsupport(false);
        }
         const handlesupp = (prop) =>{
            setmenu(prop)
           setshowsupport(true)
           setshowdesc(false);
           setshowreviews(false)
        }

        return (
        <div class="productcontainer">
        <div class="productcontainer-inside">
        <div class="productcontainer-info left">
        <div class="productcontainer-info-prdt-imags">
        <div class="productcontainer-info-prdt-imag left">
        {finalupdateprods[0].imageurl.map((imgs) => {
          return(
               <img src={imgs}  onClick={() => funcs(imgs)} style={{cursor : 'pointer'}}/>
               )
        })}
        </div>
        <div class="productcontainer-info-prdt-imag right">
        <img src={currentimage} />
        </div>
        </div>
        <div class="data-product">
        <div class="information-product">
        <div class="information-product-data">
            <h3 onClick={() => handledesc("desc")} style={{cursor : 'pointer'}}>Description{menu==="desc" ? <hr /> : <></>}</h3>
        </div>
        <div class="information-product-data">
            <h3 onClick={() => handlerev("revs")} style={{cursor : 'pointer'}}>Reviews{menu==="revs" ? <hr /> : <></>}</h3>
        </div>
        <div class="information-product-data">
            <h3 onClick={() => handlesupp("supp")} style={{cursor : 'pointer'}}>Support{menu==="supp" ? <hr/> : <></>}</h3>
        </div>
        </div>
        
        {showdesc ? 
        <div class="descs">
         <p>{finalupdateprods[0].Description}</p>
        </div> : null
        }
        {showreviews ? 
        <div class="descs">
        {reviews.map((revs) => { 
         return (Number(revs.id) === finalupdateprods[0].id) ? (
         <div key={revs.id}> {/* Ensure each child has a unique key */}
          <h3>{"⭐".repeat(revs.rating)}</h3>
          <p>{revs.text}</p>
          <h4>{revs.created}</h4>
         </div>
        ) : null;
        })}

        </div> : null
        }
        
        {showsupport ? 
        <div class="descs">
         <p>Support Aveek Bhattacharyya</p>
        </div> : null
        }

        </div>
         
        </div>
        <div class="productcontainer-info right">
            <div class="productcontainer-info-intro">
            <h2>{finalupdateprods[0].Name}</h2>
            <h3>{"⭐".repeat(Math.ceil(countsum/counttotalrevs))} {counttotalrevs} Reviews</h3>
            </div>
            <div class="productcontainer-info-price">
                <h3>Rs {finalupdateprods[0].Price}</h3>
                {finalupdateprods[0].Sale  ? (  <h3>🏷️ Save 40% Right Now</h3>) : null}
            </div>
            <div class="productcontainer-info-features">
                <ul class="features">
                    <li>Features : </li>
                    <li>Made With Full Cotton </li>
                    <li>Regular and Sports </li>
                    <li>Quality control by JC </li>
                </ul>
            </div>


            <div class="productcontainer-info-cartswish">
               <button class="addtocartproduct" onClick={() => addcartfunc(finalupdateprods[0].id)}>Add To Cart</button>
               {wishItems[finalupdateprods[0].id]===0 ? 
                 <button class="addtowishproduct" onClick={() => addwishfunc(finalupdateprods[0].id)}></button> : 
                 <button class="removewishproduct" onClick={() => removeFromWish(finalupdateprods[0].id)}></button> 
                }
            </div>

            <div class="productcontainer-info-adds">
                <h4>🌎 Free Shipping Worldwide</h4>
                <h4>💳 100% Secured Shipping</h4>
                <h4>👤 Made By Professionals</h4>
             </div>


        </div>
       </div>
       {(count!==1) ? (
        <>
       <div class="shows-info">
        <div class="shows-info-data left">
          <h2>You Might Also Like</h2>
        </div>
        <div class="shows-info-data right">
            <button type="button" id="Btn1" onClick={scrollLeft}>⬅</button>
            <button type="button" id="Btn2" onClick={scrollRight}>➡</button>
          </div>
        </div>
        <div class="shows">
        <div id="contents" ref={scrollableDivRef}>
        {products.map((item) => 
        ((item.Type === finalupdateprods[0].Type && item.id != finalupdateprods[0].id  ) ? (
        
        <div class="element">
        <Link to={`/Product/${item.id}`} onClick={refreshPage}>
        <img id="imgs" src={item.imageurl[0]} />
        </Link>
        <div class="contents-details">
            <p><b>{item.Name}</b></p>
        </div>
        </div>
        ) : null
        ))}
        </div>
       </div>
       </>
      ): null}
  
     {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <img src={tickimg} />
            <div className='modal-data'>
            <h2>Item added to your cart</h2>
            <h3>{gettotalelements()} Items in the Cart (₹ {gettotalamount()})</h3>
            <button id='contshop' onClick={toggleModal}>Continue Shopping</button>
            <Link style={{textDecoration: 'none' ,  color : 'blue'}} to='/Cart' onClick={refreshPage}><button id='cartpage'>Go To Cart</button></Link>
            <h4>Buy for More than 5000 and Get 5% discount</h4>
            </div>
          </div>
        </div>
     )}


     {wishmodal && (
        <div className="wishmodal">
          <div onClick={togglesishModal} className="overlay"></div>
          <div className="wishmodal-content">
            <img src={wishimg} />
            <div className='wishmodal-data'>
            <h2>Item added to your Wishlist</h2>
            <button id='contshop' onClick={togglesishModal}>Continue Shopping</button>
            <Link style={{textDecoration: 'none' ,  color : 'blue'}} to='/Wishlist' onClick={refreshPage}><button id='cartpage'>Go To Wishlist</button></Link>
            </div>
          </div>
        </div>
     )}
  
  </div>
        );
    
}
 
export default Product;
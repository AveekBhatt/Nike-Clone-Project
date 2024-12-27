import React, { PureComponent, useContext } from 'react';
import carticon from '../Components/Assets/shopping-bag(1).png'
import crossicon from '../Components/Assets/cross.png'
import shoeimg from '../Components/Assets/airjordan1/WMNS+AIR+JORDAN+1+MID.jpeg'
import './wishlistcss.css'
import { WishlistContext } from '../Context/WishlistContext';
import { ShopContext } from '../Context/ShopContext';
import emptywishdog from '../Components/Assets/Gemini_Generated_Image_n3jwtdn3jwtdn3jw.jpeg'
import { Link } from 'react-router-dom';
const Wishlist = () => {

    const refreshPage = () => {
        setTimeout(() => {
          window.scrollTo(0, 0);
          window.location.reload(false);
        },500);
        console.log("Page")
     }
   const {
    all_shoes,
    wishItems,
    addToWish,
    removeFromWish,
    getTotalAmount,
    getTotalElements,
  } = useContext(WishlistContext)

    const {gettotalelements , gettotalamount  , cartItems , addToCart , removeFromCart} = useContext(ShopContext);
    const handlecartwish = (itemId) =>{
       addToCart(itemId);
       removeFromWish(itemId);
    }
    let val = getTotalElements();
    return ( 
        <div class="container-wishes">
        <div class="container-wishes-intro">
            <h1>MY WISHLIST</h1>
        </div>
        {val!==0 ?(
        <div class="conatiner-wish-data">
            <div class="conatiner-wish-data-element">
                <div class="el-product left">
                <h3>Product</h3>
                </div>
                <div class="el-product">
                    <h3>Product Name</h3>
                </div>
                <div class="el-product">
                <h3>Unit Price</h3>
                </div>
                <div class="el-product">
                <h3>Stock Status</h3>
                </div>
            </div>
            {all_shoes.map((e) =>{
                        
                        if(wishItems[e.id] > 0){
                        return(
                            <div class="conatiner-wish-data-element">
                            <div class="el-product left">
                            <Link to={`/Product/${e.id}`} onClick={refreshPage}><img src={e.imageurl[0]} />  </Link>
                            </div>
                            <div class="el-product">
                                <h3>{e.Name}</h3>
                            </div>
                            <div class="el-product">      
                            <h3>₹ {e.Price}</h3>
                            </div>
                            <div class="el-product">      
                            <h3>In Stock</h3>
                            </div>
                            <div class="el-product">      
                               <img class="addcart" src={carticon} onClick={() => handlecartwish(e.id)} />
                            </div>
                            <div class="el-product" id='crossproduct'>      
                               <img class="addcart" src={crossicon} onClick={() => removeFromWish(e.id)}/>
                            </div>
                            </div>
                        )
                    }
                })}
        </div>
         ): <div className='empty-wish'>
             <img src={emptywishdog} />
            </div>}
     </div>
     )
    
}
 
export default Wishlist;
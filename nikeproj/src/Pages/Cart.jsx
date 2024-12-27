import React, { useContext } from 'react';
import './cartcss.css'
import imgtest from '../Components/Assets/airjordan1/WMNS+AIR+JORDAN+1+MID.jpeg'
import { ShopContext } from '../Context/ShopContext';
import {loadStripe} from '@stripe/stripe-js';
import products from '../Components/Assets/allshoes';
import emptydog from '../Components/Assets/dogempty.png'
import { Link } from 'react-router-dom';
const Cart = () => {

    const {gettotalelements , gettotalamount , all_shoes , cartItems , addToCart , removeFromCart} = useContext(ShopContext);
    let total = gettotalelements();
    console.log("TOTAL " + total)
    const handleCheckout = async () => {
        let cart_items = []
        for(let item in cartItems){
            if(cartItems[item]>0){
               let iteminfo = all_shoes.find((product) => (product.id) === Number(item))
               cart_items.push(JSON.stringify(iteminfo))
            }
          }
          console.log("CART : " +cart_items)
        const stripe = await loadStripe('pk_test_51QUgw0SJPzyr7KrCh6cnyTearM3GoMPXb3tcCMjOxMGG7v3gSVqxVPo1xJoCagh7JGojvHYPk3XGVMmFcPJnSlzU0075b4MuBC');
        console.log("HELLO")
        const body = {
            products : cart_items , 
            quantity :  cartItems
         }
        const headers = {
            "Content-Type" : "application/json"
        }
        let response = await fetch("http://localhost:5000/api/create-checkout-session" , {
            method : "POST",
            headers : headers ,
            body : JSON.stringify(body)
        })
        console.log("RES " + response)
        const session = await response.json();
        const result = stripe.redirectToCheckout({
            sessionId : session.id
        })
        if((await result).error){
            console.log((await result).error)
        }
      };
    
      const refreshPage = () => {
        setTimeout(() => {
          window.scrollTo(0, 0);
          window.location.reload(false);
        },500);
        console.log("Page")
     }
    console.log(cartItems)
        return (
            <div class="container-cart">
            <div class="container-header">
                <h1>SHOPPING CART</h1>
            </div>
            <p>{gettotalelements}</p>
            {(total>0) ? (
            <div class="container-main">
               <div class="inside-container-main">
              <div class="container-main-cont left">
                {all_shoes.map((e) =>{
                        
                        if(cartItems[e.id] > 0){
                        return(
                          <li class="products-data">
                          <div class="products-data-info left">
                          <div class="data">
                          <h2>{e.Name}</h2>
                          <h3>Rs {e.Price}</h3>
                          <h4>Size</h4>
                          <h4>Color | {e.colour}</h4>
                          <h3>Total Price | ₹ {e.Price * cartItems[e.id]}</h3>
                          <button class="decincre" onClick={() => removeFromCart(e.id)} >-</button>  {cartItems[e.id]}  <button class="decincre" onClick={() => addToCart(e.id)}>+</button>
                          </div>
                          </div>
                          <div class="products-data-info right">
                          <Link to={`/Product/${e.id}`} onClick={refreshPage}><img src={e.imageurl[0]} /></Link>
                          </div>
                          </li>
                        )
                    }
                })}
              </div>
        
              <div class="container-main-cont right">
                <div class="inside-right">
                <div class="sumtotal">
                    <div class="sumtotal-beg">
                    <h2>Order Summary</h2>
                   </div>
                    
                    <div class="information-total">
                        <div class="information-total-cred">
                            <div class="information-total-cred-info">
                                <h3>Subtotal</h3>
                                <h3>Shipping</h3>
                            </div>
                        </div>
                        <div class="information-total-cred">
                            <div class="information-total-cred-data">
                                <h3>₹ {gettotalamount()}</h3>
                                <h3>₹ 0</h3>
                            </div>
                        </div>
                    </div>
                    <div class="total-data">
                     <div class="total-data-info left">
                        <h3>Total</h3>
                     </div>
                     <div class="total-data-info right">
                        <h3>₹ {gettotalamount()} </h3>
                     </div>
                    </div>
                    <button class="checkout" onClick={handleCheckout}>Check Out</button>
                </div>
            </div>
            </div>
            </div> 
             </div> ) : (
                <div className='empty-cart'>
                    <img src={emptydog} />
                </div>
             )
             }
            </div>
        );
    
}
 
export default Cart;
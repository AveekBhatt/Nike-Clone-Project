import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
const Success = () => {
    const {gettotalelements , gettotalamount , all_shoes , cartItems , addToCart , removeFromCart} = useContext(ShopContext);
    for(let item in cartItems){
        cartItems[item]=0;
    }
    return (
    <div className='success-payment'>
     <h1>SUCCESS</h1>
    </div>
   );
    
}
 
export default Success;
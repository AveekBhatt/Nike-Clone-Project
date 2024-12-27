import React ,{useState , useEffect, act, useContext , useRef} from 'react';
import imgex from '../Assets/airjordan1/WMNS+AIR+JORDAN+1+MID.jpeg'
import './catitems.css'
import filters from '../Assets/filters'
import saleimg from '../Assets/ezgif-1-71ee6d2109.gif';
import wishes1 from '../Assets/wishlist.png'
import cartimg from '../Assets/shopping-bag(1).png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { WishlistContext } from '../../Context/WishlistContext';
import tickimg from '../Assets/Eo_circle_green_checkmark.svg.png'
import wishimg from '../Assets/360_F_743466913_L1UF39XRnPbNDB2z5Pt7rh2DY12ZxNJq.jpg'


const Categoryitemspage = ({shoesdata , userid}) => { 
  

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



  const refreshPage = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      window.location.reload(false);
    },500);
    console.log("Page")
 }

  const { cartItems , gettotalelements , gettotalamount ,  addToCart } = useContext(ShopContext)
  const {addToWish ,  wishItems ,  removeFromWish } = useContext(WishlistContext)
  window.scrollTo({top: 150 , behavior : "smooth"})
  const [filterproducts , setfilterproducts] = useState(shoesdata);
  console.log("INSIDE INSIDE PAGE");
  console.log(filterproducts)
  useEffect(() => {
  setfilterproducts(shoesdata); 
}, [shoesdata]);


console.log(wishItems)
console.log(cartItems)
  let [activefilters , setactivefilters] = useState([
    {type : "Category" , options : []},
    {type : "Price" , options : []},
    {type : "Sale" , options : []},
    {type : "sizes" , options : []},
    {type : "Type" , options : []},
    {type : "colour" , options : []},
    {type : "Game" , options : []}
  ]);

   
  const onUpdatefilter = () => {
    console.log("changed")
    let updatedfilter = shoesdata.filter((fp) =>{
      let options = activefilters.find((af) => af.type === "Category").options;
      if(options.length===0){
        return true;
      }
      let val = "";
      val+=fp.Category;
      return options.includes(val);
    }).filter((fp)=>{
       let options = activefilters.find((af)=> af.type==="Type").options;
       if(options.length===0){
        return true;
       }
       let val = "";
       val+=fp.Type;
       return options.includes(val);
    }).filter((fp) =>{
      let options = activefilters.find((af)=> af.type==="colour").options;
      if(options.length===0){
       return true;
      }
      let val = "";
      val+=fp.colour;
      return options.includes(val);
    }).filter((fp)=>{
      let options = activefilters.find((af)=> af.type === "sizes").options;
      if(options.length===0){
        return true;
      }
      let vals = []
      options.map((item)=>{
         if(fp.sizes.includes(Number(item))){
            vals.push(Number(item));
         }
      })

      return vals.length!==0 ? true : false;
    }).filter((fp)=>{
      let options = activefilters.find((af)=> af.type === "Price").options;
      if(options.length===0){
        return true;
      }
      let vals=[];
      options.map((item) =>{
         if(item==="Range1"){
            if(fp.Price<2500){
              vals.push(fp.Price);
            }
         }
         if(item==="Range2"){
          if(fp.Price>=2501 && fp.Price < 7500){
            vals.push(fp.Price);
          }
         }
         if(item==="Range3"){
          if(fp.Price>=7501 && fp.Price<=12999){
            vals.push(fp.Price);
          }
         }
         if(item==="Range4"){
          if(fp.Price>=13000){
            vals.push(fp.Price);
          }
         }
      }).filter((fp)=>{
        let options = activefilters.find((af)=> af.type === "sizes").options;
        if(options.length===0){
          return true;
        }
        let vals = []
        options.map((item)=>{
           if(fp.sizes.includes(Number(item))){
              vals.push(Number(item));
           }
        })
  
        return vals.length!==0 ? true : false;
      })

      return vals.length!==0 ? true : false;
    }).filter((fp)=>{
      let options = activefilters.find((af)=> af.type === "Sale").options;
      if(options.length===0){
        return true;
      }
      if(options[0]==='Sale' && fp.Sale === true){
        return true;
      }
      return false
    })

    setfilterproducts(updatedfilter);
    console.log(filterproducts);
  } 
  const onchangefilter = (type , value , activeFilters) =>{
     console.log(type + " " + value)
     if(isExisted(value , activeFilters)){
       removeoptions(value , type , activeFilters);
     }else{
        addoptions(value,type,activeFilters)
     }
     onUpdatefilter();
     window.scrollTo({top: 0 , behavior : "smooth"})
  }

  const isExisted = (value , activeFilters) =>{
    console.log(activeFilters)
    return activeFilters.includes(value);
  }
  const addoptions = (value , type , activeFilters) =>{
    activeFilters.push(value);
    updatedfilts(type , activeFilters);
  }
  const removeoptions = (value , type , activeFilters) =>{
    let index = activeFilters.indexOf(value);
    activeFilters.splice(index,1);
    updatedfilts(type,activeFilters);
  }

  const updatedfilts = (type , activeFilters) =>{
    let updatedfilters = activefilters.map((af) => {
      if(af.type === type){
        af.options = activeFilters
      }
      return af;
    });
    console.log(updatedfilters)
    setactivefilters(updatedfilters)
  }
  const buttonRef = useRef(null);
  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  const [buttons, setButtons] = useState([]);
  const handleClick = (id , value ,activeFilters) => {
    if(buttons.includes(value)){
      let i = buttons.indexOf(value)
      buttons.splice(i,1);  
    }
    else{
      buttons.push(value)
      console.log("PUSH " + buttons)
    }
    onchangefilter(id, value, activeFilters)
  };
  return ( 
    <div className='categoriespage'>
    <div className='categories-intro'>
    <div className='categories-inside'>
    <h1>Select Your Categories</h1>
    <h3>Checkout the latest and prestigious releases of shoes for men , women and for the kids</h3>
    </div>
    </div>
    <div class="container">
    <div className='sides'>
    <div class="sidebar">
    <div class="Categories-list">
      <ul>
        <li><Link style={{textDecoration: 'none' ,  color : 'black'}} to='/Shop' onClick={refreshPage}>LifeStyle</Link></li>
        <li><Link style={{textDecoration: 'none' ,  color : 'black'}} to='/Shop/Football/Shoes' onClick={refreshPage}>Football</Link></li>
        <li><Link style={{textDecoration: 'none' ,  color : 'black'}} to='/Shop/Basketball/Shoes' onClick={refreshPage}>Basketball</Link></li>
        <li><Link style={{textDecoration: 'none' ,  color : 'black'}} to='/Shop/Running/Shoes' onClick={refreshPage}>Running</Link></li>
        <li><Link style={{textDecoration: 'none' ,  color : 'black'}} to='/Shop/Gym/Shoes' onClick={refreshPage}>Training & Gym</Link></li>
        <li><Link style={{textDecoration: 'none' ,  color : 'black'}} to='/Shop/Skateboarding/Shoes' onClick={refreshPage} >Skateboarding</Link></li>
        <li><Link style={{textDecoration: 'none' ,  color : 'black'}} to='/Shop/Golf/Shoes' onClick={refreshPage}>Golf</Link></li>
        <li><Link style={{textDecoration: 'none' ,  color : 'black'}} to='/Shop/Athletics/Shoes' onClick={refreshPage}>Athletics</Link></li>
        <li><Link style={{textDecoration: 'none' ,  color : 'black'}} to='/Shop/Tennis/Shoes' onClick={refreshPage}>Tennis</Link></li>
        <li><Link style={{textDecoration: 'none' ,  color : 'black'}} to='/Shop/Yoga/Shoes' onClick={refreshPage}>Yoga</Link></li>
      </ul>
    </div>
    {(userid === 'Men' || userid === 'Women' || userid === 'Kids') ? (
  filters.slice(1, 6).map((item) => (
    <li className="dropdown" key={item.id}>
      <span>{item.name}</span>
      <ul className={`dropdown-${item.id}`} id={`${item.id}-dropdown`}>
      {item.id !== 'sizes' ? (
  item.options.map((ops) => (
    <li key={ops.Id}>
      <input
        type="checkbox"
        id={`${ops.Id}`}
        value={ops.value}
        onChange={() => onchangefilter(item.id, ops.value, item.activeFilters)}
      />
      <label htmlFor={`${ops.Id}`}>{ops.label}</label>
    </li>
  ))
) : (
  item.options.map((ops) => (
    <li key={ops.Id}>
       <button
        type="button"
        id={`${ops.Id}`}
        value={ops.value}
        style={{
          border : buttons.includes(ops.value) ? "3px solid" : "1px solid"
        }}
        className={`${ops.value}`}
        onClick={() => handleClick(item.id, ops.value, item.activeFilters)}
      >
        {ops.value}
      </button>
      <label htmlFor={`${ops.Id}`}>{ops.label}</label>
    </li>
  ))
)}

      </ul>
    </li>
  ))
) : (
  filters.slice(0, 6).map((item) => (
    <li className="dropdown" key={item.id}>
      <span>{item.name}</span>
      <ul className={`dropdown-${item.id}`} id={`${item.id}-dropdown`}>
      {item.id !== 'sizes' ? (
  item.options.map((ops) => (
    <li key={ops.Id}>
      <input
        type="checkbox"
        id={`${ops.Id}`}
        value={ops.value}
        onChange={() => onchangefilter(item.id, ops.value, item.activeFilters)}
      />
      <label htmlFor={`${ops.Id}`}>{ops.label}</label>
    </li>
  ))
) : (
  item.options.map((ops) => (
    <li key={ops.Id}>
      <button
        type="button"
        id={`${ops.Id}`}
        value={ops.value}
        style={{
          border : buttons.includes(ops.value) ? "3px solid" : "1px solid"
        }}
        className={`${ops.value}`}
        onClick={() => handleClick(item.id, ops.value, item.activeFilters)}
      >
        {ops.value}
      </button>
      <label htmlFor={`${ops.Id}`}>{ops.label}</label>
    </li>
  ))
)}

      </ul>
    </li>
  ))
)}


    </div>
    </div>
    
    <div class="content">
    
     {filterproducts.length === 0 && ( 
       <div class="nodata-text">
         <h2>Sorry No Information in this page</h2>
       </div>
       )}
      <div class="cats">
      {filterproducts.map((item) => 
       <div class="cats-imag">
        <Link to={`/Product/${item.id}`} style={{textDecoration : 'none' , color : 'black'}} onClick={refreshPage}>
        <div className='cats-imag-show'>
        <img src={item.imageurl[0]} />
        {item.Sale===true && (
         <div className='sales-info'>
          <img src={saleimg} />
          </div>
        )}
        </div>
        </Link>
        <div class="cats-img-details">
          <div className='subcatsdata'>
          <div className='product-info left'>
          <p><h3>{item.Name}</h3></p>
          <p><h3>{item.Category}</h3></p>
          <p><h3>₹{item.Price}</h3></p>
          </div>
          <div className='product-info right'>
            {wishItems[item.id] === 0  ? (
            <button className='addwish' onClick={() => addwishfunc(item.id)}></button>) : 
            (<button className='removewish' onClick={() => removeFromWish(item.id)}></button>) 

           } 
            <button className='addcart' onClick={() => addcartfunc(item.id)}></button>
          </div>
          </div>
        </div>
       </div>
       )}
    </div>
    
    </div>
    </div>
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
 
export default Categoryitemspage;
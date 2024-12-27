import React, { useState , useEffect , useRef} from 'react';
import './searchbacss.css'
import testimg from '../Assets/airforce180/NIKE+AIR+180.webp'
import products from '../Assets/allshoes';
import { Link } from 'react-router-dom';
import searchimg from '../Assets/running.png'
const Searchbar = () => {

    const [isTyping, setIsTyping] = useState(false);
     useEffect(() =>{
        document.addEventListener("click" , handleclickOutside, true)
      } , [])
    
      const refOne = useRef(null)
      const handleclickOutside = (e) =>{
          if(!refOne.current.contains(e.target)){
            setIsTyping(false)
          }
          else{
            setIsTyping(true)
          }
      }
    const refreshPage = () => {
        setTimeout(() => {
          window.scrollTo(0, 0);
          window.location.reload(false);
        },500);
        console.log("Page")
     }
    const [searchInput, setSearchInput] = useState("");
    let filteredProducts = products.filter((product) =>
        product.Name.toLowerCase().includes(searchInput.toLowerCase())
    );
    console.log(filteredProducts[0])
   return ( 
         <section className={`containsearch ${isTyping ? "expanded" : ""}`} ref={refOne}>
            <form>
                <i className='fas fa-search'></i>
                <img className='search-image' src={searchimg}/>
                <input type='text' id='search-item' placeholder='Search Products'
                 value={searchInput}
                 onChange={(e) =>  {
                    setSearchInput(e.target.value)
                    setIsTyping(e.target.value.length > 0); 
                }}
                ></input>
            </form>
            {isTyping && (
            <div className='product-list'>
                {filteredProducts.map((item) =>{
                 return (
                 <Link to={`/Product/${item.id}`} style={{textDecoration: 'none' ,  color : 'black'}} onClick={refreshPage}>
                 <div className='prod'>
                    <img src={item.imageurl[0]}/>
                    <div className='p-details'>
                        <h2>{item.Name}</h2>
                        <h3>₹ {item.Price}</h3>
                    </div>
                </div>
                </Link>
                )
                })}
               

            </div>
            )}
         </section>
       
    )
    
}
 
export default Searchbar;
import React, { PureComponent } from 'react';
import { useParams } from 'react-router-dom';
import Categoryitemspage from '../Components/categoryitems/Categoryitemspage';
import products from '../Components/Assets/allshoes'
import './ShopCatCss.css';
const Categoryitemsgame = ({props , userId='Shoes'}) => {
    let updateprods = products.filter((fp)=>{
        return fp.Category === props ? true : false;
    })
    const Params = useParams();
    userId = Params.Type;
    console.log("ID2 " + userId)
    let finalupdateprods = updateprods.filter((fp)=>{
        return fp.Type === userId ? true : (userId==='Shoes' || userId===undefined) ? true : false;
    })
  
    return (
        <div>
        <Categoryitemspage shoesdata={finalupdateprods}/>
        </div>
    );
    
}

export default Categoryitemsgame;
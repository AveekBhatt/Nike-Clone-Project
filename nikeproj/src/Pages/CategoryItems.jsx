import React, { PureComponent, useState  } from 'react';
import {useParams} from 'react-router-dom'
import Categoryitemspage from '../Components/categoryitems/Categoryitemspage';
import products from '../Components/Assets/allshoes'
import Pagination from '../Components/Pagination/pagination';
import filters from '../Components/Assets/filters'
const Categoryitems = ({props = "LifeStyle" , userId = 'Shoes'}) => {
    let updateprods = products.filter((fp)=>{
        return fp.Game === props ? true : (props==='LifeStyle') ? true : false;
    })
    console.log(updateprods)
    const Params = useParams();
    userId = Params.Category;
    let finalupdateprods = updateprods.filter((fp)=>{
        return fp.Category === userId ? true : (userId==='Shoes' || userId===undefined) ? true : false;
    })
    return ( 
        <div>  
            <Categoryitemspage shoesdata={finalupdateprods} userid={userId}/>
        </div>
    );
    
}
 
export default Categoryitems;
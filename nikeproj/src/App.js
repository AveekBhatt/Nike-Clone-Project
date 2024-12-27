import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart  from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import menbanner from './Components/Assets/bannermen.jpg'
import womenbanner from './Components/Assets/FEMALE.jpg'
import kidsbanner from './Components/Assets/a0f0032fbb86ab2fb7a1d3861a5a0a6f.jpg'
import Footer from './Components/Footer/Footer';
import Categoryitems from './Pages/CategoryItems';
import Categoryitemstypes from './Pages/Categoryitemstypes';
import Success from './Pages/Success';
import Cancel from './Pages/Cancel';
import Wishlist from './Pages/Wishlist';
import Searchbar from './Components/searchbar/seachbar';
function App() {
  return (
    <div>
      <BrowserRouter>
     <Navbar />
     <Routes>
     <Route path='/' element={<Shop/>}></Route>
     <Route path='/search' element={<Searchbar/>}></Route>
     <Route path='/Men' element={<ShopCategory banner={menbanner} category='Men'/>}></Route>
     <Route path='/Women' element={<ShopCategory banner={womenbanner} category='Women'/>}></Route>
     <Route path='/Kids' element={<ShopCategory banner={kidsbanner}  category='Kids'/>}></Route>
     <Route path='/Shop' element={<Categoryitems />}></Route>
     <Route path='/Shop/Football/:Category' element={<Categoryitems props='Football' />}></Route>
     <Route path='/Shop/Basketball/:Category' element={<Categoryitems props='Basketball' />}></Route>
     <Route path='/Shop/Running/:Category' element={<Categoryitems props='Running' />}></Route>
     <Route path='/Shop/Gym/:Category' element={<Categoryitems props='Gym' />}></Route>
     <Route path='/Shop/Skateboarding/:Category' element={<Categoryitems props='Skateboarding' />}></Route>
     <Route path='/Shop/Golf/:Category' element={<Categoryitems props='Golf' />}></Route>
     <Route path='/Shop/Athletics/:Category' element={<Categoryitems props='Athletics' />}></Route>
     <Route path='/Shop/Tennis/:Category' element={<Categoryitems props='Tennis' />}></Route>
     <Route path='/Shop/Yoga/:Category' element={<Categoryitems props='Yoga' />}></Route>
     <Route path='/Shop/Types/Men/:Type' element={<Categoryitemstypes props='Men'  /> }></Route>
     <Route path='/Shop/Types/Women/:Type' element={<Categoryitemstypes props='Women'  /> }></Route>
     <Route path='/Shop/Types/Kids/:Type' element={<Categoryitemstypes props='Kids'  /> }></Route>
     <Route path='/Product' element={<Product/>}>
       <Route path=':productId' element={<Product />}></Route>
     </Route>
     <Route path='/Wishlist' element={<Wishlist /> }></Route>
     <Route path='/Cart' element={<Cart/>}></Route>
     <Route path='/Login' element={<LoginSignup/>}></Route>
     <Route path='/success' element={<Success/>}></Route>
     <Route path='/cancel' element={<Cancel/>}></Route>
     </Routes>
     <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;

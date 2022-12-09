import logo from './logo.svg';
import './App.css';
import ProductListingPage from './components/productListingPage';
import Cart from './components/cart';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { useState } from 'react';

function App() {
   
  const [checkoutData,setCheckoutData] = useState([])

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ProductListingPage setCheckoutData={setCheckoutData} />}></Route>
        <Route exact path="/cart" element={<Cart checkoutData={checkoutData} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;


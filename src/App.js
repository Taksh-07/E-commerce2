import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { ShopContectProvider } from './context/shop-context';

function App() {
  return  (
    <div className="App">
      <ShopContectProvider>
        <Router>
         <Navbar />
         <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
         </Routes>
        </Router>  
      </ShopContectProvider>
    </div>
  );
}

export default App;




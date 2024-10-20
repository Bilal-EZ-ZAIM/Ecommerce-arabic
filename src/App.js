import React from 'react';
import './App.css';
import Header from './componts/header/Header';
import Home from './pages/home/Home';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Datalist from './componts/datalist/Datalist';
import { specialOffers } from './data/special-offers';
import Footer from './componts/footer/Footer';
import { products } from './data/products';
import NewData from './componts/newDarta/NewDatalist';
function App() {
  return (
    <div className="App">
      <Router basename="/Ecommerce-arabic">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/datlist/:userId' element={<Datalist specialOffers={specialOffers}  />}/>
          <Route path='/newdarta/:userId' element={<NewData products={products} />}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}
// 
export default App;

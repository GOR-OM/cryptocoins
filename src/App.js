import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import Exchanges from './component/Exchanges';
import Coins from './component/Coins';
import CoinDetail from './component/CoinDetail';



function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/coins' element={<Coins/>}/>
      <Route path='/exchanges' element={<Exchanges/>}/>
      <Route path='/coin/:id' element={<CoinDetail/>}/>
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;

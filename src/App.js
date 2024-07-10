import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CheckoutPage from './components/CheckoutPage';
import Footer from './components/Footer';
import { ShopContextProvider } from './context/ShopContext';
import { PRODUCTS } from './products';
import './App.css';

const App = () => {
  return (
    <ShopContextProvider>
    <Router>
      <div className="app-container">
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<ProductList products={PRODUCTS} />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  </ShopContextProvider>
  );
};

export default App;

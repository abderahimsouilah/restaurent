import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
import Food from './components/Food';
import Category from './components/Category';
import CartProvider from './store/CartProvider';
function App() {
  return (
    <div>
      <CartProvider>
        <Navbar />
        <Hero />
        <HeadlineCards />
        <Food />
        <Category />
      </CartProvider>
    </div>
  );
}

export default App;

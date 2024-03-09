import Footer from '@/components/footer';
import Navbar from '@/components/navbar/navbar';
import CartPage from '@/features/cart/cartPage';
import React from 'react'


const cart = () => {
  return <div>
    <Navbar/>
    <CartPage/>
    <Footer/>
    </div>;
};

export default cart

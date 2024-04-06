import Footer from '@/components/footer';
import Navbar from '@/components/navbar/navbar';
import CartPage from '@/features/cart/cartPage';
import { Box } from '@chakra-ui/react';
import React from 'react'


const Cart = () => {
  return (
    <Box overflow={"hidden"}>
      <CartPage/>
    </Box>
  );
}
export default Cart
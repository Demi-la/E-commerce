import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from './navbar/navbar'
import Banner from './banners/banner'
import Categories from './categories/categories'
import FeaturedProduct from './featuredProduct/featuredProduct'
import Footer from './footer'

const Pages = () => {
  return (
    <Box>
      <Navbar />
      {/* <Banner/> */}
      <Box bg={"#f7fafc"}>
        <Categories/>
        <FeaturedProduct/>
      </Box>
      <Footer/>
    </Box>
  );
}

export default Pages

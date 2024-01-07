import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from './navbar/navbar'
import Banner from './banners/banner'
import Categories from './categories/categories'
import FeaturedProduct from './featuredProduct/featuredProduct'

const Pages = () => {
  return (
    <Box>
      <Navbar />
      {/* <Banner/> */}
      <Box bg={"#f7fafc"}>
        <Categories/>
        <FeaturedProduct/>
      </Box>
    </Box>
  );
}

export default Pages

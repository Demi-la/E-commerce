import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from './navbar/navbar'
import Banner from './banners/banner'
import Categories from '../features/products/categories/categories'
import FeaturedProduct from '../features/products/featuredProduct/featuredProduct'
import Footer from './footer'
import CarouselItems from './banners/carouselItems'

const Pages = () => {
  return (
    <Box>
      <Box bg={"#f7fafc"}>
        {/* <CarouselItems/> */}
        <Categories/>
        <FeaturedProduct index={0}/>
      </Box>
    </Box>
  );
}

export default Pages

import React from 'react'
// import offer1 from "../../public/img/offer-1.jpg"
// import offer2 from "../../public/img/offer-2.jpg";
import { Box, Grid, Text } from '@chakra-ui/react';
import CarouselItems from './carouselItems';

const Banner = () => {
  // const offers = [
  //   {
  //     pic: offer1,
  //     title: "SAVE 20%",
  //     text: "Special Offer",
  //   },
  //   {
  //     pic: offer2,
  //     title: "SAVE 20%",
  //     text: "Special Offer",
  //   },
  // ];
  return (
    <>
      <Box>
        {/* <Grid border={"3px solid orange"}> */}
          <Box>
            <CarouselItems />
          </Box>
          {/* <Box>
            {offers.map((item, index) => (
              <Box
                key={index}
                backgroundImage={item.pic.src}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
              >
                <Text>{item?.title}</Text>
                <Text>{item?.text}</Text>
              </Box>
            ))}
          </Box> */}
        {/* </Grid> */}
      </Box>
    </>
  );
}

export default Banner

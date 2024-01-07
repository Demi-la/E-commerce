import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react'

const FeaturedProduct = () => {
  return (
    <>
      <Box p={"3rem"}>
        <Flex
          flexDirection="row"
          alignItems="center"
          color={"#3D464D"}
          gap={"1rem"}
        >
          <Text fontSize={"2rem"} fontWeight={"700"}>
            FEATURED PRODUCTS
          </Text>
          <Box
            borderTop={"0.2px dashed #3D464D"}
            width="70%"
            mt="10px"
            mb="10px"
            fontSize={"2px"}
          ></Box>
        </Flex>
      </Box>
    </>
  );
}

export default FeaturedProduct;

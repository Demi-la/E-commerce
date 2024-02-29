"use client";
import { Box, Flex, Grid, Text, Image } from "@chakra-ui/react";
import React from "react";
import { featuredProductData, vendors } from "./data";
import { useGetProductQuery } from "../../../lib/api";

interface FeaturedProductType {
  //
}

const FeaturedProduct: React.FC<FeaturedProductType> = () => {
   const { data, error, isLoading } = useGetProductQuery("");
   console.log("data =========================", data);
   console.log("error", error);
   console.log("isLoading", isLoading);
   if (isLoading) {
     return <div>Loading...</div>;
   }

   if (error) {
     return <div>Error</div>;
   }

   if (data == null || data == undefined) {
     return <div>No data available</div>;
   }
  return (
    <>
      <Box
        p={{ base: "1rem", md: "2rem", lg: "3rem" }}
        width={"100%"}
        overflow={"hidden"}
      >
        <Flex
          flexDirection="row"
          alignItems="center"
          color={"#3D464D"}
          gap={"1rem"}
        >
          <Text
            fontSize={{ base: "1.2rem", md: "1.5rem", lg: "2rem" }}
            fontWeight={{ base: "500", md: "600", lg: "700" }}
          >
            FEATURED PRODUCTS
          </Text>
          <Box
            borderTop={"0.2px dashed #3D464D"}
            width={{ base: "35%", md: "65%", lg: "70%" }}
            mt="10px"
            mb="10px"
            fontSize={"2px"}
          ></Box>
        </Flex>
        <Grid
          gridTemplateColumns={{
            base: "1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr 1fr 1fr",
          }}
          gap={"2rem"}
          alignItems={"center"}
          justifyItems={"center"}
          mt={"2rem"}
        >
          {data.map((item: any, index: number) => (
            <Box
              key={index}
              background={"white"}
              padding={"2rem"}
              boxSizing="border-box"
              position={"relative"}
            >
              <Box height={"15rem"} mb={"1rem"}>
                <Image
                  src={item.image}
                  alt="Product image"
                  position={"relative"}
                  transition={".5s"}
                  overflow={"hidden"}
                  width={"100%"}
                  height={"13rem"}
                />
              </Box>
              <Box
                boxSizing="border-box"
                textAlign={"center"}
                height={"5rem"}
                fontWeight={500}
                // zIndex={"1"}
                // position={"absolute"}
                // display={"flex"}
                // justifyContent={"center"}
                color={"#3D464D"}
              >
                <Text mb={"0.5rem"} mt={"0.5rem"} fontSize={"0.8rem"}>
                  {item.title}
                </Text>
                <Flex justifyContent={"center"} gap={"1.5rem"} fontWeight={400}>
                  <Text>Price: ${item.price}</Text>
                  <Text
                  // color={"#6c757d"}
                  // fontSize={"1rem"}
                  // mt={"3px"}
                  // textDecoration={"line-through"}
                  >
                    Ratings: {item["rating"]["rate"]}
                  </Text>
                </Flex>
              </Box>
            </Box>
          ))}
        </Grid>

        <Flex gap={"2rem"} mt={"5rem"}>
          {vendors.map((items, index) => (
            <Box key={index}>
              <Image
                src={items.vendorsImage}
                alt="Vendors logo"
                width={"20rem"}
              />
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default FeaturedProduct;

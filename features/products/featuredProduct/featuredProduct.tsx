"use client";
import { Box, Flex, Grid, Text, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { featuredProductData, vendors } from "./data";
import { useGetProductQuery } from "../../../lib/api";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface FeaturedProductType {
  //
  productDetailsId: number;
  index: number;
  
}

const FeaturedProduct: React.FC<FeaturedProductType> = () => {

  const [isHover, setIsHover] = useState<number | null>(null);

  const router = useRouter();
  const { data, error, isLoading } = useGetProductQuery("");
  //  console.log("data =========================", data);
  //  console.log("error", error);
  //  console.log("isLoading", isLoading);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (data == null || data == undefined) {
    return <div>No data available</div>;
  }
  
 const handleMouseEnter = (index: number) => {
   setIsHover(index);
   // Additional logic if needed...
 };
  const handleMouseLeave = () => {
      setIsHover(null); 
  };


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
            <Link href={`/products/${item.id}`} key={item.id}>
              <Box
                background={"white"}
                padding={"2rem"}
                boxSizing="border-box"
                position={"relative"}
                // style={{

                //   padding: isHover ? "0" : "",
                // }}
                // height={"20rem"}
                _hover={{
                  padding: "0",
                }}
              >
                <Box
                  height={"15rem"}
                  // width={"25rem"}
                  mb={"1rem"}
                  position={"relative"}
                  overflow={"hidden"}
                  // onMouseEnter={() => handleMouseEnter(index)}
                  // onMouseLeave={handleMouseLeave}
                  // style={{
                  //   backgroundColor: isHover === index ? "blue" : "transparent",
                  //   color: isHover ? "white" : "black",
                  // }}
                >
                  <Box
                    height={"100%"}
                    width={"100%"}
                    // backgroundColor={"rgba(217, 215, 215, 0.66)"}
                    position={"absolute"}
                    zIndex={"99"}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      backgroundColor:
                        isHover === index
                          ? "rgba(217, 215, 215, 0.66)"
                          : "transparent",
                      color: isHover ? "white" : "black",
                    }}
                    // style={{
                    //   backgroundColor: isHover ? "blue" : "transparent",
                    //   color: isHover ? "white" : "black",
                    // }}

                    // _hover={{
                    //   transform: "scale(1.1)", // Zoom in on hover
                    //   transition: "transform 0.3s ease-in-out", // Smooth transition effect
                    // }}
                  ></Box>
                  <Image
                    src={item.image}
                    alt={item.title}
                    position={"relative"}
                    transition={".5s"}
                    overflow={"hidden"}
                    width={"100%"}
                    height={"13rem"}
                    style={{
                      transform: isHover === index ? "scale(1.1)" : "",
                      transition:
                        isHover === index ? "transform 0.3s ease-in-out" : "",
                    }}
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
                  <Flex
                    justifyContent={"center"}
                    gap={"1.5rem"}
                    fontWeight={400}
                  >
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
            </Link>
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

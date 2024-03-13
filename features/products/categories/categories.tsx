"use client";
import { Box, Flex, Grid, Text, Image } from "@chakra-ui/react";
import React from "react";
import { CategoriesData } from "./data";

const Categories = () => {
  return (
    <>
      <Box
        p={{ base: "1rem", md: "1rem", lg: "3rem" }}
        width={"100%"}
        overflow={"hidden"}
      >
        <Box>
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
              CATEGORIES
            </Text>
            <Box
              borderTop={"0.2px dashed #3D464D"}
              width={{ base: "65%", md: "80%", lg: "80%" }}
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
            gridRowGap={"2rem"}
            alignItems={"center"}
            justifyItems={"center"}
          >
            {CategoriesData.map((item, index) => (
              <Box
                key={index}
                w={{ base: "100%", md: "90%", lg: "18rem" }}
                h={"6rem"}
                paddingLeft={"1rem"}
                background={"white"}
                mt={"1rem"}
              >
                <Flex _hover={{}}>
                  <Box
                    width={"7rem"}
                    _hover={{
                      transform: "scale(1.1)", // Zoom in on hover
                      transition: "transform 0.3s ease-in-out", // Smooth transition effect
                    }}
                  >
                    <Image
                      src={item.photo}
                      alt="product image"
                      height={"80%"}
                    />
                  </Box>
                  <Box>
                    <Text
                      fontWeight={"500"}
                      color={"#3D464D"}
                      mb={"0.5rem"}
                      fontSize={"1.2rem"}
                      mt={"2rem"}
                    >
                      {item.categorie}
                    </Text>
                    <Text color={"#6C757D"}>{item.productNum}</Text>
                  </Box>
                </Flex>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Categories;

"use client";
import { Box, Flex, Grid, Text, Image } from "@chakra-ui/react";
import React,{useState} from "react";
import { CategoriesData } from "./data";

const Categories = () => {
    const [isHover, setIsHover] = useState<number | null>(null);
   const handleMouseEnter = (index: number) => {
     setIsHover(index);
   };
   const handleMouseLeave = () => {
     setIsHover(null);
   };
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
              width={{ base: "60%", md: "80%", lg: "82%" }}
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
            gridRowGap={"0.5rem"}
            alignItems={"center"}
            justifyItems={"center"}
          >
            {CategoriesData.map((item, index) => (
              <Box
                key={index}
                w={{ base: "95%", md: "90%", lg: "18rem" }}
                h={"6rem"}
                background={"white"}
                mt={"1rem"}
                position={"relative"}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Flex position={"relative"} height={"100%"}>
                  <Box width={"7rem"} overflow={"hidden"}>
                    <Image
                      src={item.photo}
                      alt="product image"
                      height={"100%"}
                      width={"7rem"}
                      style={{
                        transform: isHover === index ? "scale(1.1)" : "",
                        transition:
                          isHover === index ? "transform 0.3s ease-in-out" : "",
                      }}
                    />
                  </Box>
                  <Box
                    style={{
                      backgroundColor: isHover === index ? "#FFD333" : "white",
                      color: isHover ? "white" : "black",
                    }}
                    flex={"1"}
                    display={"flex"}
                    flexDir={"column"}
                    justifyContent={"center"}
                    gap={"0.5rem"}
                    px={"10px"}
                  >
                    <Text
                      fontWeight={"500"}
                      color={"#3D464D"}
                      fontSize={"1.2rem"}
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

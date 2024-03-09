"use client";

import React, { useState } from "react";
import { useGetProductsDetailsQuery } from "../../../lib/api";
import {
  Box,
  Flex,
  Grid,
  Image,
  Input,
  Text,
  Select,
  Button,
  Stack,
  InputGroup,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";
import { FaLock } from "react-icons/fa";
import {
  increment,
  decrement,
  incrementByAmount,
} from "@/features/productDetails/ProductDetailsSlice";
import { RootState } from "@/lib/store";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { addToCart } from "@/features/cart/cartSlice";

interface ProductDetailsType {
  params: { productDetailsId: number };
}

const ProductDetails: React.FC<ProductDetailsType> = ({
  params,
}: {
  params: { productDetailsId: number };
}) => {

     const count = useAppSelector((state) => state.counter.value);
     const dispatch = useAppDispatch();

     const [incrementAmount, setIncrementAmount] = useState();
     const addValue = Number(incrementAmount) || 0;
    //  const resetAll = () => {
    //    setIncrementAmount(0);
    //    dispatch(reset());
    //  };
    const handleAddToCart = (data: any) => {
            dispatch(addToCart(data));
    }

  const { data, error, isLoading } = useGetProductsDetailsQuery(
    params.productDetailsId
  );

  console.log("data", data);
  console.log("error", error);
  console.log("isLoading", isLoading);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("Error fetching data:", error);
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <>
      <Navbar />
      <Box width={"100%"}>
        <Box boxSizing={"border-box"} width={"80%"} margin={"auto"}>
          <Grid
            gridTemplateColumns={"30% 70%"}
            padding={"2rem"}
            gap={"3rem"}
            color={"#6c757d"}
            fontWeight={"500"}
          >
            <Box
              boxShadow={"0px 0px 5px 2px rgba(153,135,135,0.75);"}
              padding={"2rem"}
              background={"transparent"}
            >
              <Image
                src={data["image"]}
                alt={data?.title}
                position={"relative"}
                transition={".5s"}
                overflow={"hidden"}
                width={"100%"}
                height={"22rem"}
                background={"transparent"}
              />
            </Box>

            <Box>
              {" "}
              <Text fontWeight={"600"} fontSize={"2rem"} color={"black"}>
                {data?.title}
              </Text>
              <Flex gap={"2rem"} mt={"0.5rem"}>
                <Text>
                  <Text as={"span"} color={"#FFD333"}>
                    Ratings:
                  </Text>{" "}
                  {data["rating"]["rate"]}
                </Text>
                <Text display={"flex"}>
                  <FaLock
                    style={{
                      color: "#3D464D",
                      marginTop: "2px",
                      marginRight: "4px",
                    }}
                  />{" "}
                  {data["rating"]["count"]} orders{" "}
                  <Text as="span" color={"#FFD333"} marginLeft={"5px"}>
                    {" "}
                    in stock
                  </Text>
                </Text>
              </Flex>
              <Text mt={"0.5rem"}>
                <Text as={"span"} color={"#FFD333"}>
                  Price:
                </Text>{" "}
                {data?.price}
              </Text>
              <Text mt={"0.5rem"} paddingRight={"8rem"}>
                {data?.description}
              </Text>
              <Text mt={"0.5rem"}>
                <Text as={"span"} color={"#FFD333"}>
                  Category:{" "}
                </Text>{" "}
                {data?.category}
              </Text>
              <Flex gap={"4rem"} mt={"1rem"}>
                <Select placeholder="Select Size" width={"10rem"}>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </Select>
                <Stack spacing={4} width={"10rem"}>
                  <InputGroup>
                    <Button
                      borderRightRadius={"none"}
                      backgroundColor={"transparent"}
                      border={"1px solid #E2E8F0"}
                      onClick={() => dispatch(decrement())}
                    >
                      -
                    </Button>
                    <Input
                      type="text"
                      placeholder="1"
                      borderRadius={"none"}
                      value={count}
                    />

                    <Button
                      backgroundColor={"transparent"}
                      border={"1px solid #E2E8F0"}
                      borderLeftRadius={"none"}
                      onClick={() => dispatch(increment())}
                    >
                      +
                    </Button>
                  </InputGroup>
                </Stack>
              </Flex>
              <Flex gap={"2rem"} mt={"2rem"}>
                <Button backgroundColor={"#FFD333"}>BUY NOW</Button>
                <Button
                  backgroundColor={"#FFD333"}
                  onClick={() => handleAddToCart(data)}
                >
                  ADD TO CART
                </Button>
              </Flex>
            </Box>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default ProductDetails;

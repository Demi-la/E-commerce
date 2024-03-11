"use client";
import React from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import {
  addToCart,
  removeProductFromCart,
  decreaseProductQuantity,
  clearCart,
  getTotals,
} from "@/features/cart/cartSlice";
import {
  Box,
  Grid,
  Image,
  Text,
  Flex,
  Button,
  Input,
  Stack,
  InputGroup,
} from "@chakra-ui/react";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";




const CartPage = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const handleRemoveProductFromCart = (cartItem: { title: string; image: string; price: any; cartQuantity: number; id: React.Key | null | undefined; }) => {
      dispatch(removeProductFromCart(cartItem))
  };
  const handleDecreaseFromCart = (cartItem: any) =>{
    dispatch(decreaseProductQuantity(cartItem));
  };
  const handleIncreaseFromCart = (cartItem: any) => {
     dispatch(addToCart(cartItem));
   };
   const handleClearCart = () => {
     dispatch(clearCart("Cleared"));
   };
  return (
    <Box>
      <Box padding={"2rem 4rem"}>
        <Text textAlign={"center"} fontWeight={"500"} fontSize={"30px"}>
          Your Cart
        </Text>
        {cart.cartItems.length === 0 ? (
          <Box textAlign={"center"}>
            <Text mt={"2rem"}>Your cart is Currently Empty</Text>
            <Link href={"/"}  >
              <Text display={"flex"} mt={"0.5rem"} cursor={"pointer"} justifyContent={"center"}>
                <GoArrowLeft style={{ marginTop: "4px" }} />{" "}
                <Text as={"span"}>Continue shopping</Text>
              </Text>
            </Link>
          </Box>
        ) : (
          <Box>
            <Grid
              gridTemplateColumns={"3fr 1fr 1fr 1fr"}
              alignItems={"center"}
              columnGap={"0.5rem"}
              margin={"2rem 0 1rem 0"}
              fontSize={"14px"}
              fontWeight={"400"}
            >
              <Text>Product</Text>
              <Text>Price</Text>
              <Text>Quantity</Text>
              <Text>Total</Text>
            </Grid>
            <Grid
            // gridTemplateColumns={"3fr 1fr 1fr 1fr"}
            // alignItems={"center"}
            // columnGap={"0.5rem"}
            >
              {cart.cartItems?.map(
                (cartItem: {
                  title: string;
                  image: string;
                  price: any;
                  cartQuantity: number;
                  id: number;
                }) => (
                  <Grid
                    key={cartItem.id}
                    gridTemplateColumns={"3fr 1fr 1fr 1fr"}
                    alignItems={"center"}
                    columnGap={"0.5rem"}
                    borderTop={"1px solid gray"}
                    padding={"1rem 0"}
                  >
                    <Flex>
                      <Image
                        src={cartItem.image}
                        alt={cartItem.title}
                        height={"5rem"}
                        width={"5rem"}
                        mr={"1rem"}
                      />
                      <Box>
                        <Text>{cartItem.title}</Text>
                        <Button
                          mt={"0.5rem"}
                          onClick={() => handleRemoveProductFromCart(cartItem)}
                        >
                          Remove
                        </Button>
                      </Box>
                    </Flex>
                    <Box>
                      <Text>${cartItem.price}</Text>
                    </Box>
                    <Stack spacing={4} width={"10rem"}>
                      <InputGroup>
                        <Button
                          borderRightRadius={"none"}
                          backgroundColor={"transparent"}
                          border={"1px solid #E2E8F0"}
                          onClick={() => handleDecreaseFromCart(cartItem)}
                        >
                          -
                        </Button>
                        <Input
                          type="text"
                          placeholder="1"
                          borderRadius={"none"}
                          value={cartItem?.cartQuantity}
                        />

                        <Button
                          backgroundColor={"transparent"}
                          border={"1px solid #E2E8F0"}
                          borderLeftRadius={"none"}
                          onClick={() => handleIncreaseFromCart(cartItem)}
                        >
                          +
                        </Button>
                      </InputGroup>
                    </Stack>
                    <Text>${cartItem.price * cartItem.cartQuantity}</Text>
                  </Grid>
                )
              )}
            </Grid>
            <Flex
              justifyContent={"space-between"}
              borderTop={"1px solid gray"}
              paddingTop={"2rem"}
            >
              <Button onClick={() => handleClearCart()}>Clear Cart </Button>
              <Box>
                <Flex fontWeight={"500"} fontFamily={"14px"}>
                  <Text>Subtotal </Text>
                  {/* <Text>{item?.cartQuantity} </Text> */}
                </Flex>
                <Text>Taxes and shipping calculated at checkout </Text>
                <Button
                  padding={"1rem 7rem"}
                  color={"#3D464D"}
                  backgroundColor={"#FFD333"}
                  fontSize={"16px"}
                  mt={"0.5rem"}
                >
                  Check out
                </Button>
                <Link href={"/"}>
                  <Text display={"flex"} mt={"0.5rem"}>
                    <GoArrowLeft style={{ marginTop: "4px" }} />{" "}
                    <Text as={"span"}>Continue shopping</Text>
                  </Text>
                </Link>
              </Box>
            </Flex>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CartPage;

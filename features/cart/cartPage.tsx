"use client";
import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import {
  addToCart,
  removeProductFromCart,
  decreaseProductQuantity,
  clearCart,
  cartTotals,
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
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import "./cart.css";

const CartPage = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(cartTotals(""));
  }, [cart, dispatch]);

  useEffect(() => {
    const cartItemsFromLocalStorage = localStorage.getItem("cartItems");
    if (cartItemsFromLocalStorage) {
      const parsedCartItems = JSON.parse(cartItemsFromLocalStorage);
    }
  }, [dispatch]);

  const handleRemoveProductFromCart = (cartItem: {
    title: string;
    image: string;
    price: any;
    cartQuantity: number;
    id: React.Key | null | undefined;
  }) => {
    dispatch(removeProductFromCart(cartItem));
  };
  const handleDecreaseFromCart = (cartItem: any) => {
    dispatch(decreaseProductQuantity(cartItem));
  };
  const handleIncreaseFromCart = (cartItem: any) => {
    dispatch(addToCart(cartItem));
  };
  const handleClearCart = () => {
    dispatch(clearCart("Cleared"));
  };

  return (
    <>
      <Box overflow={"hidden"}>
        <Box padding={{ base: "2rem 2rem", lg: "2rem 4rem" }}>
          <Text textAlign={"center"} fontWeight={"500"} fontSize={"30px"}>
            Your Cart
          </Text>
          {cart.cartItems.length === 0 ? (
            <Box textAlign={"center"}>
              <Text mt={"2rem"}>Your cart is Currently Empty</Text>
              <Link href={"/"}>
                <Text
                  display={"flex"}
                  mt={"0.5rem"}
                  cursor={"pointer"}
                  justifyContent={"center"}
                >
                  <GoArrowLeft style={{ marginTop: "4px" }} />{" "}
                  <Text as={"span"}>Continue shopping</Text>
                </Text>
              </Link>
            </Box>
          ) : (
            <Box>
              <Table variant="unstyled">
                <Thead>
                  <Tr borderBottom={"1px solid #dddddd"}>
                    <Th>Product</Th>
                    <Th>Price</Th>
                    <Th>Quantity</Th>
                    <Th>Total</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {cart.cartItems?.map(
                    (cartItem: {
                      title: string;
                      image: string;
                      price: any;
                      cartQuantity: number;
                      id: number;
                    }) => (
                      <Tr key={cartItem.id} borderTop={" 1px solid #dddddd;"}>
                        <Td
                          data-label="Product: "
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <Image
                            src={cartItem.image}
                            alt={cartItem.title}
                            height={"5rem"}
                            width={"5rem"}
                            mr={"1rem"}
                          />
                          <Box>
                            <Text fontSize={{ base: "12px", lg: "sm" }}>
                              {cartItem.title}
                            </Text>
                            <Button
                              size="xs"
                              mt="0.5rem"
                              onClick={() =>
                                handleRemoveProductFromCart(cartItem)
                              }
                            >
                              Remove
                            </Button>
                          </Box>
                        </Td>

                        <Td data-label="price: ">${cartItem.price}</Td>
                        <Td
                          data-label="Quantity:"
                          display={{ base: " flex", md: "block", lg: "block" }}
                          position={"relative"}
                          top={{ base: "0", md: "-1.5rem", lg: "-1.5rem" }}
                        >
                          <Stack width={"10rem"}>
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
                        </Td>
                        <Td data-label="Total: ">
                          ${cartItem.price * cartItem.cartQuantity}
                        </Td>
                      </Tr>
                    )
                  )}
                </Tbody>
              </Table>

              <Flex
                justifyContent={"space-between"}
                borderTop={"1px solid gray"}
                paddingTop={"2rem"}
                flexDirection={{ base: "column", lg: "row" }}
                w={"100%"}
              >
                <Button onClick={() => handleClearCart()}>Clear Cart </Button>
                <Box mt={"1.5rem"}>
                  <Flex
                    fontWeight={"500"}
                    fontFamily={"14px"}
                    justifyContent={"space-between"}
                  >
                    <Text>Subtotal </Text>
                    <Text>${cart?.cartTotalAmount} </Text>
                  </Flex>
                  <Text>Taxes and shipping calculated at checkout </Text>
                  <Button
                    padding={"1rem 7rem"}
                    color={"#3D464D"}
                    backgroundColor={"#FFD333"}
                    fontSize={"16px"}
                    mt={"0.5rem"}
                    w={"100%"}
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
    </>
  );
};

export default CartPage;

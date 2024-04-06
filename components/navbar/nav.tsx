import {
  Box,
  Flex,
  HStack,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
  Circle,
  InputGroup,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { IoMdArrowDropdown, IoIosArrowDown } from "react-icons/io";
import { AiFillHeart, AiOutlineSearch } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FcMenu } from "react-icons/fc";
import { FaTimes } from "react-icons/fa";
import SideNav from "./sideNav";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/hooks";

type NavProps = {
  isSidebarOpen: boolean;
  toggleSideBar: () => void;
};

const Nav: React.FC<NavProps> = ({ isSidebarOpen, toggleSideBar }) => {

   const router = useRouter();
  const handleNext = () => {
    router.push("/products/cart");
  };
  const handleHome = () => {
    router.push("/")
  }

  const CategoriesMenu = [
    {
      items: "Dresses",
      url: "/",
    },
    { items: "Shirts", url: "/" },
    { items: "Jeans", url: "/" },
    { items: "Swimwear", url: "/" },
    { items: "Sportwear", url: "/" },
    { items: "Sleepwear", url: "/" },
    { items: "Jumpsuits", url: "/" },
    { items: "Blazers", url: "/" },
    {
      items: "Jackets",
      url: "/",
    },
    { items: "Shoes", url: "/" },
  ];

 const { cartTotalQuantity } = useAppSelector((state) => state.cart);
  return (
    <>
      <Box overflow={"hidden"}>
        {/*********************************************first nav bar start*****************************88*************/}
        <Flex
          justifyContent={"space-between"}
          bg={"#f7fafc"}
          height={"3rem"}
          overflow={"hidden"}
          w={"100%"}
        >
          <HStack
            ml={"4rem"}
            display={{ base: "none", md: "flex", lg: "flex" }}
          >
            <List
              display={"flex"}
              justifyContent={"space-between"}
              gap={"2rem"}
              color={"#6C757D"}
            >
              <ListItem>About</ListItem>
              <ListItem>Contact</ListItem>
              <ListItem>FAQS</ListItem>
              <ListItem>Help</ListItem>
            </List>
          </HStack>
          <Box w={{ base: "85%", md: "25%", lg: "25%" }}>
            <HStack
              mr={"4rem"}
              ml={{ base: "1rem", md: "0", lg: "0" }}
              mt={{ base: "4px", md: "", lg: "4px" }}
            >
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<IoMdArrowDropdown />}
                  fontSize={{ base: "12px", md: "15px", lg: "15px" }}
                  fontWeight={"500"}
                  h={"2rem"}
                  bg={"white"}
                  borderRadius={"none"}
                  pr={{ base: "3px", md: "", lg: "" }}
                  pl={{ base: "5px", md: "", lg: "" }}
                >
                  My Account
                </MenuButton>
                <MenuList>
                  <MenuItem as="a" href="#">
                    Sign in
                  </MenuItem>
                  <MenuItem>Sign Up</MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<IoMdArrowDropdown />}
                  w={{ base: "4rem", md: "5rem", lg: "5rem" }}
                  fontSize={{ base: "10px", md: "15px", lg: "15px" }}
                  fontWeight={"500"}
                  h={"2rem"}
                  bg={"white"}
                  borderRadius={"none"}
                >
                  USD
                </MenuButton>
                <MenuList>
                  <MenuItem>EUR</MenuItem>
                  <MenuItem>GBP</MenuItem>
                  <MenuItem>CAD</MenuItem>
                </MenuList>
              </Menu>

              <Menu>
                <Box p={"0"} w={{ base: "3rem", md: "0", lg: "0" }}>
                  <MenuButton
                    as={Button}
                    rightIcon={<IoMdArrowDropdown />}
                    fontSize={{ base: "10px", md: "15px", lg: "15px" }}
                    fontWeight={"500"}
                    h={"2rem"}
                    bg={"white"}
                    borderRadius={"none"}
                  >
                    EN
                  </MenuButton>
                  <MenuList>
                    <MenuItem>FR</MenuItem>
                    <MenuItem>AR</MenuItem>
                    <MenuItem>RU</MenuItem>
                  </MenuList>
                </Box>
              </Menu>
            </HStack>
          </Box>
          <Flex
            position={"relative"}
            left={"-3.5rem"}
            mt={"0.7rem"}
            gap={"5px"}
            display={{ base: "flex", md: "none", lg: "none" }}
            w={{ base: "20%", md: "", lg: "" }}
          >
            <Flex gap={"5px"}>
              <AiFillHeart fontSize={"1.3rem"} />
              <Circle
                size="20px"
                bg="trasparent"
                outline={"blue"}
                border={"1px solid black"}
              >
                <Text fontSize={"10px"}>0</Text>
              </Circle>
            </Flex>

            <Flex gap={"5px"} onClick={handleNext} cursor={"pointer"}>
              <FaShoppingCart fontSize={"1.3rem"} />
              <Circle
                size="20px"
                bg="trasparent"
                outline={"blue"}
                border={"1px solid black"}
              >
                <Text fontSize={"10px"}> {cartTotalQuantity}</Text>
              </Circle>
            </Flex>
          </Flex>
        </Flex>

        {/*********************************************first nav bar end******************************************/}

        {/*********************************************second nav bar start******************************************/}

        <Flex display={{ base: "none", md: "flex", lg: "flex" }}>
          <Box mt={"1rem"} ml={"4rem"}>
            <Text onClick={handleHome} cursor={"pointer"}>
              <Text
                as="span"
                color={"#FFD333"}
                bg={"#3D464D"}
                fontWeight={"700"}
                fontSize={"40px"}
                p={"0px 0 0px 8px"}
              >
                MULTI{" "}
                <Text
                  as="span"
                  bg={"#FFD333"}
                  color={"#3D464D"}
                  p={"0px 20px 0px 8px"}
                >
                  {" "}
                  SHOP
                </Text>
              </Text>
            </Text>
          </Box>
          <Box mx={"auto"} w={"25%"} mt={"1rem"}>
            <form autoComplete="off" style={{ display: "flex" }}>
              <InputGroup w={"100%"}>
                <Input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search for products"
                  required
                  //   value={ipAddress}
                  //   onChange={e => setIpAddress(e.target.value)}
                  bg={"white"}
                  borderRadius={"none"}
                />
              </InputGroup>
              <Button
                bg={"transparent"}
                border={"1px solid #ced4da"}
                borderRadius={"none"}
                type="submit"
              >
                <AiOutlineSearch color="#FFD333" fontFamily="40px" />
              </Button>
            </form>
          </Box>
          <Box mr={"4rem"} mt="1rem">
            <Text
              color={"#6C757D"}
              fontSize={"1rem"}
              fontWeight={400}
              ml={"0.5rem"}
            >
              Customer Service
            </Text>
            <Text color={"#3D464D"} fontSize={"1.25rem"} fontWeight={500}>
              +012 345 6789
            </Text>
          </Box>
        </Flex>

        {/*********************************************second nav bar end******************************************/}

        {/*********************************************third nav bar start******************************************/}

        {/*********************************************Third nav bar end******************************************/}
        <Flex
          bg={"#3D464D"}
          mt={"1rem"}
          justifyContent={"space-between"}
          display={{ base: "none", md: "flex", lg: "flex" }}
        >
          <Flex bg={"#FFD333"} ml={"4rem"} h={"4rem"} w={"17.2rem"}>
            <Box marginLeft={"2rem"} fontSize={"1.5rem"} mt={"1rem"}>
              <GiHamburgerMenu />
            </Box>
            <Menu>
              <MenuButton
                as={Button}
                fontSize={{ base: "10px", md: "15px", lg: "1.5rem" }}
                fontWeight={"500"}
                borderRadius={"none"}
                bg={"#FFD333"}
                _hover={{ color: "none" }}
                _active={{ color: "none" }}
              >
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  mt={"1rem"}
                >
                  Categories
                  <Box marginLeft={"3rem"} fontSize={"1.5rem"} mt={"0.5rem"}>
                    <IoIosArrowDown />
                  </Box>
                </Box>
              </MenuButton>

              <MenuList>
                {CategoriesMenu.map((item, index) => (
                  <MenuItem as={Link} href={item.url} key={index}>
                    <Text color={"black"} fontSize={"14px"}>
                      {item.items}
                    </Text>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Flex>

          <HStack
            mr={"10rem"}
            display={{ base: "none", md: "flex", lg: "flex" }}
          >
            <List
              display={"flex"}
              justifyContent={"space-between"}
              gap={"2rem"}
              color={"white"}
              fontSize={{ base: "10px", md: "15px", lg: "15px" }}
            >
              <ListItem onClick={handleHome} cursor={"pointer"}>
                Home
              </ListItem>
              <ListItem>Shop</ListItem>
              <ListItem>Shop Details</ListItem>
              <Menu>
                <Box p={"0"} w={{ base: "3rem", md: "0", lg: "0" }}>
                  <MenuButton
                    as={Button}
                    fontSize={{ base: "10px", md: "15px", lg: "15px" }}
                    h={"2rem"}
                    bg={"transparent"}
                    borderRadius={"none"}
                    _hover={{ color: "none" }}
                    p={"0"}
                    _active={{ color: "none" }}
                  >
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      color={"white"}
                      mb={"0.5rem"}
                    >
                      Pages
                      <Box mt={"3px"}>
                        <IoIosArrowDown />
                      </Box>
                    </Box>
                  </MenuButton>
                  <MenuList
                    bg={"#FFD333"}
                    color={"#212529"}
                    fontWeight={"400"}
                    borderRadius={"none"}
                    border={"none"}
                  >
                    <MenuItem bg={"#FFD333"}>Shopping cart</MenuItem>
                    <MenuItem bg={"#FFD333"}>Checkout</MenuItem>
                  </MenuList>
                </Box>
              </Menu>
              <ListItem ml={"2rem"}>Contact</ListItem>
            </List>
          </HStack>

          <Flex
            position={"relative"}
            left={"-3.5rem"}
            mt={"1.2rem"}
            gap={"1rem"}
            display={{ base: "none", md: "flex", lg: "flex" }}
          >
            <Flex gap={"5px"}>
              <AiFillHeart fontSize={"1.3rem"} color="#FFD333" />
              <Circle
                size="20px"
                bg="trasparent"
                outline={"blue"}
                border={"1px solid white"}
              >
                <Text fontSize={"10px"} color={"white"}>
                  0
                </Text>
              </Circle>
            </Flex>

            <Flex gap={"5px"} onClick={handleNext} cursor={"pointer"}>
              <FaShoppingCart fontSize={"1.3rem"} color="#FFD333" />
              <Circle size="20px" bg="trasparent" border={"1px solid white"}>
                <Text fontSize={"10px"} color={"white"}>
                  {cartTotalQuantity}
                </Text>
              </Circle>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          bg={"#3D464D"}
          justifyContent={"space-between"}
          h={"auto"}
          display={{ base: "flex", md: "none", lg: "none" }}
        >
          <Box mt={"1rem"} ml={"1rem"}>
            <Text onClick={handleHome}>
              <Text
                as="span"
                color={"#3D464D"}
                bg={"white"}
                fontWeight={"700"}
                fontSize={"30px"}
                p={"0px 0 0px 8px"}
              >
                MULTI{" "}
                <Text
                  as="span"
                  bg={"#FFD333"}
                  color={"white"}
                  p={"0px 10px 0px 8px"}
                >
                  {" "}
                  SHOP
                </Text>
              </Text>
            </Text>
          </Box>

          <Box fontSize={"1.5rem"} mt="1rem" mr={"1rem"} mb={"1rem"}>
            <Button
              onClick={toggleSideBar}
              bg={"#3D464D"}
              border={"1px solid white"}
            >
              {isSidebarOpen ? (
                <FaTimes fontSize={"2rem"} color={"white"} />
              ) : (
                <FcMenu fontSize={"2rem"} />
              )}
            </Button>
          </Box>
        </Flex>
        <SideNav
          isSidebarOpen={false}
          toggleSideBar={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </Box>
    </>
  );
};

export default Nav;

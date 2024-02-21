import {
  Box,
  Grid,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Flex,
  Input,
  Button,
  Divider,
  Link,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import payments from "../public/img/payments.png";

interface FooterType {
  //
}

const Footer: React.FC<FooterType> = () => {
  return (
    <Box
      width={"100%"}
      background={"#3D464D"}
      padding={{
        base: "2rem 1rem 2rem 1rem",
        md: " 4rem 3rem 2rem 3rem",
        lg: "4rem 3rem 2rem 3rem",
      }}
    >
      <Grid
        gridTemplateColumns={{
          base: "1fr",
          md: "1fr 1fr",
          lg: "1fr 1fr 1fr 1fr",
        }}
        color={"#F5F5F5"}
        fontWeight={"400"}
        fontSize={"16px"}
        columnGap={"3rem"}
        pb={"4rem"}

        // fontSize={"1.25rem"}
      >
        <Box>
          <Text fontWeight={"500"} mb={"1.5rem"}>
            GET IN TOUCH
          </Text>
          <Box></Box>
          <Text width={{ base: "95%", md: "", lg: "22rem" }}>
            No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et
            et dolor sed dolor. Rebum tempor no vero est magna amet no
          </Text>
          <List spacing={2} mt={"1.5rem"}>
            <ListItem>
              <ListIcon>
                <FaLocationDot />
              </ListIcon>
              123 Street, New York, USA
            </ListItem>
            <ListItem>
              <ListIcon>
                <MdEmail />
              </ListIcon>
              info@example.com
            </ListItem>
            <ListItem>
              <ListIcon>
                <IoIosCall />
              </ListIcon>
              +012 345 67890
            </ListItem>
          </List>
        </Box>
        <Box>
          <Text
            fontWeight={"500"}
            mb={"1.5rem"}
            mt={{ base: "2rem", md: "0rem", lg: "0" }}
          >
            QUICK SHOP
          </Text>
          <List spacing={2}>
            <ListItem>
              <ListIcon>
                <IoIosArrowForward />
              </ListIcon>
              Home
            </ListItem>
            <ListItem>
              <ListIcon>
                <IoIosArrowForward />
              </ListIcon>
              Our Shop
            </ListItem>
            <ListItem>
              <ListIcon>
                <IoIosArrowForward />
              </ListIcon>
              Shop Detail
            </ListItem>
            <ListItem>
              <ListIcon>
                <IoIosArrowForward />
              </ListIcon>
              Shopping Cart
            </ListItem>
            <ListItem>
              <ListIcon>
                <IoIosArrowForward />
              </ListIcon>
              Checkout
            </ListItem>
            <ListItem>
              <ListIcon>
                <IoIosArrowForward />
              </ListIcon>
              Contact Us
            </ListItem>
          </List>
        </Box>

        <Box>
          <Text
            fontWeight={"500"}
            mb={"1.5rem"}
            mt={{ base: "2rem", md: "2rem", lg: "0" }}
          >
            MY ACCOUNT
          </Text>
          <List spacing={2}>
            <ListItem>
              <ListIcon>
                <IoIosArrowForward />
              </ListIcon>
              Home
            </ListItem>
            <ListItem>
              <ListIcon>
                <IoIosArrowForward />
              </ListIcon>
              Our Shop
            </ListItem>
            <ListItem>
              <ListIcon>
                <IoIosArrowForward />
              </ListIcon>
              Shop Detail
            </ListItem>
            <ListItem>
              <ListIcon>
                <IoIosArrowForward />
              </ListIcon>
              Shopping Cart
            </ListItem>
            <ListItem>
              <ListIcon>
                <IoIosArrowForward />
              </ListIcon>
              Checkout
            </ListItem>
            <ListItem>
              <ListIcon>
                <IoIosArrowForward />
              </ListIcon>
              Contact Us
            </ListItem>
          </List>
        </Box>
        <Box>
          <Text
            fontWeight={"500"}
            mb={"1.5rem"}
            mt={{ base: "2rem", md: "2rem", lg: "0" }}
          >
            NEWSLETTER
          </Text>
          <Text mb={"1rem"}>
            Duo stet tempor ipsum sit amet magna ipsum tempor est
          </Text>
          <Flex>
            <Input
              borderRadius={"0"}
              mb={"1rem"}
              backgroundColor={"white"}
              placeholder="Your Email Address"
            />
            <Button borderRadius={"0"} backgroundColor={"#FFD333"}>
              Sign Up
            </Button>
          </Flex>
          <Text mb={"1rem"}>FOLLOW US</Text>
          <Flex gap={"1rem"}>
            <Box backgroundColor={"#FFD333"} padding={"0.7rem"}>
              <FaTwitter style={{ color: "3D464D" }} />
            </Box>
            <Box backgroundColor={"#FFD333"} padding={"0.7rem"}>
              <FaFacebookF style={{ color: "3D464D" }} />
            </Box>
            <Box backgroundColor={"#FFD333"} padding={"0.7rem"}>
              <FaLinkedinIn style={{ color: "3D464D" }} />
            </Box>
            <Box backgroundColor={"#FFD333"} padding={"0.7rem"}>
              <FaInstagram style={{ color: "3D464D" }} />
            </Box>
          </Flex>
        </Box>
      </Grid>
      <Divider />
      <Flex justifyContent={"space-between"} mt={"1.5rem"} flexDirection={{base: "column", md: "column", lg: "row"}}>
        <Text color={"white"} mb={{base: "1rem", md: "1rem", lg: "0"}}>
          {" "}
          &copy; Design inspiration from
          <Link color={"#FFD333"} href="https://htmlcodex.com/">
            {" "}
            HTML Codex
          </Link>{" "}
          and developed by{" "}
          <span style={{ color: "#FFD333" }}>Adebiyi Oluwaseun</span>
        </Text>
        <Image src={payments.src} alt="Payments" />
      </Flex>
    </Box>
  );
};

export default Footer;

"use client";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./styles.css";
import {
  Autoplay,
  Pagination,
  Navigation,
  Scrollbar,
  A11y,
} from "swiper/modules";
import carousel from "../../public/img/carousel-1.jpg";
import carousel2 from "../../public/img/carousel-2.jpg";
import carousel3 from "../../public/img/carousel-3.jpg";
import offer1 from "../../public/img/offer-1.jpg";
import offer2 from "../../public/img/offer-2.jpg";

function CarouselItems() {
  const carouselData = [
    {
      picture: carousel,
      title: "Men Fashion",
      text: "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
      btn: "Shop Now",
    },
    {
      picture: carousel2,
      title: "Women Fashion ",
      text: "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
      btn: "Shop Now",
    },
    {
      picture: carousel3,
      title: "Kids Fashion",
      text: "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
      btn: "Shop Now",
    },
  ];
  const offers = [
    {
      pic: offer1,
      title: "SAVE 20%",
      text: "Special Offer",
      btn: "Shop Now",
    },
    {
      pic: offer2,
      title: "SAVE 20%",
      text: "Special Offer",
      btn: "Shop Now",
    },
  ];
  return (
    <>
      <Box width={"100%"} p={"1rem 3rem 1rem 3rem"}>
        <Flex gap={"2rem"}>
          <Box width={"65%"}>
            <Swiper
              spaceBetween={50}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              slidesPerView={1}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation, Scrollbar, A11y]}
              className="mySwiper"
            >
              {carouselData.map((item, index) => (
                <SwiperSlide key={index}>
                  <Box>
                    <Box
                      backgroundPosition="center"
                      backgroundRepeat="no-repeat"
                      backgroundSize="cover"
                      h="70vh"
                      border={"0.5px solid transparent"}
                      // backgroundImage={`url(${item.picture.src})`}
                      backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.picture.src})`}
                    >
                      <Text
                        fontWeight="500"
                        fontSize="3rem"
                        color={"white"}
                        textAlign="center"
                        mt={"7rem"}
                      >
                        {item?.title}
                      </Text>
                      <Text
                        fontWeight="400"
                        fontSize="1.1rem"
                        textAlign="center"
                        color="white"
                        width={"70%"}
                        margin={"auto"}
                      >
                        {item?.text}
                      </Text>
                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        mt={"1rem"}
                      >
                        <Button
                          bg={"transparent"}
                          borderRadius={"none"}
                          border={"1px solid white"}
                          color={"white"}
                        >
                          {item?.btn}
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>

          <Flex flexDir={"column"} gap={"2rem"} width={"30%"}>
            {offers.map((item, index) => (
              <Box
                key={index}
                backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.pic.src})`}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                width={"25rem"}
                height={"13rem"}
              >
                <Box color={"white"} mt={"3rem"}>
                  <Text
                    fontWeight={"500"}
                    fontSize={"1rem"}
                    textAlign={"center"}
                  >
                    {item?.title}
                  </Text>
                  <Text
                    fontWeight={"700"}
                    fontSize={"2rem"}
                    textAlign={"center"}
                  >
                    {item?.text}
                  </Text>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    mt={"1rem"}
                  >
                    <Button bg={"#FFD333"} borderRadius={"none"}>
                      {item?.btn}
                    </Button>
                  </Box>
                </Box>
              </Box>
            ))}
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default CarouselItems;

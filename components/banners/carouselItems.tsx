"use client";
import { Box, Card,Flex,Grid,Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
// import "swiper/swiper.min.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import carousel from "../../public/img/carousel-1.jpg"
import carousel2 from "../../public/img/carousel-2.jpg";
import carousel3 from "../../public/img/carousel-3.jpg";
import Image from "next/image";
import offer1 from "../../public/img/offer-1.jpg";
import offer2 from "../../public/img/offer-2.jpg";



function CarouselItems() {
  const carouselData = [
    {
      picture: carousel,
      title: "Men Fashion",
      text: "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
    },
    {
      picture: carousel2,
      title: "Women Fashion ",
      text: "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
    },
    {
      picture: carousel3,
      title: "Kids Fashion",
      text: "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
    },
  ];
   const offers = [
     {
       pic: offer1,
       title: "SAVE 20%",
       text: "Special Offer",
     },
     {
       pic: offer2,
       title: "SAVE 20%",
       text: "Special Offer",
     },
   ];
  return (
    <>
      <Box>
        <Flex justify="space-between">
        <Box>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            // style={{
            //   "--swiper-pagination-color": "#E9000E",
            //   "--swiper-pagination-bullet-inactive-color": "#D9D9D9",
            //   "--swiper-pagination-bullet-inactive-opacity": "1",
            //   "--swiper-pagination-bullet-size": "10px",
            //   "--swiper-pagination-bullet-width": "15px",
            //   "--swiper-pagination-bullet-height": "8px",
            //   "--swiper-pagination-bullet-horizontal-gap": "12px",
            //   "--swiper-pagination-bullet-vertical-gap": "20px",
            //   "--swiper-pagination-bullet-border-radius": "0px",
            // }}
          >
            {carouselData.map((item, index) => (
              <SwiperSlide key={index}>
                <Box>
                  <Box
                    // background={`linear-gradient(to top, #6A3F36, #6A3F36, #6A3F36), url(${item?.picture.src}),;`}
                    // backgroundBlendMode="overlay"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    // h="70vh"
                    border={"3px solid blue"}
                    // // backgroundImage={item?.picture}
                    // backgroundImage={item.picture.src}
                    backgroundImage={`url(${item.picture.src})`}
                    // backgroundSize="cover"
                    // backgroundPosition="center"
                    // width="50%"
                    // background={`linear-gradient(to top, #6A3F36, #6A3F36, #6A3F36), url(${item?.picture})`}
                    // height="100%"
                    // backgroundImage={"/img/carousel-2.jpg"}
                  >
                    {/* <Image
                  src={item?.picture}
                  alt="icons"
                  style={{ alignSelf: "center" }}
                /> */}
                    <Text
                      fontWeight="700"
                      fontSize="18px"
                      color={"#9F000A"}
                      textAlign="center"
                    >
                      {item?.title}
                    </Text>
                    <Text
                      fontWeight="400"
                      fontSize="14px"
                      textAlign="center"
                      color="#000000"
                    >
                      {item?.text}
                    </Text>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        <Box>
          {offers.map((item, index) => (
            <Box
              key={index}
              backgroundImage={item.pic.src}
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
            >
              <Text>{item?.title}</Text>
              <Text>{item?.text}</Text>
            </Box>
          ))}
        </Box>
        </Flex>
      </Box>
    </>
  );
}

export default CarouselItems;

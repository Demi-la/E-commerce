"use client";

import React from "react";
import { useGetProductsDetailsQuery } from "../../lib/api";
import { Box } from "@chakra-ui/react";
// import { useRouter } from "next/router";
import { useParams, useRouter } from "next/navigation";

interface ProductDetails {
  // Define the type for a single product
  id?: number;
  
  // Add other properties as needed
}
const ProductDetails: React.FC<ProductDetails> = () => {
      let { id } = useParams();
 
    const params = useParams<{ tag: string; item: string }>();
  const { data: data, error, isLoading } = useGetProductsDetailsQuery("");
  console.log("data =========================", data);
  console.log("error", error);
  console.log("isLoading", isLoading);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (data == null || data == undefined) {
    return <div>No data available</div>;
  }
  return (
   <Box>
    <Box boxSizing={"border-box"}>

    </Box>
   </Box>
  );
};

export default ProductDetails;

// "use client";



// import React from "react";
// import { useGetProductsDetailsQuery } from "../../lib/api";
// import { Box, Flex, Image, Text } from "@chakra-ui/react";
// import { useRouter, useParams } from "next/navigation";

// interface ProductDetails {
//   image?: string;
//   title?: string;
//   id: number;
// }

// const ProductDetails: React.FC<ProductDetails> = ({id}) => {
//   // const { id } = useParams(); // Assuming id is a number
//   // const productId = parseInt(id as string, 10); // Convert id to a number

//   const { data, error, isLoading } = useGetProductsDetailsQuery(id);

//   console.log("data", data);
//   console.log("error", error);
//   console.log("isLoading", isLoading);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     console.error("Error fetching data:", error);
//   }

//   if (!data) {
//     return <div>No data available</div>;
//   }

//   return (
//     <Box>
//       <Box boxSizing={"border-box"}>
//         <Flex>
//           <Box>
//             <Image
//               src={data["image"]}
//               alt="Product image"
//               position={"relative"}
//               transition={".5s"}
//               overflow={"hidden"}
//               width={"100%"}
//               height={"13rem"}
//             />
//           </Box>
//           <Text>hello</Text>
//           <Box>{data?.title}</Box>
//         </Flex>
//       </Box>
//     </Box>
//   );
// };

// export default ProductDetails;

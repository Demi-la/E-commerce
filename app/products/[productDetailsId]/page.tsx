"use client";

// import React from "react";
// import { useGetProductsDetailsQuery } from "../../lib/api";
// import { Box, Flex, Image, Text } from "@chakra-ui/react";
// // import {useParams} from "next/router"
// import { useRouter, useParams } from "next/navigation";

// interface ProductDetails {
//   // Define the type for a single product
//   // id?: number;
//   image?: string;
//   title?: string;
//   params?: { id: number };

//   // Add other properties as needed
// }
// const ProductDetails: React.FC<ProductDetails> = () => {
//   let { id } = useParams();

//   // const productId = params?.id;
//     // const { id: productId } = params || {};

//   // const params = useParams<{ tag: string; item: string }>();
//   const {
//     data: data,
//     error,
//     isLoading,
//   } = useGetProductsDetailsQuery(id as string, { skip: !id });
//   console.log("data =========================", data);
//   console.log("error", error);
//   console.log("isLoading", isLoading);
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error</div>;
//   }

//   if (data == null || data == undefined) {
//     return <div>No data available</div>;
//   }
//   return (
//     <Box>
//       <Box boxSizing={"border-box"}>
//         <Flex>
//           <Box>
//             <Image
//               src={data.image}
//               alt="Product image"
//               position={"relative"}
//               transition={".5s"}
//               overflow={"hidden"}
//               width={"100%"}
//               height={"13rem"}
//             />
//           </Box>
//           <Text> hello </Text>
//           <Box>iiii{data.title}</Box>
//           kkkkkkkkkkkkkkkyh
//         </Flex>
//       </Box>
//     </Box>
//   );
// };

// export default ProductDetails;

import React from "react";
import { useGetProductsDetailsQuery } from "../../../lib/api";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useRouter, useParams } from "next/navigation";


const ProductDetails = ({
  params
}: {
  params: { productDetailsId: number };
}) => {
  // const { id } = useParams(); // Assuming id is a number
  // const productId = parseInt(id as string, 10); // Convert id to a number

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
    <Box>
      <Box boxSizing={"border-box"}>
        <Flex>
          <Box>
            <Image
              src={data["image"]}
              alt="Product image"
              position={"relative"}
              transition={".5s"}
              overflow={"hidden"}
              width={"100%"}
              height={"13rem"}
            />
          </Box>
          <Text>hello</Text>
          <Box>{data?.title}</Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductDetails;

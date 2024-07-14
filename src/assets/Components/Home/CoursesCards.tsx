// import React from "react";
// import {
//   Card,
//   VStack,
//   Image,
//   Stack,
//   Heading,
//   Text,
//   Button,
//   Box,
//   CardBody,
//   SimpleGrid,
//   HStack,
//   GridItem,
//   Center,
// } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// import { coursesDetails } from "../../utilities/data";

// const CoursesCards = () => {
//   return (
//     <>
//       <Box mt="10">
//         <Text fontSize={"lg"} textAlign={"center"} fontWeight={"bold"}>
//           Our Courses
//         </Text>
//       </Box>
//       <SimpleGrid
//         // columns={{ base: 1, md: 2, lg: 3 }}
//         columns={{ base: 1, md: 2, lg: 3 }}
//         spacing={5}
//         mt="10"
//         ml="160px"
//         mr="160px"
//       >
//         {" "}
//         {/* Ensure minimum width */}
//         <Center>
//           {coursesDetails.first.map((item, idx) => (
//             <Card minW={{ base: "200px", md: "250px", lg: "300px" }}>
//               {" "}
//               {/* Set minimum card width */}
//               <CardBody p="2">
//                 <VStack spacing="5px" textAlign={"center"}>
//                   {" "}
//                   {/* Use full width for VStack */}
//                   <Image src={item.image} alt="" borderRadius="lg" key={idx} />
//                   <Stack spacing="3">
//                     <Heading size="md">{item.header}</Heading>
//                     <Text>{item.text}</Text>
//                   </Stack>
//                   <Link to={item.link}>
//                     <Button
//                       variant="solid"
//                       colorScheme="none"
//                       color="#a020f0"
//                       mt="4"
//                     >
//                       {item.button}
//                     </Button>
//                   </Link>
//                 </VStack>
//               </CardBody>
//             </Card>
//           ))}
//         </Center>
//       </SimpleGrid>
//     </>
//   );
// };

// export default CoursesCards;

import React from "react";
import {
  Card,
  VStack,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Box,
  CardBody,
  SimpleGrid,
  HStack,
  GridItem,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { coursesDetails } from "../../utilities/data";

const CoursesCards = () => {
  return (
    <>
      <Box mt="10">
        <Text fontSize={"lg"} textAlign={"center"} fontWeight={"bold"}>
          Our Courses
        </Text>
      </Box>

      <SimpleGrid
        ml="160px"
        mr="160px"
        columns={{ base: 1, md: 2, lg: 3 }} // Responsive column adjustments
        spacing={{ base: 5, md: 10, lg: 16 }} // Adjust spacing based on screen size
        mt="10"
        // Remove unnecessary margins
      >
        {coursesDetails.first.map((item, idx) => (
          <Center>
            <GridItem key={idx}>
              <Card w={{ base: "300px", md: "300px", lg: "300px" }}>
                <CardBody p="2">
                  <VStack spacing="5px" textAlign={"center"}>
                    <Image src={item.image} alt="" borderRadius="lg" />
                    <Stack spacing="3">
                      <Heading size="md">{item.header}</Heading>
                      <Text fontSize={"sm"}>{item.text}</Text>
                    </Stack>
                    <Link to={item.link}>
                      <Button
                        variant="solid"
                        colorScheme="none"
                        color="#a020f0"
                        mt="4"
                      >
                        {item.button}
                      </Button>
                    </Link>
                  </VStack>
                </CardBody>
              </Card>
            </GridItem>{" "}
          </Center>
        ))}
      </SimpleGrid>
    </>
  );
};

export default CoursesCards;

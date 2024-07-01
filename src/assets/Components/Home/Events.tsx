// import React from "react";
// import {
//   Text,
//   Center,
//   Stack,
//   SimpleGrid,
//   CardHeader,
//   Heading,
//   CardBody,
//   CardFooter,
//   Card,
//   Image,
//   Box,
//   GridItem,
// } from "@chakra-ui/react";
// import { eventCards } from "../../utilities/data";

// const Events = () => {
//   return (
//     <div>
//       <Center>
//         <Stack textAlign={"center"} w="400px">
//           <Text>Events</Text>
//           <Text>
//             Dive into the latest trends, strategies, and insights shaping the
//             dynamic world of design in any of our online events
//           </Text>
//         </Stack>
//       </Center>

//       <SimpleGrid spacing={4}>
//         {eventCards.().map((item, idx) () => (
//         <Card>
//           <CardHeader>
//             <Image size="md"  src={item.icon} key={idx} />
//           </CardHeader>
//           <CardBody>
//             <Header>
//              {item.title}
//             </Header>
//             <Text>{item.text}</Text>
//           </CardBody>

//         </Card>) )}
//       </SimpleGrid>
//     </div>
//   );
// };

// export default Events;

import React from "react";
import {
  Text,
  Center,
  Stack,
  SimpleGrid,
  CardHeader,
  Heading, // Use Heading instead of Header
  CardBody,
  Box,
  Card,
  Image,
} from "@chakra-ui/react";
import { eventCards } from "../../utilities/data";

const Events = () => {
  return (
    <div>
      <Center>
        <Stack textAlign={"center"} w="400px">
          <Text>Events</Text>
          <Text>
            Dive into the latest trends, strategies, and insights shaping the
            dynamic world of design in any of our online events
          </Text>
        </Stack>
      </Center>

      <SimpleGrid
        spacing={4}
        columns={[1, 1, 2, 4]}
        minWidth={["50px", "100px", "250px"]}
        // height="70px"
        mt="10"
        ml="160px"
        mr="160px"
      >
        {eventCards().map((item, index) => (
          <Card key={index} alignItems={"center"}>
            {" "}
            {/* Add key prop for each card */}
            <CardHeader>
              <Box borderRadius={"50%"}>
                <Image src={item.icon} key={index} />
              </Box>
            </CardHeader>
            <CardBody textAlign={"center"}>
              <Heading fontSize={"18px"}>{item.head}</Heading>{" "}
              {/* Use Heading component */}
              <Text fontSize={"14px"} mt={2}>
                {item.text}
              </Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default Events;

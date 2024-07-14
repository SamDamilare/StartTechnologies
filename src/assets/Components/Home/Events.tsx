// import React from "react";
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
  VStack,
} from "@chakra-ui/react";
import { eventCards } from "../../utilities/data";

const Events = () => {
  return (
    <div>
      <Center>
        {" "}
        <VStack>
          <Center>
            <Box w={{ base: "300px", md: "350px", lg: "400px" }}>
              <Stack textAlign={"center"} mt="100px">
                <Text fontWeight={600} fontSize={"lg"}>
                  Events
                </Text>
                <Text fontSize={"sm"}>
                  Dive into the latest trends, strategies, and insights shaping
                  the dynamic world of design in any of our online events
                </Text>
              </Stack>
            </Box>
          </Center>

          <SimpleGrid
            spacing={{ base: 4, md: 4, lg: 4 }}
            columns={[1, 1, 2, 4]}
            mt="10"
            ml="160px"
            mr="160px"
          >
            {eventCards().map((item, index) => (
              <Center>
                {" "}
                <Card
                  key={index}
                  alignItems={"center"}
                  h={{ base: "auto", md: "350px", lg: "350px" }}
                  minW={{ base: "200px", md: "200px", lg: "200px" }}
                >
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
                    <Text fontSize={"sm"} mt={2}>
                      {item.text}
                    </Text>
                  </CardBody>
                </Card>
              </Center>
            ))}
          </SimpleGrid>
        </VStack>
      </Center>
    </div>
  );
};

export default Events;

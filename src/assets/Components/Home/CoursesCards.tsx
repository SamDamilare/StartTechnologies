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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { coursesDetails } from "../../utilities/data";

const CoursesCards = () => {
  return (
    <>
      <Box mt="10">
        <Text fontSize={"lg"} textAlign={"center"} fontWeight={"bold"}>
          Courses
        </Text>
      </Box>
      <SimpleGrid
        columns={[1, 1, 2, 3]}
        // minWidth="300px"
        mt="10"
        ml="160px"
        mr="160px"
      >
        {" "}
        {/* Ensure minimum width */}
        <HStack alignItems={"normal"} spacing="50px">
          {coursesDetails.first.map((item, idx) => (
            <Card minWidth="300px">
              {" "}
              {/* Set minimum card width */}
              <CardBody w="full" p="2">
                <VStack w="full" spacing="5px" textAlign={"center"}>
                  {" "}
                  {/* Use full width for VStack */}
                  <Image src={item.image} alt="" borderRadius="lg" key={idx} />
                  <Stack spacing="3">
                    <Heading size="md">{item.header}</Heading>
                    <Text>{item.text}</Text>
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
          ))}
        </HStack>
      </SimpleGrid>
      <SimpleGrid
        columns={[1, 1, 2, 3]}
        minWidth="300px"
        mt="10"
        ml="160px"
        mr="160px"
      >
        {" "}
        {/* Ensure minimum width */}
        <HStack alignItems={"normal"} spacing="50px">
          {coursesDetails.second.map((item, idx) => (
            <Card minWidth="300px">
              {" "}
              {/* Set minimum card width */}
              <CardBody w="full" p="2">
                <VStack w="full" spacing="5px" textAlign={"center"}>
                  {" "}
                  {/* Use full width for VStack */}
                  <Image src={item.image} alt="" borderRadius="lg" key={idx} />
                  <Stack spacing="3">
                    <Heading size="md">{item.header}</Heading>
                    <Text>{item.text}</Text>
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
          ))}
        </HStack>
      </SimpleGrid>
    </>
  );
};

export default CoursesCards;

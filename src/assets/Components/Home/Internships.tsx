import {
  Box,
  VStack,
  Text,
  Image,
  Center,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import React from "react";

const VirtualClasses = () => {
  return (
    <div>
      <Box
        mt="80px"
        ml={{ base: "20px", md: "20px", lg: "160px" }}
        mr={{ base: "20px", md: "20px", lg: "160px" }}
      >
        <VStack>
          <Box w={{ base: "300px", md: "350px", lg: "400px" }}>
            <Center>
              <VStack textAlign={"center"} w={"80%"}>
                <Text fontWeight={"600"}>Get Internship placements </Text>
                <Text fontSize={"sm"}>
                  We have a pool of ready projects ready to be live that you can
                  get your hands on to add to your portfolio.
                </Text>
              </VStack>
            </Center>
          </Box>

          <Box>
            <SimpleGrid
              columns={{ base: 1, md: 1, lg: 2 }}
              gap={{ base: "40px", md: "40px", lg: "70px" }}
              w={{ base: "300px", md: "350px", lg: "400px" }}
              mt="40px"
            >
              <Button bgColor={"#f6ebfe"} color={"white"}>
                Submit CV
              </Button>
              <Button
                bgColor={"transparent"}
                colorScheme="#f6ebfe"
                variant="outline"
                color={"f6ebfe"}
              >
                Contact Us
              </Button>
            </SimpleGrid>
          </Box>

          <Image
            w={{ base: "300px", md: "600px", lg: "952px" }}
            mt={{ base: "30px", md: "30px", lg: "64px" }}
            src="https://res.cloudinary.com/dktrwqio1/image/upload/v1720144850/SSD/Rectangle_16_1_d0xram.png"
          />
        </VStack>
      </Box>
    </div>
  );
};

export default VirtualClasses;

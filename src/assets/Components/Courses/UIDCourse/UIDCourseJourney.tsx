// import React from "react";
import {
  Heading,
  VStack,
  Text,
  Box,
  Image,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";

const UIDCourseJourney = () => {
  return (
    <div>
      <Box
        ml={{ base: "20px", md: "30px", lg: "160px" }}
        mr={{ base: "20px", md: "30px", lg: "160px" }}
        mt="62px"
      >
        <SimpleGrid
          columns={{ base: 1, md: 1, lg: 2 }}
          gap={{ base: "40px", md: "40px", lg: "70px" }}
        >
          <GridItem>
            <VStack alignItems={"start"}>
              <Heading fontSize={"2xl"}>
                Why start your journey with us?
              </Heading>
              <Text fontSize={"sm"} mt="10px">
                Star School of Design's courses are the ultimate way to swiftly
                acquire valuable new skills and elevate your career. Discover
                more about these SSD courses and connect with a Learning Advisor
                who can answer your questions and guide you on your journey to
                success.
              </Text>
              <Box
                bgColor={"white"}
                p="10px"
                height={"100px"}
                borderRadius={"10px"}
                boxShadow={"10px black"}
                mt="10px"
              >
                <VStack alignItems={"flex-start"}>
                  <Text>Kick off:</Text>
                  <Text fontWeight={700} fontSize={"3xl"}>
                    6th January, 2025
                  </Text>
                </VStack>
              </Box>
            </VStack>
          </GridItem>
          <GridItem>
            <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1719744660/SSD/Frame_54_sstuql.png" />
          </GridItem>
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default UIDCourseJourney;

import React from "react";
import { Heading, VStack, Text, Box, Flex, Image } from "@chakra-ui/react";

const IDCourseJourney = () => {
  return (
    <div>
      <Box ml="160px" mr="160px" mt="62px">
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Box w="30vw">
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
                    1st August, 2024
                  </Text>
                </VStack>
              </Box>
            </VStack>
          </Box>
          <Box w="30vw">
            <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1719744660/SSD/Frame_54_sstuql.png" />
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default IDCourseJourney;

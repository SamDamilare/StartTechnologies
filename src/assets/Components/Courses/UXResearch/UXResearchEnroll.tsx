import React from "react";
import {
  Container,
  Heading,
  Stack,
  HStack,
  Text,
  Box,
  Flex,
  Image,
  Skeleton,
  Link,
} from "@chakra-ui/react";

const UXResearchEnroll = () => {
  return (
    <div>
      <Box ml="160px" mr="160px" mt="100px">
        <Flex justifyContent={"space-between"} alignItems={"end"}>
          <Box w="30vw">
            <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1719762375/SSD/Frame_58_oydvxg.png" />
          </Box>
          <Box w="30vw">
            <Heading>Enroll with us Today</Heading>
            <Text fontSize={"sm"}>
              You can enroll in a Star School of Design course anytime online.
              If you have questions about the course curriculum, or financing
              and scholarship opportunities, our team is here to help.
              <br /> <br />
              Complete a quick enrollment by confirming when and where you'd
              like to learn and selecting your payment options.
              <br /> <br />
              Congratulations! SSD will provide you with everything you need to
              know in advance of your course kick-off so you’re prepared and
              ready to thrive.
            </Text>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default UXResearchEnroll;

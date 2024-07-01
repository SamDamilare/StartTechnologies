import * as React from "react";
import {
  Heading,
  Text,
  Box,
  Flex,
  Image,
  Skeleton,
  Link,
} from "@chakra-ui/react";

const AboutWhoWeAre = () => {
  return (
    <div>
      <Box ml="160px" mr="160px" mt="62px">
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Box w="30vw">
            <Heading>Who we are</Heading>
            <Text fontSize={"sm"}>
              At Star School of Design, our passionate team of designers and
              educators work tirelessly to craft programs that ignite creativity
              and transform careers. Our platform offers an extensive array of
              online courses, resources, and tools designed to inspire and
              empower you to unleash your full potential. Our dedication to
              making top-tier design education accessible to everyone is at the
              core of our mission. That’s why we provide flexible and affordable
              programs, ensuring that anyone, anywhere, can pursue their dreams
              and excel in the world of design. Join us at SSD and embark on a
              journey to shape the future of design.
            </Text>
          </Box>
          <Box w="30vw">
            <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1719653108/SSD/Frame_40_cour1a.png" />
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default AboutWhoWeAre;

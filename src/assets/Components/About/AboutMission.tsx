import * as React from "react";
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

const AboutMission = () => {
  return (
    <div>
      <Box ml="160px" mr="160px" mt="62px">
        <Flex justifyContent={"space-between"} alignItems={"end"}>
          <Box w="30vw">
            <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1719653127/SSD/Frame_41_zsab6v.png" />
          </Box>
          <Box w="30vw">
            <Heading>Mission</Heading>
            <Text fontSize={"sm"}>
              At Star School of Design, our mission is to illuminate the path to
              creativity and innovation. Our dedicated team of design experts
              collaborates to create programs that meet the diverse needs of our
              students and inspire organizational transformation. Our platform
              boasts a rich variety of online courses, resources, and tools, all
              meticulously crafted to help you acquire new skills, elevate your
              career, and follow your passion. We believe that high-quality
              design education should be accessible to all. This unwavering
              commitment drives us to offer flexible and affordable programs,
              ensuring that everyone, regardless of their background, can access
              the knowledge and resources they need to thrive. At SSD, we
              empower you to dream big and design a brighter future.
            </Text>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default AboutMission;

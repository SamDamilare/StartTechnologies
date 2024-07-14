// import * as React from "react";
import {
  Heading,
  Text,
  Box,
  Image,
  SimpleGrid,
  GridItem,
  Center,
} from "@chakra-ui/react";

const AboutMission = () => {
  return (
    <div>
      <Center>
        <Box
          w={{ base: "300px", md: "600px", lg: "952px" }}
          ml={{ base: "20px", md: "30px", lg: "160px" }}
          mr={{ base: "20px", md: "30px", lg: "160px" }}
          mt="62px"
        >
          <SimpleGrid
            columns={{ base: 1, md: 1, lg: 2 }}
            alignItems={"end"}
            gap={{ base: "40px", md: "40px", lg: "70px" }}
          >
            <GridItem>
              <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1719653127/SSD/Frame_41_zsab6v.png" />
            </GridItem>
            <GridItem>
              <Heading>Mission</Heading>
              <Text fontSize={"sm"}>
                At Star School of Design, our mission is to illuminate the path
                to creativity and innovation. Our dedicated team of design
                experts collaborates to create programs that meet the diverse
                needs of our students and inspire organizational transformation.
                Our platform boasts a rich variety of online courses, resources,
                and tools, all meticulously crafted to help you acquire new
                skills, elevate your career, and follow your passion. <br />
                <br />
                We believe that high-quality design education should be
                accessible to all. This unwavering commitment drives us to offer
                flexible and affordable programs, ensuring that everyone,
                regardless of their background, can access the knowledge and
                resources they need to thrive. At SSD, we empower you to dream
                big and design a brighter future.
              </Text>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Center>
    </div>
  );
};

export default AboutMission;

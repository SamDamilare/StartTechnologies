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

const AboutWhoWeAre = () => {
  return (
    <div>
      <Center>
        <Box
          w={{ base: "300px", md: "600px", lg: "952px" }}
          ml={{ base: "30px", md: "30px", lg: "160px" }}
          mr={{ base: "30px", md: "30px", lg: "160px" }}
          mt="62px"
        >
          <SimpleGrid
            justifyContent={{ base: "center", md: "left", lg: "center" }}
            columns={{ base: 1, md: 1, lg: 2 }}
            gap={{ base: "40px", md: "40px", lg: "70px" }}
          >
            <GridItem textAlign={{ base: "start", md: "start", lg: "start" }}>
              <Heading>Who we are</Heading>
              <Text fontSize={"sm"}>
                At Star School of Design, our passionate team of designers and
                educators work tirelessly to craft programs that ignite
                creativity and transform careers. Our platform offers an
                extensive array of online courses, resources, and tools designed
                to inspire and empower you to unleash your full potential.
                <br />
                <br /> Our dedication to making top-tier design education
                accessible to everyone is at the core of our mission. That’s why
                we provide flexible and affordable programs, ensuring that
                anyone, anywhere, can pursue their dreams and excel in the world
                of design. Join us at SSD and embark on a journey to shape the
                future of design.
              </Text>
            </GridItem>
            <GridItem>
              <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1719653108/SSD/Frame_40_cour1a.png" />
            </GridItem>
          </SimpleGrid>
        </Box>
      </Center>
    </div>
  );
};

export default AboutWhoWeAre;

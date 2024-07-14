import { Box, Flex, Text, Image, Center, Stack } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { testimonyCards } from "../../utilities/data";

const Testimonials = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Box
      py={10}
      w={{ base: "none", md: "none", lg: "100%" }}
      ml={{ base: "20px", md: "20px", lg: "160px" }}
      mr={{ base: "20px", md: "20px", lg: "160px" }}
    >
      <Center>
        <Stack
          textAlign={"center"}
          w={{ base: "300px", md: "600px", lg: "952px" }}
          mt="100px"
        >
          <Text
            fontWeight={600}
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          >
            What people have to say
          </Text>
          <Text fontSize={{ base: "xs", md: "sm", lg: "sm" }} mt={2}>
            Some of our students have the most amazing things to say about our
            classes.
          </Text>
        </Stack>
      </Center>

      <Carousel
        responsive={responsive}
        autoPlay={false}
        autoPlaySpeed={3000}
        infinite={true}
      >
        {testimonyCards().map((item, idx) => (
          <Box
            key={idx}
            textAlign={"center"}
            w={{ base: "250px", md: "300px", lg: "100%" }}
            bgColor={"white"}
            borderRadius={"10px"}
            p="20px"
            mx={{ base: 2, lg: 4 }}
            minH={"250px"}
            boxShadow={"md"}
          >
            <Text
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              fontWeight={500}
            >
              {item.header}
            </Text>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="10px">
              {item.text}
            </Text>
            <Flex
              justifyContent={"center"}
              gap="10px"
              alignItems={"center"}
              mt="20px"
            >
              <Image src={item.image} boxSize={"50px"} borderRadius="full" />
              <Box fontSize={"sm"} textAlign={"left"}>
                <Text fontWeight={500}>{item.name}</Text>
                <Text fontStyle={"italic"} color={"#a020f0"} mt={1}>
                  {item.position}
                </Text>
              </Box>
            </Flex>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Testimonials;

import { Image, Box, VStack, Text, Center } from "@chakra-ui/react";
// import React from "react";

const AboutHeroes = () => {
  return (
    <div>
      <Center>
        <VStack
          alignItems={"center"}
          ml={{ base: "20px", md: "20px", lg: "160px" }}
          mr={{ base: "20px", md: "20px", lg: "160px" }}
        >
          <Box mt="60px" w={{ base: "300px", md: "600px", lg: "952px" }}>
            <Text
              fontSize={{ base: "20px", md: "40px", lg: "45px" }}
              textAlign={{ base: "start", md: "start", lg: "center" }}
              fontWeight={600}
              color="#50585f"
            >
              We are the <span style={{ color: "#a020ef" }}>Star </span>of
              <span
                style={{
                  background:
                    "radial-gradient(circle at 10% 20%, rgb(164, 38, 199) 0.1%, rgb(65, 220, 255) 90.1%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {" "}
                Design
              </span>
            </Text>
          </Box>
          <Box w={{ base: "300px", md: "600px", lg: "800px" }}>
            <Text
              fontSize={{ base: "xs", md: "sm", lg: "md" }}
              textAlign={{ base: "start", md: "start", lg: "center" }}
            >
              There has never been a better time in history to build digital
              products! We help our students advance their careers in Product
              Management and we partner with Fortune 500 companies to upskill
              their product teams.
            </Text>
          </Box>

          <Image
            w={{ base: "300px", md: "600px", lg: "952px" }}
            mt="20px"
            src="https://res.cloudinary.com/dktrwqio1/image/upload/v1719494738/SSD/Rectangle_1_1_vbc9vx.png"
          />
        </VStack>
      </Center>
    </div>
  );
};

export default AboutHeroes;

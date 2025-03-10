import { Box, Text, Image, VStack } from "@chakra-ui/react";
import ReuseHeroes from "../../NewTabs/ReuseHeroes";

const HeroFC = () => {
  return (
    <div>
      <Box>
        <VStack
          alignItems={"center"}
          ml={{ base: "20px", md: "20px", lg: "160px" }}
          mr={{ base: "20px", md: "20px", lg: "160px" }}
        >
          <Box mt="60px" w={{ base: "300px", md: "600px", lg: "952px" }}>
            <Text
              fontSize={{ base: "20px", md: "40px", lg: "45px" }}
              textAlign={"center"}
              fontWeight={600}
              color="#50585f"
            >
              <span style={{ color: "#a020f0" }}>Frontend</span> Development
            </Text>
          </Box>
          <ReuseHeroes content="Build Dynamic, User-Friendly Websites and Apps—Learn Frontend Development from Scratch to Advanced." />
          <Image
            w={{ base: "300px", md: "600px", lg: "952px" }}
            mt="40px"
            src="https://res.cloudinary.com/dktrwqio1/image/upload/v1739185460/SSD/Rectangle_1_8_xynh5w.png"
          />
        </VStack>
      </Box>
    </div>
  );
};

export default HeroFC;

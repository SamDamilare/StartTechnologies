import { Box, VStack, Text, GridItem, SimpleGrid } from "@chakra-ui/react";

import RegisterButton from "./RegisterButton";

interface ReuseHeroesProps {
  content: string;
  fontSize?: string;
  color?: string;
}

const ReuseHeroes: React.FC<ReuseHeroesProps> = ({ content }) => {
  return (
    <div>
      <VStack>
        <Box w={{ base: "300px", md: "600px", lg: "700px" }}>
          <Text
            fontSize={{ base: "xs", md: "sm", lg: "16px" }}
            textAlign={"center"}
          >
            {content}
          </Text>
        </Box>

        <Box mt={{ base: "10px", md: "30px", lg: "40px" }}>
          <SimpleGrid
            columns={{ base: 1, md: 3, lg: 5 }}
            alignItems={"center"}
            gap={{ base: "10px", md: "20px", lg: "32px" }}
            fontSize={"small"}
            textAlign={"center"}
          >
            <GridItem>
              {" "}
              <Box
                bgColor={"#edd3ff"}
                color={"#a020f0"}
                px="16px"
                py="12px"
                w="auto"
                borderRadius={"5px"}
              >
                Live Classrom
              </Box>
            </GridItem>
            <GridItem>
              {" "}
              <Box
                bgColor={"#edd3ff"}
                color={"#a020f0"}
                w="auto"
                px="16px"
                py="12px"
                borderRadius={"5px"}
              >
                12 Weeks
              </Box>
            </GridItem>
            <GridItem>
              {" "}
              <Box
                bgColor={"#edd3ff"}
                color={"#a020f0"}
                px="16px"
                w="auto"
                py="12px"
                borderRadius={"5px"}
              >
                Expert Instructions
              </Box>
            </GridItem>
            <GridItem>
              <Box
                bgColor={"#edd3ff"}
                color={"#a020f0"}
                px="16px"
                py="12px"
                w="auto"
                borderRadius={"5px"}
              >
                Certificate
              </Box>
            </GridItem>
            <GridItem>
              <Box
                bgColor={"#edd3ff"}
                color={"#a020f0"}
                px="16px"
                py="12px"
                w="auto"
                borderRadius={"5px"}
              >
                Internship
              </Box>
            </GridItem>
          </SimpleGrid>
        </Box>
        <RegisterButton />
      </VStack>
    </div>
  );
};

export default ReuseHeroes;
